import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {cutLengthEllipsis, mdLink} from "../../util/markdown-util.ts";
import {IssuesWebhook} from "../../schemas/issues.ts";


export class IssuesTransformer extends EmbedTransformer<IssuesWebhook> {
    override transformEmbed(webhook: IssuesWebhook): SchemaRichEmbed | undefined {
        if(webhook.action == 'opened' || webhook.action == 'reopened' || webhook.action == 'closed') {
            const linkedIssueNumber = mdLink(`#${webhook.issue.number}`, webhook.issue.html_url);
            return {
                ...this.senderAsAuthor(webhook),
                ...this.repositoryAsTitle(webhook),
                color: webhook.action === 'closed' ? (webhook.issue.state_reason === 'completed' ? COLORS.done.int : COLORS.muted.int) : COLORS.success.int,
                description: `${this.getStateIcon(webhook)} \u00A0${linkedIssueNumber} ${this.getStateText(webhook)}`,
                fields: [
                    {
                        name: cutLengthEllipsis(webhook.issue.title, 100),
                        value: webhook.action === 'opened' ? cutLengthEllipsis(webhook.issue.body ?? '', 1000) : '',
                    }
                ]
            }
        }
    }

    private getStateIcon(webhook: IssuesWebhook): string | undefined {
        if(webhook.action === 'opened') return EMOJIS.issueOpen;
        if(webhook.action === 'reopened') return EMOJIS.issueReopen;
        if(webhook.action === 'closed') {
            return webhook.issue.state_reason === 'completed' ? EMOJIS.issueDone : EMOJIS.issueSkip;
        }
        return EMOJIS.issueOpen;
    }

    private getStateText(webhook: IssuesWebhook) {
        if(webhook.action === 'opened') return 'Issue opened';
        if(webhook.action === 'reopened') return 'Issue reopened';
        if(webhook.action === 'closed') {
            if (webhook.issue.state_reason === 'duplicate') return 'Issue closed as duplicate';
            if (webhook.issue.state_reason === 'not_planned') return 'Issue closed as not planned';
            return 'Issue closed';
        }
        return '';
    }
}