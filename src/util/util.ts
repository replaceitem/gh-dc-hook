export const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export class Debouncer {
    private timer?: number;

    constructor(private debounceTime: number) {}

    public emit(fn: () => void) {
        if(this.timer !== undefined) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(fn, this.debounceTime);
    }
}

export const tryParseDate = (dateString: string | null | undefined): Date | undefined => {
    if(!dateString) return undefined;
    const date = new Date(dateString);
    if(Number.isNaN(date.getTime())) {
        return undefined;
    }
    return date;
}

export const formatDuration = (millis: number) => {
    const totalSeconds = Math.floor(millis / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return [
        hours === 0 ? undefined : `${hours}h`,
        minutes === 0 ? undefined : `${minutes}m`,
        (seconds === 0 && millis !== 0) ? undefined : `${seconds}s`,
    ].filter(defined).join(' ');
}

export const defined = (v: unknown | undefined) => v !== undefined;


export const joinLines = (lines: (string | undefined)[]) => lines.filter(defined).join('\n');