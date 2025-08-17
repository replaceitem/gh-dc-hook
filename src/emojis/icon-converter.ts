import sharp from "sharp";
import {Element, js2xml, xml2js} from "xml-js";
import { Buffer } from 'node:buffer';

import {
    ImageMagick,
    initialize,
    MagickFormat,
} from "https://deno.land/x/imagemagick_deno/mod.ts";
import {IMagickImage, MagickImageCollection} from "npm:@imagemagick/magick-wasm@0.0.31";
import {IconOptions, icons} from "./icons.ts";

const EMOJI_SIZE = 128;


const injectSvgAttributes = (svg: string, attributes: Record<string, string>) => {
    const svgJson = xml2js(svg, {compact: false}) as Element;
    const svgElement = svgJson.elements?.find((e) => e.name === 'svg');
    if(!svgElement) throw new Error('Missing svg element');
    svgElement.attributes = {
        ...svgElement.attributes ?? {},
        ...attributes,
    };
    return js2xml(svgJson);
}


const setSvgColor = (svg: string, color: string) => {
    return injectSvgAttributes(svg, {
        fill: color,
    });
};

const rotateSvg = (svg: string, angle: number, rotationOrigin: [number, number]) => {
    return injectSvgAttributes(svg, {
        transform: `translate(${rotationOrigin[0]} ${rotationOrigin[1]}) rotate(${angle}) translate(${-rotationOrigin[0]} ${-rotationOrigin[1]})`,
    });
}

const getAssetsIcon = async (iconId: string) => {
    return await Deno.readTextFile(`./assets/${iconId}.svg`)
};

const iconCache = new Map<string, string>();

const getOcticonIcon = async (iconId: string) => {
    const iconUrl = `https://raw.githubusercontent.com/primer/octicons/refs/heads/main/icons/${iconId}.svg`;
    const cachedIcon = iconCache.get(iconUrl);
    if(cachedIcon) return cachedIcon;
    console.log(`Downloading icon from ${iconUrl}`);
    const res = await fetch(iconUrl);
    if(!res.ok) throw new Error(`Could not download icon ${iconId}: ${res.status} ${res.statusText}`);
    const svg = await res.text();
    iconCache.set(iconUrl, svg);
    return svg;
};

/**
 * ImageMagick images only live inside the callback in `ImageMagick.read()`,
 * so to load all frames at once requires some recursive juggling.
 */
const readImages = (images: {buf: Uint8Array<ArrayBuffer>, format: MagickFormat}[], callback: (images: IMagickImage[]) => void) => {
    const [head, ...tail] = images;
    if(!head) {
        callback([]);
        return;
    }
    ImageMagick.read(head.buf, head.format, (img) => {
        readImages(tail, (images) => {
            callback([img, ...images]);
        });
    })
};

const renderIcon = async (options: IconOptions) => {
    const iconId = `${options.icon}-${options.size ?? 16}`;
    const source = options.source ?? 'octicons';
    console.log(`Fetching icon ${iconId} from ${source}`);
    const svg = source === 'octicons' ? await getOcticonIcon(iconId) : await getAssetsIcon(iconId);
    const coloredSvg = setSvgColor(svg, options.color);
    const name = `gh_${options.name}`;
    console.log(`Saving to ${name}.png`);

    if (options.animation) {
        const animation = options.animation;
        const collection = MagickImageCollection.create();
        const images = await Promise.all(new Array(animation.frames)
            .fill(0).map((_, i) => {
                let animated: string;
                if(animation.type === 'rotation') {
                    animated = rotateSvg(coloredSvg, i / animation.frames * 360, [EMOJI_SIZE / 2, EMOJI_SIZE / 2])
                } else {
                    animated = coloredSvg;
                }
                return sharp(Buffer.from(animated))
                    .resize(EMOJI_SIZE, EMOJI_SIZE)
                    .webp()
                    .toBuffer();
            }));
        const frames = images.map((buf) => {
            return {
                buf: new Uint8Array(buf), format: MagickFormat.WebP,
            }
        });
        readImages(frames, (images) => {
            for (const image of images) {
                image.animationDelay = Math.round(animation.frameTime / 10);
            }
            collection.push(...images);
            collection.write(MagickFormat.WebP, (b) => Deno.writeFileSync(`./gen_emojis/${name}.webp`, b));
        });
    } else {
        await sharp(Buffer.from(coloredSvg))
            .resize(EMOJI_SIZE, EMOJI_SIZE)
            .toFile(`./gen_emojis/${name}.png`);
    }
};


await initialize();

await Deno.mkdir('./gen_emojis', {recursive: true});
for await (const file of Deno.readDir('./gen_emojis')) {
    if(file.isFile) {
        await Deno.remove(`./gen_emojis/${file.name}`);
    }
}
for (const icon of icons) {
    await renderIcon(icon);
}