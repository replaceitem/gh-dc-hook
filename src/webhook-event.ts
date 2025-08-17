import {SimpleSendHandler} from "./convert/handlers/simple-send-handler.ts";
import {StarTransformer} from "./convert/transformers/star-transformer.ts";
import {IssuesTransformer} from "./convert/transformers/issues-transformer.ts";
import {IssueCommentTransformer} from "./convert/transformers/issue-comment-transformer.ts";
import {WatchTransformer} from "./convert/transformers/watch-transformer.ts";
import {ForkTransformer} from "./convert/transformers/fork-transformer.ts";
import {PushTransformer} from "./convert/transformers/push-transformer.ts";
import {PullRequestTransformer} from "./convert/transformers/pull-request-transformer.ts";
import {PullRequestReviewTransformer} from "./convert/transformers/pull-request-review-transformer.ts";
import {PublicTransformer} from "./convert/transformers/public-transformer.ts";
import {ReleaseTransformer} from "./convert/transformers/release-transformer.ts";
import {CreateTransformer} from "./convert/transformers/create-transformer.ts";
import {DiscordWebhookClient, DiscordWebhookCredentials} from "./discord-webhook-client.ts";
import createClient from "openapi-fetch";
import {
    paths as discordPaths,
} from "./openapi/discord-schema.ts";
import {IncomingWebhookData, WebhookKey} from "./github-webooks.ts";
import {WebhookHandler} from "./convert/handler.ts";
import {WorkflowRunHandler} from "./convert/handlers/workflow-run-handler.ts";
import {CommitCommentTransformer} from "./convert/transformers/commit-comment-transformer.ts";
import {DiscussionTransformer} from "./convert/transformers/discussion-transformer.ts";


const client = createClient<discordPaths>({baseUrl: 'https://discord.com/api/v10'});
const discordWebhookClient = new DiscordWebhookClient(client);

const defaultHandler = new SimpleSendHandler(discordWebhookClient, {
    star: new StarTransformer(),
    issues: new IssuesTransformer(),
    issue_comment: new IssueCommentTransformer(),
    watch: new WatchTransformer(),
    push: new PushTransformer(),
    fork: new ForkTransformer(),
    pull_request: new PullRequestTransformer(),
    pull_request_review: new PullRequestReviewTransformer(),
    public: new PublicTransformer(),
    release: new ReleaseTransformer(),
    create: new CreateTransformer(),
    commit_comment: new CommitCommentTransformer(),
    discussion: new DiscussionTransformer(),
});



const workflowHandler = new WorkflowRunHandler(discordWebhookClient);

type SpecialHandlers = {
    [K in WebhookKey]?: WebhookHandler<K>;
};
const specialHandlers: SpecialHandlers = {
    workflow_job: workflowHandler,
    workflow_run: workflowHandler,
}

export const onWebhookEvent = async<T extends WebhookKey = WebhookKey>(webhookEvent: IncomingWebhookData<T>, credentials: DiscordWebhookCredentials): Promise<Response> => {
    const handler = specialHandlers[webhookEvent.event] ?? defaultHandler;
    return await handler.handle(webhookEvent, credentials);
}