import {IncomingWebhookData, Webhook, WebhookKey, Webhooks} from "../github-webooks.ts";
import {WebhookContent} from "../discord-webhook.ts";
import {StarTransformer} from "./transformers/star-transformer.ts";
import {IssuesTransformer} from "./transformers/issues-transformer.ts";
import {IssueCommentTransformer} from "./transformers/issue-comment-transformer.ts";
import {WatchTransformer} from "./transformers/watch-transformer.ts";


export abstract class EventTransformer<T extends Webhook> {
    public abstract transform(e: T): WebhookContent | undefined;
}

type EventHandlers = {
    [K in WebhookKey]?: EventTransformer<Webhooks[K]>;
};

const transformersByEvent: EventHandlers = {
    "star": new StarTransformer(),
    "issues": new IssuesTransformer(),
    "issue_comment": new IssueCommentTransformer(),
    "watch": new WatchTransformer(),
};

export const transformContent = <T extends WebhookKey>(webhookEvent: IncomingWebhookData<T>): WebhookContent | undefined => {
    const transformer = transformersByEvent[webhookEvent.event];
    if(!transformer) return undefined;
    return transformer.transform(webhookEvent.data);
};