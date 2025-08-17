import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {cutLengthEllipsis, mdLink} from "../../util/markdown-util.ts";
import {DiscussionWebhook} from "../../schemas/discussion.ts";


export class DiscussionTransformer extends EmbedTransformer<DiscussionWebhook> {
    override transformEmbed(webhook: DiscussionWebhook): SchemaRichEmbed | undefined {
        if(webhook.action === 'created' || webhook.action === 'reopened' || webhook.action === 'closed' || webhook.action === 'answered') {
            return {
                ...EmbedTransformer.senderAsAuthor(webhook),
                ...EmbedTransformer.repositoryAsTitle(webhook),
                color: webhook.action === 'closed' ? (webhook.discussion.state_reason === 'resolved' ? COLORS.done.int : COLORS.muted.int) : COLORS.success.int,
                description: `${this.getStateIcon(webhook)} \u00A0${this.getStateText(webhook)}`,
                fields: [
                    {
                        name: '',
                        value: `${webhook.discussion.category.emoji} \u00A0${webhook.discussion.category.name}`,
                    },
                    {
                        name: cutLengthEllipsis(webhook.discussion.title, 100),
                        value: this.getBody(webhook),
                    }
                ]
            }
        }
    }

    private getBody(webhook: DiscussionWebhook) {
        if(webhook.action === 'created') return cutLengthEllipsis(webhook.discussion.body ?? '', 1000);
        if(webhook.action === 'answered') return cutLengthEllipsis(webhook.answer.body ?? '', 500);
        return '';
    }

    private getStateIcon(webhook: DiscussionWebhook): string | undefined {
        if(webhook.action === 'created') return EMOJIS.discussion_open;
        if(webhook.action === 'reopened') return EMOJIS.discussion_open;
        if(webhook.action === 'answered') return EMOJIS.wf_success;
        if(webhook.action === 'closed') {
            if(webhook.discussion.state_reason === 'resolved') return EMOJIS.discussion_closed;
            if(webhook.discussion.state_reason === 'outdated') return EMOJIS.discussion_outdated;
            if(webhook.discussion.state_reason === 'duplicate') return EMOJIS.discussion_duplicate;
            if(webhook.discussion.state_reason === 'reopened') return EMOJIS.discussion_open;
        }
        return EMOJIS.discussion_open;
    }

    private getStateText(webhook: DiscussionWebhook) {
        const linkedDiscussionNumber = mdLink(`#${webhook.discussion.number}`, webhook.discussion.html_url);
        if(webhook.action === 'created') return `Discussion ${linkedDiscussionNumber} created`;
        if(webhook.action === 'reopened') return `Discussion ${linkedDiscussionNumber} reopened`;
        if(webhook.action === 'answered') return `Discussion ${linkedDiscussionNumber} answered`;
        if(webhook.action === 'closed') {
            if(webhook.discussion.state_reason === 'resolved') return `Discussion ${linkedDiscussionNumber} closed as resolved`;
            if(webhook.discussion.state_reason === 'outdated') return `Discussion ${linkedDiscussionNumber} closed as outdated`;
            if(webhook.discussion.state_reason === 'duplicate') return `Discussion ${linkedDiscussionNumber} closed as duplicate`;
            return `Issue ${linkedDiscussionNumber} closed`;
        }
        return '';
    }
}