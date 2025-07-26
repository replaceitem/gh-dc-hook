import {BaseSenderRepositoryWebhook} from "./base.ts";
import {RepositoryWebhooks} from "./common.ts";

export interface ForkWebhook extends BaseSenderRepositoryWebhook {
    /** @description The created [`repository`](https://docs.github.com/rest/repos/repos#get-a-repository) resource. */
    forkee: RepositoryWebhooks;
}