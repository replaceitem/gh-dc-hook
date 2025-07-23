const color = (hex: string) => {
    return {
        int: parseInt(hex.substring(1), 16),
        hex,
    };
}


export const COLORS = {
    star: color('#E3B341'),
    gray: color('#9198A1'),
    open: color('#3FB950'),
    done: color('#AD7DF8'),
}


export const EMOJIS = {
    unstar: '<:gh_unstar:1396260828918972549>',
    star: '<:gh_star:1396260826922356896>',
    issueSkip: '<:gh_issue_skip:1397649032289058947>',
    issueReopen: '<:gh_issue_reopen:1397649029793447946>',
    issueOpen: '<:gh_issue_open:1397649028430168184>',
    issueDone: '<:gh_issue_done:1397649026907767004>',
    comment: '<:gh_comment:1397714138599395368>',
    watch: '<:gh_watch:1397721024942047363>',
};