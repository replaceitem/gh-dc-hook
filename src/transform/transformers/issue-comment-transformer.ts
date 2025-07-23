import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {EventSchemasByKey} from "../../github-webooks.ts";
import {FilterKeysByPrefix} from "../../util/type-helpers.ts";
import {mdLink} from "../../util/markdown-util.ts";


type IssueEventTypes = keyof FilterKeysByPrefix<EventSchemasByKey, 'webhook-issue-comment-'>
type IssueCommentSchema = EventSchemasByKey[IssueEventTypes];

export class IssueCommentTransformer extends EmbedTransformer<IssueCommentSchema> {
    override transformEmbed(issueSchema: IssueCommentSchema): SchemaRichEmbed | undefined {
        if(issueSchema.action === 'created') {
            const linkedIssueNumber = mdLink(`#${issueSchema.issue.number}`, issueSchema.issue.html_url);
            const linkedComment = mdLink('comment', issueSchema.comment.html_url);
            return {
                ...this.senderAsAuthor(issueSchema),
                ...this.repositoryAsTitle(issueSchema),
                description: `${EMOJIS.comment} \u00A0New ${linkedComment} on issue ${linkedIssueNumber}`,
                color: COLORS.gray.int,
                fields: [
                    {
                        name: issueSchema.issue.title,
                        value: issueSchema.comment.body,
                    }
                ]
            }
        }
    }
}