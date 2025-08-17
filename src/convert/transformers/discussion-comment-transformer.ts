import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {cutLengthEllipsis, mdLink} from "../../util/markdown-util.ts";
import {DiscussionCommentWebhook} from "../../schemas/discussion-comment.ts";

export class DiscussionCommentTransformer extends EmbedTransformer<DiscussionCommentWebhook> {
    override transformEmbed(webhook: DiscussionCommentWebhook): SchemaRichEmbed | undefined {
        if(webhook.action === 'created') {
            const linkedIssueNumber = mdLink(`#${webhook.discussion.number}`, webhook.discussion.html_url);
            const linkedComment = mdLink('comment', webhook.comment.html_url);
            return {
                ...EmbedTransformer.senderAsAuthor(webhook),
                ...EmbedTransformer.repositoryAsTitle(webhook),
                description: `${EMOJIS.comment} \u00A0New ${linkedComment} on discussion ${linkedIssueNumber}`,
                color: COLORS.muted.int,
                fields: [
                    {
                        name: '',
                        value: `${webhook.discussion.category.emoji} \u00A0${webhook.discussion.category.name}`,
                    },
                    {
                        name: cutLengthEllipsis(webhook.discussion.title, 100),
                        value: cutLengthEllipsis(webhook.comment.body, 1000),
                    }
                ]
            }
        }
    }
}