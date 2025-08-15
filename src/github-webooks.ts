import {StarWebhook} from "./schemas/star.ts";
import {WatchWebhook} from "./schemas/watch.ts";
import {IssuesWebhook} from "./schemas/issues.ts";
import {IssueCommentWebhook} from "./schemas/issue-comment.ts";
import {PushWebhook} from "./schemas/push.ts";
import { BaseWebhook } from "./schemas/base.ts";
import {ForkWebhook} from "./schemas/fork.ts";
import {WorkflowJobWebhook} from "./schemas/workflow-job.ts";
import {WorkflowRunWebhook} from "./schemas/workflow-run.ts";


export const WEBHOOK_EVENTS: Set<WebhookKey> = new Set([
    'branch_protection_configuration',
    'branch_protection_rule',
    'check_run',
    'check_suite',
    'code_scanning_alert',
    'commit_comment',
    'create',
    'custom_property',
    'custom_property_values',
    'delete',
    'dependabot_alert',
    'deploy_key',
    'deployment',
    'deployment_protection_rule',
    'deployment_review',
    'deployment_status',
    'discussion',
    'discussion_comment',
    'fork',
    'github_app_authorization',
    'gollum',
    'installation',
    'installation_repositories',
    'installation_target',
    'issue_comment',
    'issues',
    'label',
    'marketplace_purchase',
    'member',
    'membership',
    'merge_group',
    'meta',
    'milestone',
    'org_block',
    'organization',
    'package',
    'page_build',
    'personal_access_token_request',
    'ping',
    'project_card',
    'project',
    'project_column',
    'projects_v2',
    'projects_v2_item',
    'projects_v2_status_update',
    'public',
    'pull_request',
    'pull_request_review_comment',
    'pull_request_review',
    'pull_request_review_thread',
    'push',
    'registry_package',
    'release',
    'repository_advisory',
    'repository',
    'repository_dispatch',
    'repository_import',
    'repository_ruleset',
    'repository_vulnerability_alert',
    'secret_scanning_alert',
    'secret_scanning_alert_location',
    'secret_scanning_scan',
    'security_advisory',
    'security_and_analysis',
    'sponsorship',
    'star',
    'status',
    'sub_issues',
    'team_add',
    'team',
    'watch',
    'workflow_dispatch',
    'workflow_job',
    'workflow_run',
]);

export const isWebhookEventType = (name: string): name is WebhookKey => {
    return (WEBHOOK_EVENTS as Set<string>).has(name);
}

export interface Webhooks {
    branch_protection_configuration: BaseWebhook;
    branch_protection_rule: BaseWebhook;
    check_run: BaseWebhook;
    check_suite: BaseWebhook;
    code_scanning_alert: BaseWebhook;
    commit_comment: BaseWebhook;
    create: BaseWebhook;
    custom_property: BaseWebhook;
    custom_property_values: BaseWebhook;
    delete: BaseWebhook;
    dependabot_alert: BaseWebhook;
    deploy_key: BaseWebhook;
    deployment: BaseWebhook;
    deployment_protection_rule: BaseWebhook;
    deployment_review: BaseWebhook;
    deployment_status: BaseWebhook;
    discussion: BaseWebhook;
    discussion_comment: BaseWebhook;
    fork: ForkWebhook;
    github_app_authorization: BaseWebhook;
    gollum: BaseWebhook;
    installation: BaseWebhook;
    installation_repositories: BaseWebhook;
    installation_target: BaseWebhook;
    issue_comment: IssueCommentWebhook;
    issues: IssuesWebhook;
    label: BaseWebhook;
    marketplace_purchase: BaseWebhook;
    member: BaseWebhook;
    membership: BaseWebhook;
    merge_group: BaseWebhook;
    meta: BaseWebhook;
    milestone: BaseWebhook;
    org_block: BaseWebhook;
    organization: BaseWebhook;
    package: BaseWebhook;
    page_build: BaseWebhook;
    personal_access_token_request: BaseWebhook;
    ping: BaseWebhook;
    project_card: BaseWebhook;
    project: BaseWebhook;
    project_column: BaseWebhook;
    projects_v2: BaseWebhook;
    projects_v2_item: BaseWebhook;
    projects_v2_status_update: BaseWebhook;
    public: BaseWebhook;
    pull_request: BaseWebhook;
    pull_request_review_comment: BaseWebhook;
    pull_request_review: BaseWebhook;
    pull_request_review_thread: BaseWebhook;
    push: PushWebhook;
    registry_package: BaseWebhook;
    release: BaseWebhook;
    repository_advisory: BaseWebhook;
    repository: BaseWebhook;
    repository_dispatch: BaseWebhook;
    repository_import: BaseWebhook;
    repository_ruleset: BaseWebhook;
    repository_vulnerability_alert: BaseWebhook;
    secret_scanning_alert: BaseWebhook;
    secret_scanning_alert_location: BaseWebhook;
    secret_scanning_scan: BaseWebhook;
    security_advisory: BaseWebhook;
    security_and_analysis: BaseWebhook;
    sponsorship: BaseWebhook;
    star: StarWebhook;
    status: BaseWebhook;
    sub_issues: BaseWebhook;
    team_add: BaseWebhook;
    team: BaseWebhook;
    watch: WatchWebhook;
    workflow_dispatch: BaseWebhook;
    workflow_job: WorkflowJobWebhook;
    workflow_run: WorkflowRunWebhook;
}

export type WebhookKey = keyof Webhooks;

export type IncomingWebhookData<E extends WebhookKey = WebhookKey> = {
    [K in WebhookKey]: { event: K; data: Webhooks[K] };
}[E];
