import {BaseSenderRepositoryWebhook} from "./base.ts";


export interface CreateWebhook extends BaseSenderRepositoryWebhook {
    description: string | null;
    /** @description The name of the repository's default branch (usually `main`). */
    master_branch: string;
    /** @description The pusher type for the event. Can be either user or a deploy key. */
    pusher_type: 'user' | string;
    /** @description The [`git ref`](https://docs.github.com/rest/git/refs#get-a-reference) resource. */
    ref: string;
    /**
     * @description The type of Git ref object created in the repository.
     * @enum {string}
     */
    ref_type: "tag" | "branch";
}