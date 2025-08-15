import sharp from "sharp";
import {Element, js2xml, xml2js} from "xml-js";
import { Buffer } from 'node:buffer';
import {COLORS} from "./util/constants.ts";

import {
    ImageMagick,
    initialize,
    MagickFormat,
} from "https://deno.land/x/imagemagick_deno/mod.ts";
import {IMagickImage, MagickImageCollection} from "npm:@imagemagick/magick-wasm@0.0.31";

const EMOJI_SIZE = 128;



interface IconOptions {
    name: string;
    icon: string;
    color: string;
    size?: number;
    source?: 'octicons' | 'assets';
    animation?: {
        type: 'rotation',
        frames: number,
        frameTime: number,
    };
}


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
    const name = `gh_${options.name.replace(/-/g, '_')}`;
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

const icons: IconOptions[] = [
    // Stars
    {
        name: 'star',
        icon: 'star-fill',
        color: COLORS.star.hex,
    },
    {
        name: 'unstar',
        icon: 'star',
        color: COLORS.muted.hex,
    },

    // Watch
    {
        name: 'watch',
        icon: 'eye',
        color: COLORS.muted.hex,
    },

    // Issues
    {
        name: 'issue-opened',
        icon: 'issue-opened',
        color: COLORS.success.hex,
    },
    {
        name: 'issue-reopen',
        icon: 'issue-reopened',
        color: COLORS.success.hex,
    },
    {
        name: 'issue-skip',
        icon: 'skip',
        color: COLORS.muted.hex,
    },
    {
        name: 'issue-done',
        icon: 'issue-closed',
        color: COLORS.done.hex,
    },

    // Issue comments
    {
        name: 'comment',
        icon: 'comment',
        color: COLORS.muted.hex,
    },

    //  Push
    {
        name: 'push',
        icon: 'repo-push',
        color: COLORS.muted.hex,
    },
    {
        name: 'force-push',
        icon: 'repo-push',
        color: COLORS.danger.hex,
    },
    {
        name: 'commit-top',
        icon: 'git-commit-top',
        color: COLORS.muted.hex,
        source: 'assets',
    },
    {
        name: 'commit-center',
        icon: 'git-commit-center',
        color: COLORS.muted.hex,
        source: 'assets',
    },
    {
        name: 'commit-bottom',
        icon: 'git-commit-bottom',
        color: COLORS.muted.hex,
        source: 'assets',
    },

    // Fork
    {
        name: 'fork',
        icon: 'repo-forked',
        color: COLORS.muted.hex,
    },

    // Pull requests
    {
        name: 'pr-open',
        icon: 'git-pull-request',
        color: COLORS.success.hex,
    },
    {
        name: 'pr-open-draft',
        icon: 'git-pull-request-draft',
        color: COLORS.success.hex,
    },
    {
        name: 'pr-draft',
        icon: 'git-pull-request-draft',
        color: COLORS.muted.hex,
    },
    {
        name: 'pr-close',
        icon: 'git-pull-request-closed',
        color: COLORS.danger.hex,
    },
    {
        name: 'pr-merge',
        icon: 'git-merge',
        color: COLORS.done.hex,
    },

    // Pull request reviews
    {
        name: 'review-approve',
        icon: 'check',
        color: COLORS.success.hex,
    },
    {
        name: 'review-change',
        icon: 'file-diff',
        color: COLORS.danger.hex,
    },

    // Public
    {
        name: 'public',
        icon: 'unlock',
        color: COLORS.muted.hex,
    },

    // Release
    {
        name: 'release',
        icon: 'tag',
        color: COLORS.success.hex,
    },
    {
        name: 'pre-release',
        icon: 'tag',
        color: COLORS.attention.hex,
    },

    // Create
    {
        name: 'branch',
        icon: 'git-branch',
        color: COLORS.muted.hex,
    },
    {
        name: 'tag',
        icon: 'tag',
        color: COLORS.muted.hex,
    },

    // Workflows
    {
        name: 'wf_queued',
        icon: 'dot-fill',
        color: COLORS.attention.hex,
    },
    {
        name: 'wf_running',
        icon: 'workflow-running',
        source: 'assets',
        color: '#000',
        animation: {
            type: 'rotation',
            frames: 30,
            frameTime: 1000 / 30,
        }
    },
    {
        name: 'wf_success',
        icon: 'check-circle-fill',
        color: COLORS.success.hex,
    },
    {
        name: 'wf_failure',
        icon: 'x-circle-fill',
        color: COLORS.danger.hex,
    },
    {
        name: 'wf_stopped',
        icon: 'stop',
        color: COLORS.muted.hex,
    },
];

await Deno.mkdir('./gen_emojis', {recursive: true});
for await (const file of Deno.readDir('./gen_emojis')) {
    if(file.isFile) {
        await Deno.remove(`./gen_emojis/${file.name}`);
    }
}
for (const icon of icons) {
    try {
        await renderIcon(icon);
    } catch(e) {
        console.error(`Error converting icon ${icon.name}: ${e}`);
    }
}