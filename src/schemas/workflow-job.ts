import {BaseSenderRepositoryWebhook} from "./base.ts";
import {Deployment, WebhooksWorkflowJob} from "./common.ts";


export type WorkflowJobWebhook = WorkflowJobCompletedWebhook | WorkflowJobInProgressWebhook | WorkflowJobQueuedWebhook | WorkflowJobWaitingWebhook;

interface BaseWorkflowJobWebhook extends BaseSenderRepositoryWebhook {
    workflow_job: WebhooksWorkflowJob;
    deployment?: Deployment;
}

export interface WorkflowJobCompletedWebhook  extends BaseWorkflowJobWebhook {
    action: 'completed';
}

export interface WorkflowJobInProgressWebhook  extends BaseWorkflowJobWebhook {
    action: 'in_progress';
}

export interface WorkflowJobQueuedWebhook  extends BaseWorkflowJobWebhook {
    action: 'queues';
}

export interface WorkflowJobWaitingWebhook  extends BaseWorkflowJobWebhook {
    action: 'waiting';
}