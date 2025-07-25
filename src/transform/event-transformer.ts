import {WebhookContent} from "../discord-webhook.ts";
import {BaseWebhook} from "../schemas/base.ts";

export abstract class EventTransformer<T extends BaseWebhook> {
    public abstract transform(e: T): WebhookContent | undefined;
}