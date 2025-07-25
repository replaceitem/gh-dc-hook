export const mdLink = (text: string, url: string) => `[${text}](${url})`;


export const cutLengthEllipsis = (text: string, maxLength: number) => {
    if(text.length <= maxLength) return text;
    const cutText = text.slice(0, maxLength);
    const match = /^(.*)\s+\S*$/.exec(cutText);
    const cleanCutText = match?.at(1);
    return (cleanCutText ?? cutText.slice(0, -1)) + '…';
};