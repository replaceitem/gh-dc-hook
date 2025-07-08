const color = (hex: string) => {
    return {
        int: parseInt(hex.substring(1), 16),
        hex,
    };
}


export const COLORS = {
    star: color('#E3B341'),
    gray: color('#9198A1'),
}


export const EMOJIS = {
    unstar: '<:gh_unstar:1396260828918972549>',
    star: '<:gh_star:1396260826922356896>',
};