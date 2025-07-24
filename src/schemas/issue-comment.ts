import {BaseSenderRepositoryWebhook} from "./base.ts";
import {WebhooksChanges, WebhooksIssue, WebhooksIssueComment} from "./common.ts";

export type IssueCommentWebhook = IssueCommentCreatedWebhook | IssueCommentDeletedWebhook | IssueCommentEditedWebhook;

export interface BaseIssueCommentWebhook extends BaseSenderRepositoryWebhook {
    issue: WebhooksIssue;
    comment: WebhooksIssueComment;
}

export interface IssueCommentCreatedWebhook extends BaseIssueCommentWebhook {
    action: 'created';
}

export interface IssueCommentDeletedWebhook extends BaseIssueCommentWebhook {
    action: 'deleted';
}

export interface IssueCommentEditedWebhook extends BaseIssueCommentWebhook {
    action: 'edited';
    changes: WebhooksChanges;
}