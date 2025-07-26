import {IncomingWebhookData, WebhookKey, Webhooks} from "../github-webooks.ts";
import {WebhookContent} from "../discord-webhook.ts";
import {StarTransformer} from "./transformers/star-transformer.ts";
import {IssuesTransformer} from "./transformers/issues-transformer.ts";
import {IssueCommentTransformer} from "./transformers/issue-comment-transformer.ts";
import {WatchTransformer} from "./transformers/watch-transformer.ts";
import {PushTransformer} from "./transformers/push-transformer.ts";
import {EventTransformer} from "./event-transformer.ts";
import {ForkTransformer} from "./transformers/fork-transformer.ts";
import {PullRequestTransformer} from "./transformers/pull-request-transformer.ts";

type EventHandlers = {
    [K in WebhookKey]?: EventTransformer<Webhooks[K]>;
};

const transformersByEvent: EventHandlers = {
    star: new StarTransformer(),
    issues: new IssuesTransformer(),
    issue_comment: new IssueCommentTransformer(),
    watch: new WatchTransformer(),
    push: new PushTransformer(),
    fork: new ForkTransformer(),
    pull_request: new PullRequestTransformer(),
};

export const transformContent = <T extends WebhookKey>(webhookEvent: IncomingWebhookData<T>): WebhookContent | undefined => {
    const transformer = transformersByEvent[webhookEvent.event];
    if(!transformer) return undefined;
    return transformer.transform(webhookEvent.data);
};