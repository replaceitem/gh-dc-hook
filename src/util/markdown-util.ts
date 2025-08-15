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

export const cutLengthEllipsis = (text: string, maxLength: number) => {
    if(text.length <= maxLength) return text;
    const cutText = text.slice(0, maxLength);
    const match = /^(.*)\s+\S*$/.exec(cutText);
    const cleanCutText = match?.at(1);
    return (cleanCutText ?? cutText.slice(0, -1)) + '…';
};