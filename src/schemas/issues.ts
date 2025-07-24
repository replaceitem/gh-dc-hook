import {BaseSenderRepositoryWebhook} from "./base.ts";
import {
    IssueType,
    RepositoryWebhooks,
    WebhooksIssue,
    WebhooksLabel,
    WebhooksMilestone,
    WebhooksUser, WebhooksUserMannequin
} from "./common.ts";


export type IssuesWebhook =
    | IssuesAssignedWebhook
    | IssuesClosedWebhook
    | IssuesDeletedWebhook
    | IssuesDemilestonedWebhook
    | IssuesEditedWebhook
    | IssuesLabeledWebhook
    | IssuesLockedWebhook
    | IssuesMilestonedWebhook
    | IssuesOpenedWebhook
    | IssuesPinnedWebhook
    | IssuesReopenedWebhook
    | IssuesTransferredWebhook
    | IssuesTypedWebhook
    | IssuesUnassignedWebhook
    | IssuesUnlabeledWebhook
    | IssuesUnlockedWebhook
    | IssuesUnpinnedWebhook
    | IssuesUntypedWebhook;


export interface BaseIssuesWebhook extends BaseSenderRepositoryWebhook {
    issue: WebhooksIssue;
}


export interface IssuesAssignedWebhook extends BaseIssuesWebhook {
    action: 'assigned';
    assignee?: WebhooksUser;
}

export interface IssuesClosedWebhook extends BaseIssuesWebhook {
    action: 'closed';
}

export interface IssuesDeletedWebhook extends BaseIssuesWebhook {
    action: 'deleted';
}

export interface IssuesDemilestonedWebhook extends BaseIssuesWebhook {
    action: 'demilestoned';
    milestone?: WebhooksMilestone;
}

export interface IssuesEditedWebhook extends BaseIssuesWebhook {
    action: 'edited';
    changes: {
        body?: {
            /** @description The previous version of the body. */
            from: string;
        };
        title?: {
            /** @description The previous version of the title. */
            from: string;
        };
    };
    label?: WebhooksLabel;
}

export interface IssuesLabeledWebhook extends BaseIssuesWebhook {
    action: 'labeled';
    label?: WebhooksLabel;
}

export interface IssuesLockedWebhook extends BaseIssuesWebhook {
    action: 'locked';
}

export interface IssuesMilestonedWebhook extends BaseIssuesWebhook {
    action: 'milestoned';
    milestone: WebhooksMilestone;
}

export interface IssuesOpenedWebhook extends BaseIssuesWebhook {
    action: 'opened';
    changes?: {
        old_issue: WebhooksIssue | null;
        old_repository: RepositoryWebhooks;
    }
}

export interface IssuesPinnedWebhook extends BaseIssuesWebhook {
    action: 'pinned';
}

export interface IssuesReopenedWebhook extends BaseIssuesWebhook {
    action: 'reopened';
}

export interface IssuesTransferredWebhook extends BaseIssuesWebhook {
    action: 'transferred';
    changes: {
        new_issue: WebhooksIssue | null;
        new_repository: RepositoryWebhooks;
    }
}

export interface IssuesTypedWebhook extends BaseIssuesWebhook {
    action: 'typed';
    type: IssueType;
}

export interface IssuesUnassignedWebhook extends BaseIssuesWebhook {
    action: 'unassigned';
    assignee?: WebhooksUserMannequin;
}

export interface IssuesUnlabeledWebhook extends BaseIssuesWebhook {
    action: 'unlabeled';
    label?: WebhooksLabel;
}

export interface IssuesUnlockedWebhook extends BaseIssuesWebhook {
    action: 'unlocked';
}

export interface IssuesUnpinnedWebhook extends BaseIssuesWebhook {
    action: 'unpinned';
}

export interface IssuesUntypedWebhook extends BaseIssuesWebhook {
    action: 'untyped';
    type: IssueType;
}