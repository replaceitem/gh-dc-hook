import {fontWidthMappings} from "./font-width.ts";

export const mdLink = (text: string, url?: string) => url ? `[${text}](${url})` : text;

export enum TimestampStyle {
    SHORT_TIME = 't',
    LONG_TIME = 'T',
    SHORT_DATE = 'd',
    LONG_DATE = 'D',
    SHORT_DATETIME = 'f',
    LONG_DATETIME = 'F',
    RELATIVE_TIME = 'R',
}

export const mdTimestamp = (timestamp: Date | string, style: TimestampStyle = TimestampStyle.SHORT_DATETIME) => {
    const date = new Date(timestamp);
    const unix = Math.floor(date.getTime() / 1000);
    return `<t:${unix}:${style}>`
};

const ELLIPSIS = '…';

/**
 * Cuts the text length to a maximum length, or shorter if a word boundary is found.
 */
export const cutLengthEllipsis = (text: string, maxLength: number) => {
    if(text.length <= maxLength) return text;
    const cutText = text.slice(0, maxLength);
    const match = /^(.*)\s+\S*$/.exec(cutText);
    const cleanCutText = match?.at(1);
    return (cleanCutText ?? cutText.slice(0, -1)) + ELLIPSIS;
};

/**
 * Replaces linebreaks with spaces.
 */
export const clearLinebreaks = (text: string) => {
    return text.replaceAll(/\r\n|\r|\n/g, ' ');
}

export const getCodepointWidth = (codepoint: number | string) => {
    if(typeof codepoint === 'string') {
        if(codepoint.codePointAt(1) !== undefined) throw new Error('More than one codepoint provided');
        const cp = codepoint.codePointAt(0);
        if(cp === undefined) throw new Error('Empty string provided');
        codepoint = cp;
    }
    // 18 is the width of the big square symbols (like emojis).
    // It is used as the default for unknown codepoints to be safe.
    return fontWidthMappings.get(codepoint) ?? 18;
}

/**
 * Cuts the text with an ellipsis at the provided maximum width in pixels.
 * Uses estimated widths of characters from discord's font from {@linkcode fontWidthMappings}
 */
export const cutWidthEllipsis = (text: string, maxWidth: number) => {
    const ellipsisWidth = getCodepointWidth(ELLIPSIS);
    let width = 0;
    for (let i = 0; i < text.length; i++) {
        const codepoint = text.codePointAt(i);
        if(codepoint !== undefined) {
            width += getCodepointWidth(codepoint);
        }
        if((width + ellipsisWidth) > maxWidth) {
            return cutLengthEllipsis(text, i);
        }
    }
    return text;
}