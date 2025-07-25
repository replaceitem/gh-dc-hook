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

export interface BaseRepositoryWebhook extends BaseWebhook {
    repository: RepositoryWebhooks;
}

export interface BaseSenderWebhook extends BaseWebhook {
    sender: SimpleUser;
}

export interface BaseSenderRepositoryWebhook extends BaseSenderWebhook {
    repository: RepositoryWebhooks;
}