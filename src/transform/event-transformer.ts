import {WebhookContent} from "../discord-webhook.ts";
import {EventSchema} from "../github-webooks.ts";

export abstract class EventTransformer<T extends EventSchema> {
    public abstract transform(e: T): WebhookContent;
}