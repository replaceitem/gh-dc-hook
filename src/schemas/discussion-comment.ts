import {BaseSenderRepositoryWebhook} from "./base.ts";
import {Discussion, DiscussionComment} from "./common.ts";

export type DiscussionCommentWebhook = WebhookDiscussionCreatedWebhook | WebhookDiscussionDeletedWebhook | WebhookDiscussionEditedWebhook;

export interface BaseDiscussionCommentWebhook extends BaseSenderRepositoryWebhook {
    comment: DiscussionComment;
    discussion: Discussion;
}

export interface WebhookDiscussionCreatedWebhook extends BaseDiscussionCommentWebhook {
    action: 'created';
}

export interface WebhookDiscussionDeletedWebhook extends BaseDiscussionCommentWebhook {
    action: 'deleted';
}

export interface WebhookDiscussionEditedWebhook extends BaseDiscussionCommentWebhook {
    action: 'edited';
    changes: {
        body: {
            from: string;
        };
    };
}