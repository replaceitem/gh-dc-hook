import {onWebhookEvent} from "./webhook-event.ts";
import {DiscordWebhookCredentials} from "./discord-webhook.ts";
import {EventKeys, IncomingWebhookDataByKey} from "./github-webooks.ts";

const envOrThrow = (env: string): string => {
    const val = Deno.env.get(env);
    if(!val) throw new Error(`Missing ${env} environment variable`);
    return val;
}

const credentials: DiscordWebhookCredentials = {
    id: envOrThrow('DISCORD_WEBHOOK_ID'),
    token: envOrThrow('DISCORD_WEBHOOK_TOKEN'),
};

const loadSamplePayload = async <T extends EventKeys>(file: string) => {
    const json = await Deno.readTextFile(`./sample-payloads/${file}.json`);
    return JSON.parse(json) as IncomingWebhookDataByKey<T>;
};

const payload = await loadSamplePayload('star/deleted');
await onWebhookEvent(payload, credentials);
