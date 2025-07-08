import {
    paths as discordPaths,
    SchemaIncomingWebhookRequestPartial,
    SchemaIncomingWebhookUpdateRequestPartial
} from "./openapi/discord-schema.ts";
import { Client } from "openapi-fetch";


export type WebhookContent = SchemaIncomingWebhookRequestPartial | SchemaIncomingWebhookUpdateRequestPartial;

export interface DiscordWebhookCredentials {
    id: string;
    token: string;
}


export class DiscordWebhook {
    constructor(private discordClient:  Client<discordPaths>) {
    }

    public async send(data: WebhookContent, credentials: DiscordWebhookCredentials) {
        return await this.discordClient.POST('/webhooks/{webhook_id}/{webhook_token}', {
            params: {
                path: {
                    webhook_id: credentials.id,
                    webhook_token: credentials.token
                }
            },
            body: data,
        });
    }
}