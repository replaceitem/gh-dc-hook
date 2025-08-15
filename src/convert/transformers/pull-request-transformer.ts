import {EmbedTransformer} from "../embed-transformer.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {PullRequestWebhook} from "../../schemas/pull-request.ts";
import { SchemaRichEmbed } from "../../openapi/discord-schema.ts";
import {cutLengthEllipsis, mdLink} from "../../util/markdown-util.ts";


export class PullRequestTransformer extends EmbedTransformer<PullRequestWebhook> {
    override transformEmbed(webhook: PullRequestWebhook): SchemaRichEmbed | undefined {
        const icon = this.getStateIcon(webhook);
        const text = this.getTitleText(webhook);
        if(!icon || !text) return undefined;
        const prLink = mdLink(`#${webhook.number}`, webhook.pull_request.html_url);
        const color = this.getStateColor(webhook);
        return {
            ...EmbedTransformer.senderAsAuthor(webhook),
            ...EmbedTransformer.repositoryAsTitle(webhook),
            color: color,
            description: `${icon} \u00A0${prLink} ${text}`,
            fields: [
                {
                    name: cutLengthEllipsis(webhook.pull_request.title, 100),
                    value: webhook.action === 'opened' ? cutLengthEllipsis(webhook.pull_request.body ?? '', 1000) : '',
                }
            ],
        }
    }

    private getStateColor(webhook: PullRequestWebhook): number {
        if(webhook.action === 'opened' || webhook.action === 'reopened') {
            return COLORS.success.int;
        }
        if(webhook.action === 'closed') {
            return webhook.pull_request.merged ? COLORS.done.int : COLORS.danger.int;
        }
        return COLORS.muted.int;
    }

    private getStateIcon(webhook: PullRequestWebhook): string | undefined {
        if(webhook.action === 'opened' || webhook.action === 'reopened') {
            return webhook.pull_request.draft ? EMOJIS.pr_open_draft : EMOJIS.pr_open;
        }
        if(webhook.action === 'closed') {
            return webhook.pull_request.merged ? EMOJIS.pr_merge : EMOJIS.pr_close;
        }
        if(webhook.action === 'converted_to_draft') {
            return EMOJIS.pr_draft;
        }
        if(webhook.action === 'ready_for_review') {
            return EMOJIS.watch;
        }
    }

    private getTitleText(webhook: PullRequestWebhook): string | undefined {
        if(webhook.action === 'opened' || webhook.action === 'reopened') {
            return webhook.pull_request.draft ? 'Draft pull request opened' : 'Pull request opened';
        }
        if(webhook.action === 'closed') {
            return webhook.pull_request.merged ? 'Pull request merged' : 'Pull request closed';
        }
        if(webhook.action === 'converted_to_draft') {
            return 'Pull request converted to draft';
        }
        if(webhook.action === 'ready_for_review') {
            return 'Pull request marked as ready for review';
        }
    }
}