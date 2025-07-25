import {BaseSenderRepositoryWebhook} from "./base.ts";
import {EnterpriseWebhooks, WebhooksCommit} from "./common.ts";

export interface PushWebhook extends BaseSenderRepositoryWebhook {
    /** @description The SHA of the most recent commit on `ref` after the push. */
    after: string;
    base_ref: string | null;
    /** @description The SHA of the most recent commit on `ref` before the push. */
    before: string;
    /** @description An array of commit objects describing the pushed commits. (Pushed commits are all commits that are included in the `compare` between the `before` commit and the `after` commit.) The array includes a maximum of 2048 commits. If necessary, you can use the [Commits API](https://docs.github.com/rest/commits) to fetch additional commits. */
    commits: WebhooksCommit[];
    /** @description URL that shows the changes in this `ref` update, from the `before` commit to the `after` commit. For a newly created `ref` that is directly based on the default branch, this is the comparison between the head of the default branch and the `after` commit. Otherwise, this shows all commits until the `after` commit. */
    compare: string;
    /** @description Whether this push created the `ref`. */
    created: boolean;
    /** @description Whether this push deleted the `ref`. */
    deleted: boolean;
    enterprise?: EnterpriseWebhooks;
    /** @description Whether this push was a force push of the `ref`. */
    forced: boolean;
    /** Commit */
    head_commit: WebhooksCommit | null;
    /**
     * Committer
     * @description Metaproperties for Git author/committer information.
     */
    pusher: {
        /** Format: date-time */
        date?: string;
        /** Format: email */
        email?: string | null;
        /** @description The git author's name. */
        name: string;
        username?: string;
    };
    /** @description The full git ref that was pushed. Example: `refs/heads/main` or `refs/tags/v3.14.1`. */
    ref: string;
}