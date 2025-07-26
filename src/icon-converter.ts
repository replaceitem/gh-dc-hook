import sharp from "npm:sharp@0.34.1";
import {Element, js2xml, xml2js} from "xml-js";
import { Buffer } from 'node:buffer';
import {COLORS} from "./util/constants.ts";

interface IconOptions {
    name: string;
    icon: string;
    color: string;
    size?: number;
    source?: 'octicons' | 'assets';
}


const setSvgColor = (svg: string, color: string) => {
    const svgJson = xml2js(svg, {compact: false}) as Element;
    const svgElement = svgJson.elements?.find((e) => e.name === 'svg');
    if(!svgElement) throw new Error('Missing svg element');
    svgElement.attributes = {
        ...svgElement.attributes ?? {},
        fill: color,
    };
    return js2xml(svgJson);
};

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

const renderIcon = async (options: IconOptions) => {
    const iconId = `${options.icon}-${options.size ?? 16}`;
    const source = options.source ?? 'octicons';
    console.log(`Fetching icon ${iconId} from ${source}`);
    const svg = source === 'octicons' ? await getOcticonIcon(iconId) : await getAssetsIcon(iconId);
    const coloredSvg = setSvgColor(svg, options.color);
    const name = `gh_${options.name.replace(/-/g, '_')}`;
    console.log(`Saving to ${name}.png`);
    await Deno.mkdir('./gen_emojis', {recursive: true});
    await sharp(Buffer.from(coloredSvg))
        .resize(128, 128)
        .toFile(`./gen_emojis/${name}.png`);
};



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
];


await Deno.remove('./gen_emojis', {recursive: true});
for (const icon of icons) {
    await renderIcon(icon);
}