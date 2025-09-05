import {logPayload} from "./payload-logger.ts";
import {onWebhookEvent} from "./webhook-event.ts";
import {IncomingWebhookData, isWebhookEventType} from "./github-webooks.ts";


const SECURITY_TXT =
`Contact: https://github.com/replaceitem/gh-dc-hook
Preferred-Languages: en`;

const WEBHOOK_ROUTE = new URLPattern({ pathname: "/api/webhooks/:id/:token" });
const SECURITY_ROUTE = new URLPattern({ pathname: "/.well-known/security.txt" });

const MAX_PAYLOAD_SIZE = 25 * (1 << 20); // 25 MB

interface Route {
    pattern: URLPattern,
    handler: (req: Request, route: URLPatternResult) => Promise<Response> | Response,
}


const routes: Route[] = [
    {
        pattern: WEBHOOK_ROUTE,
        handler: async (req, route) => {
            if(req.method !== 'POST') return new Response(null, {
                status: 405,
            });
            const id = route.pathname.groups.id;
            const token = route.pathname.groups.token;
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
                const buf = await req.arrayBuffer();
                if(buf.byteLength > MAX_PAYLOAD_SIZE) {
                    return new Response('Content too large. Cannot be more than 25 MB: https://docs.github.com/en/webhooks/webhook-events-and-payloads#payload-cap', {
                        status: 413,
                    });
                }
                data = JSON.parse(new TextDecoder().decode(buf));
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
    },
    {
        pattern: SECURITY_ROUTE,
        handler: () => {
            return new Response(SECURITY_TXT, {
                status: 200,
                headers: {
                    'Content-Type': 'plain/text'
                }
            });
        }
    }
];


Deno.serve({
    port: Number(Deno.env.get('PORT') ?? 3000),
}, (req) => {
    for (const route of routes) {
        const match = route.pattern.exec(req.url);
        if(match) {
            console.log(`[${req.method}] ${req.url}`);
            return route.handler(req, match);
        }
    }

    console.error(`[${req.method}] ${req.url}`);

    return new Response(null, {
        status: 404,
    });
});
