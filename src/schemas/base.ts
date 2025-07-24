import {
    Enterprise,
    OrganizationSimpleWebhooks,
    RepositoryWebhooks,
    SimpleInstallation,
    SimpleUser
} from "./common.ts";

export interface BaseWebhook {
    enterprise?: Enterprise;
    installation?: SimpleInstallation;
    organization?: OrganizationSimpleWebhooks;
    repository?: RepositoryWebhooks;
    sender?: SimpleUser;
}

export interface BaseRepositoryWebhook {
    repository: RepositoryWebhooks;
}

export interface BaseSenderWebhook {
    sender: SimpleUser;
}

export interface BaseSenderRepositoryWebhook extends BaseRepositoryWebhook, BaseSenderWebhook {}