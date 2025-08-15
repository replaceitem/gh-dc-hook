import {IncomingWebhookData, WebhookKey, Webhooks} from "../../github-webooks.ts";
import {DiscordWebhookClient, DiscordWebhookCredentials, WebhookContent} from "../../discord-webhook-client.ts";
import {EventTransformer} from "../event-transformer.ts";
import {WebhookHandler} from "../handler.ts";


export type EventTransformers = {
    [K in WebhookKey]?: EventTransformer<Webhooks[K]>;
};

export class SimpleSendHandler extends WebhookHandler<WebhookKey> {
    constructor(
        private readonly discordWebhook: DiscordWebhookClient,
        private readonly transformers: EventTransformers
    ) {
        super();
    }


    private transformContent<T extends WebhookKey>(webhookEvent: IncomingWebhookData<T>): WebhookContent | undefined {
        const transformer = this.transformers[webhookEvent.event];
        if(!transformer) return undefined;
        return transformer.transform(webhookEvent.data);
    };

    public async handle(data: IncomingWebhookData, credentials: DiscordWebhookCredentials): Promise<Response> {
        const webhookContent = this.transformContent(data);

        if(!webhookContent) return new Response(null, {
            status: 200,
        });

        const res = await this.discordWebhook.send(webhookContent, credentials);

        return new Response(null, {
            status: res.response.status,
        });
    }
}