import {DiscordWebhook, DiscordWebhookCredentials} from "./discord-webhook.ts";
import createClient from "openapi-fetch";
import {
    paths as discordPaths,
} from "./openapi/discord-schema.ts";
import {IncomingWebhookDataByKey} from "./github-webooks.ts";
import {transformContent} from "./transform/content-transformer.ts";

const client = createClient<discordPaths>({baseUrl: 'https://discord.com/api/v10'});
const webhook = new DiscordWebhook(client);

export const onWebhookEvent = async (e: IncomingWebhookDataByKey, credentials: DiscordWebhookCredentials): Promise<Response> => {
    const webhookContent = transformContent(e);

    if(!webhookContent) return new Response(null, {
        status: 200,
    });

    const res = await webhook.send(webhookContent, credentials);

    return new Response(null, {
        status: res.response.status,
    });
};
