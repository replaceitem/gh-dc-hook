import {BaseSenderRepositoryWebhook} from "./base.ts";
import {SimpleUser} from "./common.ts";


export type CommitCommentWebhook = CommitCommentCreatedWebhook;

export interface BaseCommitCommentWebhook extends BaseSenderRepositoryWebhook{
    comment: {
        /**
         * AuthorAssociation
         * @description How the author is associated with the repository.
         * @enum {string}
         */
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        /** @description The text of the comment. */
        body: string;
        /** @description The SHA of the commit to which the comment applies. */
        commit_id: string;
        created_at: string;
        /** Format: uri */
        html_url: string;
        /** @description The ID of the commit comment. */
        id: number;
        /** @description The line of the blob to which the comment applies. The last line of the range for a multi-line comment */
        line: number | null;
        /** @description The node ID of the commit comment. */
        node_id: string;
        /** @description The relative path of the file to which the comment applies. */
        path: string | null;
        /** @description The line index in the diff to which the comment applies. */
        position: number | null;
        /** Reactions */
        reactions?: {
            "+1": number;
            "-1": number;
            confused: number;
            eyes: number;
            heart: number;
            hooray: number;
            laugh: number;
            rocket: number;
            total_count: number;
            /** Format: uri */
            url: string;
        };
        updated_at: string;
        /** Format: uri */
        url: string;
        /** User */
        user: SimpleUser | null;
    }
}

export interface CommitCommentCreatedWebhook extends BaseCommitCommentWebhook {
    action: 'created';
}