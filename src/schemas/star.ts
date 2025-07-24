import {BaseSenderRepositoryWebhook} from "./base.ts";


export type StarWebhook = StarCreatedWebhook | StarDeletedWebhook;

export interface StarCreatedWebhook extends BaseSenderRepositoryWebhook {
    action: 'created';
    /** @description The time the star was created. This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. Will be `null` for the `deleted` action. */
    starred_at: string;
}
export interface StarDeletedWebhook extends BaseSenderRepositoryWebhook {
    action: 'deleted';
    /** @description The time the star was created. This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. Will be `null` for the `deleted` action. */
    starred_at: null;
}