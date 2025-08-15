import {
    paths as discordPaths,
    SchemaIncomingWebhookRequestPartial,
    SchemaIncomingWebhookUpdateRequestPartial
} from "./openapi/discord-schema.ts";
import { Client } from "openapi-fetch";


export type WebhookContent = SchemaIncomingWebhookRequestPartial & SchemaIncomingWebhookUpdateRequestPartial;

export interface DiscordWebhookCredentials {
    id: string;
    token: string;
}


export class DiscordWebhookClient {
    constructor(private discordClient:  Client<discordPaths>) {
    }

    public async send(data: WebhookContent, credentials: DiscordWebhookCredentials, wait: boolean = false) {
        return await this.discordClient.POST('/webhooks/{webhook_id}/{webhook_token}', {
            params: {
                path: {
                    webhook_id: credentials.id,
                    webhook_token: credentials.token
                },
                query: {
                    wait,
                }
            },
            body: data,
        });
    }

    public async edit(data: WebhookContent, credentials: DiscordWebhookCredentials, messageId: string) {
        return await this.discordClient.PATCH('/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}', {
            params: {
                path: {
                    webhook_id: credentials.id,
                    webhook_token: credentials.token,
                    message_id: messageId,
                }
            },
            body: data,
        });
    }
}