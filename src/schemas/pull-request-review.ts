import {PullRequest, WebhooksPullRequestReview} from "./common.ts";
import {BaseSenderRepositoryWebhook} from "./base.ts";

export type PullRequestReviewWebhook =
    | PullRequestReviewDismissedWebhook
    | PullRequestReviewEditedWebhook
    | PullRequestReviewSubmittedWebhook;

export interface BasePullRequestReviewWebhook extends BaseSenderRepositoryWebhook {
    pull_request: PullRequest;
    review: WebhooksPullRequestReview;
}


export interface PullRequestReviewDismissedWebhook extends BasePullRequestReviewWebhook {
    action: 'dismissed';
}

export interface PullRequestReviewEditedWebhook extends BasePullRequestReviewWebhook {
    action: 'edited';
    changes: {
        body?: {
            /** @description The previous version of the body if the action was `edited`. */
            from: string;
        };
    };
}

export interface PullRequestReviewSubmittedWebhook extends BasePullRequestReviewWebhook {
    action: 'submitted';
}