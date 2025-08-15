import {logPayload} from "./payload-logger.ts";
import {onWebhookEvent} from "./webhook-event.ts";
import {IncomingWebhookData, isWebhookEventType} from "./github-webooks.ts";

const WEBHOOK_ROUTE = new URLPattern({ pathname: "/api/webhooks/:id/:token" });

Deno.serve({
    port: Number(Deno.env.get('PORT') ?? 3000),
}, async (req) => {
    console.log(`[${req.method}] ${req.url}`);

    const match = WEBHOOK_ROUTE.exec(req.url);

    if (match) {
        if(req.method !== 'POST') return new Response(null, {
            status: 405,
        });
        const id = match.pathname.groups.id;
        const token = match.pathname.groups.token;
        if (!id) return new Response('Missing id in URL', {
            status: 400,
        });
        if (!token) return new Response('Missing token in URL', {
            status: 400,
        });

        const eventType = req.headers.get('X-GitHub-Event');
        if (!eventType) return new Response('Missing header: X-GitHub-Event', {
            status: 400,
        });
        if(!isWebhookEventType(eventType)) return new Response(`Invalid event type: ${eventType}`, {
            status: 400,
        });


        let data: unknown;
        try {
            data = await req.json() as unknown;
        } catch (_e) {
            return new Response('Missing or invalid JSON body', {
                status: 400,
            });
        }
        if (typeof data !== 'object' || data === null || Array.isArray(data)) return new Response('Payload is not a JSON object', {
            status: 400,
        });

        const action = 'action' in data ? data.action : undefined;

        if (Deno.env.get('LOG_PAYLOADS') === 'true') {
            await logPayload(eventType, data);
        }

        console.log(`Received ${eventType} ${action ?? ''}`);

        return await onWebhookEvent({
            event: eventType,
            data,
        } as IncomingWebhookData, {
            id, token
        });
    }

    return new Response(null, {
        status: 404,
    });
});
