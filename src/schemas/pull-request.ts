import {BaseSenderRepositoryWebhook} from "./base.ts";
import {PullRequest, WebhooksLabel, WebhooksMilestone, WebhooksUser} from "./common.ts";


export type PullRequestWebhook =
    | PullRequestAssignedWebhook
    | PullRequestAutoMergeDisabledWebhook
    | PullRequestAutoMergeEnabledWebhook
    | PullRequestClosedWebhook
    | PullRequestConvertedToDraftWebhook
    | PullRequestDemilestonedWebhook
    | PullRequestDequeuedWebhook
    | PullRequestEditedWebhook
    | PullRequestEnqueuedWebhook
    | PullRequestLabeledWebhook
    | PullRequestLockedWebhook
    | PullRequestMilestonedWebhook
    | PullRequestOpenedWebhook
    | PullRequestReadyForReviewWebhook
    | PullRequestReopenedWebhook;

export interface BasePullRequestWebhook extends BaseSenderRepositoryWebhook {
    number: number;
    pull_request: PullRequest;
}

export interface PullRequestAssignedWebhook extends BasePullRequestWebhook {
    action: 'assigned';
    assigned: WebhooksUser;
}

export interface PullRequestAutoMergeDisabledWebhook extends BasePullRequestWebhook {
    action: 'auto_merge_disabled';
    reason: string;
}

export interface PullRequestAutoMergeEnabledWebhook extends BasePullRequestWebhook {
    action: 'auto_merge_enabled';
    reason?: string;
}

export interface PullRequestClosedWebhook extends BasePullRequestWebhook {
    action: 'closed';
}

export interface PullRequestConvertedToDraftWebhook extends BasePullRequestWebhook {
    action: 'converted_to_draft';
}

export interface PullRequestDemilestonedWebhook extends BasePullRequestWebhook {
    action: 'demilestoned';
    milestone?: WebhooksMilestone;
}

export interface PullRequestDequeuedWebhook extends BasePullRequestWebhook {
    action: 'dequeued';
    reason: "UNKNOWN_REMOVAL_REASON" | "MANUAL" | "MERGE" | "MERGE_CONFLICT" | "CI_FAILURE" | "CI_TIMEOUT" | "ALREADY_MERGED" | "QUEUE_CLEARED" | "ROLL_BACK" | "BRANCH_PROTECTIONS" | "GIT_TREE_INVALID" | "INVALID_MERGE_COMMIT";
}

export interface PullRequestEditedWebhook extends BasePullRequestWebhook {
    action: 'edited';
    changes: {
        base?: {
            ref: {
                from: string;
            };
            sha: {
                from: string;
            };
        };
        body?: {
            /** @description The previous version of the body if the action was `edited`. */
            from: string;
        };
        title?: {
            /** @description The previous version of the title if the action was `edited`. */
            from: string;
        };
    };
}

export interface PullRequestEnqueuedWebhook extends BasePullRequestWebhook {
    action: 'enqueued';
}

export interface PullRequestLabeledWebhook extends BasePullRequestWebhook {
    action: 'labeled';
    label?: WebhooksLabel;
}

export interface PullRequestLockedWebhook extends BasePullRequestWebhook {
    action: 'locked';
}

export interface PullRequestMilestonedWebhook extends BasePullRequestWebhook {
    action: 'milestoned';
    milestone: WebhooksMilestone;
}

export interface PullRequestOpenedWebhook extends BasePullRequestWebhook {
    action: 'opened';
}

export interface PullRequestReadyForReviewWebhook extends BasePullRequestWebhook {
    action: 'ready_for_review';
}

export interface PullRequestReopenedWebhook extends BasePullRequestWebhook {
    action: 'reopened';
}