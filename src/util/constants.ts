const color = (hex: string) => {
    return {
        int: parseInt(hex.substring(1), 16),
        hex,
    };
}


export const COLORS = {
    star: color('#E3B341'),
    muted: color('#9198A1'),
    success: color('#3FB950'),
    done: color('#AD7DF8'),
    danger: color('#F85149'),
    attention: color('#D29922'),
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
    push: '<:gh_push:1398392837468455064>',
    force_push: '<:gh_force_push:1398392835459383318>',
    commit_top: '<:gh_commit_top:1398392834159149056>',
    commit_center: '<:gh_commit_center:1398392832619970670>',
    commit_bottom: '<:gh_commit_bottom:1398433333788020868>',
    fork: '<:gh_fork:1398749555201147020>',
    pr_open: '<:gh_pr_open:1398758495440081008>',
    pr_open_draft: '<:gh_pr_open_draft:1398758492952723476>',
    pr_draft: '<:gh_pr_draft:1398758491723665449>',
    pr_close: '<:gh_pr_close:1398758489676840986>',
    pr_merge: '<:gh_pr_merge:1398758487919431762>',
    review_change: '<:gh_review_change:1399006166771695636>',
    review_approve: '<:gh_review_approve:1399006168239702096>',
    public: '<:gh_public:1399018418786533427>',
    release: '<:gh_release:1399066988252499969>',
    pre_release: '<:gh_pre_release:1399066986939416730>',
};