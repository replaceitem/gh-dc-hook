export const VERSION = '0.1.0';
export const PROJECT_URL = 'https://github.com/replaceitem/gh-dc-hook';

const color = (hex: string) => ({
    int: parseInt(hex.substring(1), 16),
    hex,
});


export const COLORS = {
    star: color('#E3B341'),
    muted: color('#9198A1'),
    success: color('#3FB950'),
    done: color('#AD7DF8'),
    danger: color('#F85149'),
    attention: color('#D29922'),
}


export const EMOJIS = {
    star: '<:gh_star:1406699269259399259>',
    unstar: '<:gh_unstar:1406699272006537308>',
    watch: '<:gh_watch:1406699273227079863>',
    issue_opened: '<:gh_issue_opened:1406699245951647744>',
    issue_reopen: '<:gh_issue_reopen:1406699247834890382>',
    issue_skip: '<:gh_issue_skip:1406699248917020733>',
    issue_done: '<:gh_issue_done:1406699243552510002>',
    comment: '<:gh_comment:1406699233494433812>',
    push: '<:gh_push:1406699261990539377>',
    force_push: '<:gh_force_push:1406699239173783583>',
    commit_top: '<:gh_commit_top:1406699237554655232>',
    commit_center: '<:gh_commit_center:1406699236363599934>',
    commit_bottom: '<:gh_commit_bottom:1406699234845130805>',
    fork: '<:gh_fork:1406699240620556300>',
    pr_open: '<:gh_pr_open:1406699257079136359>',
    pr_open_draft: '<:gh_pr_open_draft:1406699258819645542>',
    pr_draft: '<:gh_pr_draft:1406699254164230194>',
    pr_close: '<:gh_pr_close:1406699252620591316>',
    pr_merge: '<:gh_pr_merge:1406699256034885754>',
    review_approve: '<:gh_review_approve:1406699265522270319>',
    review_change: '<:gh_review_change:1406699267648786572>',
    public: '<:gh_public:1406699260648358021>',
    release: '<:gh_release:1406699263253283028>',
    pre_release: '<:gh_pre_release:1406699251047731281>',
    branch: '<:gh_branch:1406699231212732529>',
    tag: '<:gh_tag:1406699270362628258>',
    wf_queued: '<:gh_wf_queued:1406699277794934784>',
    wf_running: '<a:gh_wf_running:1406699279552352467>',
    wf_success: '<:gh_wf_success:1406699282458738878>',
    wf_failure: '<:gh_wf_failure:1406699275529879637>',
    wf_stopped: '<:gh_wf_stopped:1406699281326280896>',
};