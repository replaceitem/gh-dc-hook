import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {cutLengthEllipsis, mdLink} from "../../util/markdown-util.ts";
import {IssueCommentWebhook} from "../../schemas/issue-comment.ts";

export class IssueCommentTransformer extends EmbedTransformer<IssueCommentWebhook> {
    override transformEmbed(webhook: IssueCommentWebhook): SchemaRichEmbed | undefined {
        if(webhook.action === 'created') {
            const linkedIssueNumber = mdLink(`#${webhook.issue.number}`, webhook.issue.html_url);
            const linkedComment = mdLink('comment', webhook.comment.html_url);
            const isPr = !!webhook.issue.pull_request;
            return {
                ...EmbedTransformer.senderAsAuthor(webhook),
                ...EmbedTransformer.repositoryAsTitle(webhook),
                description: `${EMOJIS.comment} \u00A0New ${linkedComment} on ${isPr ? 'pull request' : 'issue'} ${linkedIssueNumber}`,
                color: COLORS.muted.int,
                fields: [
                    {
                        name: cutLengthEllipsis(webhook.issue.title, 100),
                        value: cutLengthEllipsis(webhook.comment.body, 1000),
                    }
                ]
            }
        }
    }
}