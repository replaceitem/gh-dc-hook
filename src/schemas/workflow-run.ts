import {BaseSenderRepositoryWebhook} from "./base.ts";
import {WebhooksWorkflow, WebhooksWorkflowRun} from "./common.ts";


export type WorkflowRunWebhook = WorkflowRunCompletedWebhook | WorkflowRunInProgressWebhook | WorkflowRunRequestedWebhook;

interface BaseWorkflowRunWebhook extends BaseSenderRepositoryWebhook {
    workflow: WebhooksWorkflow;
    workflow_run: WebhooksWorkflowRun;
}


export interface WorkflowRunCompletedWebhook extends BaseWorkflowRunWebhook {
    action: 'completed';
}

export interface WorkflowRunInProgressWebhook extends BaseWorkflowRunWebhook {
    action: 'in_progress';
}

export interface WorkflowRunRequestedWebhook extends BaseWorkflowRunWebhook {
    action: 'requested';
}