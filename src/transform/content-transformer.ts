import {EventSchema, EventSchemasByKey, IncomingWebhookDataByKey} from "../github-webooks.ts";
import {EventTransformer} from "./event-transformer.ts";
import {WebhookContent} from "../discord-webhook.ts";
import {StarTransformer} from "./transformers/star-transformer.ts";
import {IssuesTransformer} from "./transformers/issues-transformer.ts";
import {IssueCommentTransformer} from "./transformers/issue-comment-transformer.ts";

type EventHandlers = Record<string, EventTransformer<EventSchema>>;

const transformersByEvent: EventHandlers = {
    "star": new StarTransformer(),
    "issues": new IssuesTransformer(),
    "issue_comment": new IssueCommentTransformer(),
};

export const transformContent = <T extends keyof EventSchemasByKey>(webhookEvent: IncomingWebhookDataByKey<T>): WebhookContent | undefined => {
    const transformer = transformersByEvent[webhookEvent.event];
    if(!transformer) return undefined;
    return transformer.transform(webhookEvent.data);
};