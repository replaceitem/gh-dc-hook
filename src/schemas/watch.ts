import {BaseSenderRepositoryWebhook} from "./base.ts";


export type WatchWebhook = WatchStartedWebhook;

export interface WatchStartedWebhook extends BaseSenderRepositoryWebhook {
    action: 'started'
}