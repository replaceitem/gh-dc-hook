import {BaseSenderRepositoryWebhook} from "./base.ts";
import {Discussion, DiscussionAnswer, RepositoryWebhooks, WebhooksLabel} from "./common.ts";

export type DiscussionWebhook =
    | DiscussionAnsweredWebhook
    | DiscussionCategoryChangedWebhook
    | DiscussionClosedWebhook
    | DiscussionCreatedWebhook
    | DiscussionDeletedWebhook
    | DiscussionEditedWebhook
    | DiscussionLabeledWebhook
    | DiscussionLockedWebhook
    | DiscussionPinnedWebhook
    | DiscussionReopenedWebhook
    | DiscussionTransferredWebhook
    | DiscussionUnansweredWebhook
    | DiscussionUnlabeledWebhook
    | DiscussionUnlockedWebhook
    | DiscussionUnpinnedWebhook;

export interface BaseDiscussionWebhook extends BaseSenderRepositoryWebhook {
    discussion: Discussion;
}

export interface DiscussionAnsweredWebhook extends BaseDiscussionWebhook {
    action: 'answered';
    answer: DiscussionAnswer;
}

export interface DiscussionCategoryChangedWebhook extends BaseDiscussionWebhook {
    action: 'category_changed';
    changes: {
        category: {
            from: {
                /** Format: date-time */
                created_at: string;
                description: string;
                emoji: string;
                id: number;
                is_answerable: boolean;
                name: string;
                node_id?: string;
                repository_id: number;
                slug: string;
                updated_at: string;
            };
        };
    };
}

export interface DiscussionClosedWebhook extends BaseDiscussionWebhook {
    action: 'closed';
}

export interface DiscussionCreatedWebhook extends BaseDiscussionWebhook {
    action: 'created';
}

export interface DiscussionDeletedWebhook extends BaseDiscussionWebhook {
    action: 'deleted';
}

export interface DiscussionEditedWebhook extends BaseDiscussionWebhook {
    action: 'edited';
    changes?: {
        body?: {
            from: string;
        };
        title?: {
            from: string;
        };
    };
}

export interface DiscussionLabeledWebhook extends BaseDiscussionWebhook {
    action: 'labeled';
    label: WebhooksLabel;
}

export interface DiscussionLockedWebhook extends BaseDiscussionWebhook {
    action: 'locked';
}

export interface DiscussionPinnedWebhook extends BaseDiscussionWebhook {
    action: 'pinned';
}

export interface DiscussionReopenedWebhook extends BaseDiscussionWebhook {
    action: 'reopened';
}

export interface DiscussionTransferredWebhook extends BaseDiscussionWebhook {
    action: 'transferred';
    changes: {
        new_discussion: Discussion;
        new_repository: RepositoryWebhooks;
    };
}

export interface DiscussionUnansweredWebhook extends BaseDiscussionWebhook {
    action: 'unanswered';
    old_answer: DiscussionAnswer;
}

export interface DiscussionUnlabeledWebhook extends BaseDiscussionWebhook {
    action: 'unlabeled';
    label: WebhooksLabel;
}

export interface DiscussionUnlockedWebhook extends BaseDiscussionWebhook {
    action: 'unlocked';
}

export interface DiscussionUnpinnedWebhook extends BaseDiscussionWebhook {
    action: 'unpinned';
}