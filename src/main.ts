import {onWebhookEvent} from "./webhook-event.ts";
import {logPayload} from "./payload-logger.ts";

const WEBHOOK_ROUTE = new URLPattern({ pathname: "/api/webhooks/:id/:token" });

Deno.serve({
    port: 3000,
}, async (req) => {
    console.log(`${req.method} ${req.url}`);

    const match = WEBHOOK_ROUTE.exec(req.url);

    if (match) {
        const id = match.pathname.groups.id;
        const token = match.pathname.groups.token;
        if(!id || !token) throw new Error('Missing token or id');

        const eventType = req.headers.get('X-GitHub-Event');
        if(!eventType) throw new Error('Missing X-GitHub-Event header');
        const data = await req.json();

        if(Deno.env.get('LOG_PAYLOADS') === 'true') {
            await logPayload(eventType, data);
        }

        console.log(`Received ${eventType} ${data.action ?? ''}`);

        return await onWebhookEvent({
            event: eventType,
            data,
        }, {
            id, token
        });
    }

    return new Response(null, {
        status: 404,
    });
});
