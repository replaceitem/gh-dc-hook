import {COLORS} from "../util/constants.ts";


export interface IconOptions {
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

export const icons: IconOptions[] = [
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
        name: 'issue_opened',
        icon: 'issue-opened',
        color: COLORS.success.hex,
    },
    {
        name: 'issue_reopen',
        icon: 'issue-reopened',
        color: COLORS.success.hex,
    },
    {
        name: 'issue_skip',
        icon: 'skip',
        color: COLORS.muted.hex,
    },
    {
        name: 'issue_done',
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
        name: 'force_push',
        icon: 'repo-push',
        color: COLORS.danger.hex,
    },
    {
        name: 'commit_top',
        icon: 'git-commit-top',
        color: COLORS.muted.hex,
        source: 'assets',
    },
    {
        name: 'commit_center',
        icon: 'git-commit-center',
        color: COLORS.muted.hex,
        source: 'assets',
    },
    {
        name: 'commit_bottom',
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
        name: 'pr_open',
        icon: 'git-pull-request',
        color: COLORS.success.hex,
    },
    {
        name: 'pr_open_draft',
        icon: 'git-pull-request-draft',
        color: COLORS.success.hex,
    },
    {
        name: 'pr_draft',
        icon: 'git-pull-request-draft',
        color: COLORS.muted.hex,
    },
    {
        name: 'pr_close',
        icon: 'git-pull-request-closed',
        color: COLORS.danger.hex,
    },
    {
        name: 'pr_merge',
        icon: 'git-merge',
        color: COLORS.done.hex,
    },

    // Pull request reviews
    {
        name: 'review_approve',
        icon: 'check',
        color: COLORS.success.hex,
    },
    {
        name: 'review_change',
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
        name: 'pre_release',
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