import {IncomingWebhookData, WebhookKey} from "../github-webooks.ts";
import {DiscordWebhookCredentials} from "../discord-webhook-client.ts";

export abstract class WebhookHandler<T extends WebhookKey> {
    public abstract handle(data: IncomingWebhookData<T>, credentials: DiscordWebhookCredentials): Promise<Response>;
}