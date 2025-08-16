import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {cutLengthEllipsis, mdLink} from "../../util/markdown-util.ts";
import {CommitCommentWebhook} from "../../schemas/commit-comment.ts";

export class CommitCommentTransformer extends EmbedTransformer<CommitCommentWebhook> {
    override transformEmbed(webhook: CommitCommentWebhook): SchemaRichEmbed | undefined {
        if(webhook.action === 'created') {
            const linkedCommit = mdLink(`${webhook.comment.commit_id.slice(0, 7)}`, webhook.comment.html_url);
            return {
                ...EmbedTransformer.senderAsAuthor(webhook),
                ...EmbedTransformer.repositoryAsTitle(webhook),
                description: `${EMOJIS.comment} \u00A0New comment on commit ${linkedCommit}`,
                color: COLORS.muted.int,
                fields: [
                    {
                        name: '',
                        value: cutLengthEllipsis(webhook.comment.body, 1000),
                    }
                ]
            }
        }
    }
}