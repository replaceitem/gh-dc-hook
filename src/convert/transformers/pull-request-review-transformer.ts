import {EmbedTransformer} from "../embed-transformer.ts";
import {cutLengthEllipsis, mdLink} from "../../util/markdown-util.ts";
import { SchemaRichEmbed } from "../../openapi/discord-schema.ts";
import {PullRequestReviewWebhook} from "../../schemas/pull-request-review.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";

export class PullRequestReviewTransformer extends EmbedTransformer<PullRequestReviewWebhook> {
    override transformEmbed(webhook: PullRequestReviewWebhook): SchemaRichEmbed | undefined {
        if(webhook.action !== 'submitted') return;
        const icon = this.getIcon(webhook);
        const text = this.getText(webhook);
        if(!icon || !text) return undefined;
        const color = this.getColor(webhook);
        const prLink = mdLink(`#${webhook.pull_request.number}`, webhook.pull_request.html_url);
        return {
            ...EmbedTransformer.senderAsAuthor(webhook),
            ...EmbedTransformer.repositoryAsTitle(webhook),
            color: color,
            description: `${icon} \u00A0${prLink} ${text}`,
            fields: [
                {
                    name: cutLengthEllipsis(webhook.pull_request.title, 100),
                    value: cutLengthEllipsis(webhook.review.body ?? '', 1000),
                }
            ],
        }
    }

    private getIcon(webhook: PullRequestReviewWebhook) {
        if(webhook.action === 'submitted') {
            if(webhook.review.state === 'approved') return EMOJIS.review_approve;
            if(webhook.review.state === 'commented') return EMOJIS.watch;
            if(webhook.review.state === 'changes_requested') return EMOJIS.review_change;
        }
    }

    private getColor(webhook: PullRequestReviewWebhook) {
        if(webhook.action === 'submitted') {
            if(webhook.review.state === 'approved') return COLORS.success.int;
            if(webhook.review.state === 'commented') return COLORS.muted.int;
            if(webhook.review.state === 'changes_requested') return COLORS.danger.int;
        }
        return COLORS.muted.int;
    }

    private getText(webhook: PullRequestReviewWebhook) {
        if(webhook.action === 'submitted') {
            if(webhook.review.state === 'approved') return 'Approved these changes';
            if(webhook.review.state === 'commented') return 'Reviewed';
            if(webhook.review.state === 'changes_requested') return 'Requested changes';
        }
    }
}