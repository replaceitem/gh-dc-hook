import {BaseSenderRepositoryWebhook} from "./base.ts";
import {WebhooksRelease} from "./common.ts";

export type ReleaseWebhook =
    | ReleaseCreatedWebhook
    | ReleaseDeletedWebhook
    | ReleaseEditedWebhook
    | ReleasePrereleasedWebhook
    | ReleasePublishedWebhook
    | ReleaseReleasedWebhook
    | ReleaseUnpublishedWebhook;

export interface BaseReleaseWebhook extends BaseSenderRepositoryWebhook {
    release: WebhooksRelease;
}

export interface ReleaseCreatedWebhook extends BaseReleaseWebhook {
    action: 'created';
}

export interface ReleaseDeletedWebhook extends BaseReleaseWebhook {
    action: 'deleted';
}

export interface ReleaseEditedWebhook extends BaseReleaseWebhook {
    action: 'edited';
    changes: {
        body?: {
            /** @description The previous version of the body if the action was `edited`. */
            from: string;
        };
        name?: {
            /** @description The previous version of the name if the action was `edited`. */
            from: string;
        };
        tag_name?: {
            /** @description The previous version of the tag_name if the action was `edited`. */
            from: string;
        };
        make_latest?: {
            /** @description Whether this release was explicitly `edited` to be the latest. */
            to: boolean;
        };
    };
}

export interface ReleasePrereleasedWebhook extends BaseReleaseWebhook {
    action: 'prereleased';
}

export interface ReleasePublishedWebhook extends BaseReleaseWebhook {
    action: 'published';
}

export interface ReleaseReleasedWebhook extends BaseReleaseWebhook {
    action: 'released';
}

export interface ReleaseUnpublishedWebhook extends BaseReleaseWebhook {
    action: 'unpublished';
}
