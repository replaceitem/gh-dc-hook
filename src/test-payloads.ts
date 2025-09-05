import {onWebhookEvent} from "./webhook-event.ts";
import {DiscordWebhookCredentials} from "./discord-webhook-client.ts";
import {IncomingWebhookData, WebhookKey} from "./github-webooks.ts";
import {getEnvOrThrow, sleep} from "./util/util.ts";

const credentials: DiscordWebhookCredentials = {
    id: getEnvOrThrow('DISCORD_WEBHOOK_ID'),
    token: getEnvOrThrow('DISCORD_WEBHOOK_TOKEN'),
};

const loadSamplePayload = async <T extends WebhookKey>(file: string) => {
    const json = await Deno.readTextFile(`./sample-payloads/${file}`);
    return JSON.parse(json) as IncomingWebhookData<T>;
};


const runPayload = async (file: string) => {
    const payload = await loadSamplePayload(file);
    await onWebhookEvent(payload, credentials);
}

const replayPayloads = async (dir: string) => {
    const entries = Array.from(Deno.readDirSync(`./sample-payloads/${dir}`));
    entries.sort((a,b) => {
        return a.name > b.name ? 1 : -1;
    });
    const events = entries.map(e => {
        const timeString = e.name.split('_')[0]!;
        const timeMatch = timeString.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/);
        if(!timeMatch) throw new Error(`Invalid format: ${timeString}`);
        const [_, year, month, day, hour, minute, second, milli] = Array.from(timeMatch).map((n, i) => i == 0 ? 0 : Number.parseInt(n));
        return {
            ...e,
            timestamp: new Date(year!, month!, day!, hour!, minute!, second!, milli!),
        }
    })
    let previousTime: number | undefined = undefined;
    for (const event of events) {
        console.log(`Running ${event.name}`);
        const time = event.timestamp.getTime();
        if(previousTime !== undefined) {
            console.log(`Sleeping ${time - previousTime}`);
            await sleep(time - previousTime);
        }
        previousTime = time;
        await runPayload(`${dir}/${event.name}`);
    }
    console.log('Done');
}

await runPayload('push/force_empty.json');