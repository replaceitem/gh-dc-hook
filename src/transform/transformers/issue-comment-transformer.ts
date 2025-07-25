import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {mdLink} from "../../util/markdown-util.ts";
import {IssueCommentWebhook} from "../../schemas/issue-comment.ts";

export class IssueCommentTransformer extends EmbedTransformer<IssueCommentWebhook> {
    override transformEmbed(webhook: IssueCommentWebhook): SchemaRichEmbed | undefined {
        if(webhook.action === 'created') {
            const linkedIssueNumber = mdLink(`#${webhook.issue.number}`, webhook.issue.html_url);
            const linkedComment = mdLink('comment', webhook.comment.html_url);
            return {
                ...this.senderAsAuthor(webhook),
                ...this.repositoryAsTitle(webhook),
                description: `${EMOJIS.comment} \u00A0New ${linkedComment} on issue ${linkedIssueNumber}`,
                color: COLORS.muted.int,
                fields: [
                    {
                        name: webhook.issue.title,
                        value: webhook.comment.body,
                    }
                ]
            }
        }
    }
}