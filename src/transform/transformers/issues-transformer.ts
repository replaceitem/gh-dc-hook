import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {EventSchemasByKey} from "../../github-webooks.ts";
import {FilterKeysByPrefix} from "../../util/type-helpers.ts";
import {mdLink} from "../../util/markdown-util.ts";


type IssueEventTypes = keyof FilterKeysByPrefix<EventSchemasByKey, 'webhook-issues-'>
type IssueSchema = EventSchemasByKey[IssueEventTypes];

export class IssuesTransformer extends EmbedTransformer<IssueSchema> {
    override transformEmbed(issueSchema: IssueSchema): SchemaRichEmbed | undefined {
        if(issueSchema.action == 'opened' || issueSchema.action == 'reopened' || issueSchema.action == 'closed') {
            const linkedIssueNumber = mdLink(`#${issueSchema.issue.number}`, issueSchema.issue.html_url);
            return {
                ...this.senderAsAuthor(issueSchema),
                ...this.repositoryAsTitle(issueSchema),
                color: issueSchema.action === 'closed' ? (issueSchema.issue.state_reason === 'completed' ? COLORS.done.int : COLORS.gray.int) : COLORS.open.int,
                description: `${this.getStateIcon(issueSchema)} \u00A0${linkedIssueNumber} ${this.getStateText(issueSchema)}`,
                fields: [
                    {
                        name: issueSchema.issue.title,
                        value: issueSchema.action === 'opened' ? issueSchema.issue.body ?? '' : '',
                    }
                ]
            }
        }
    }

    private getStateIcon(issueSchema: IssueSchema): string | undefined {
        if(issueSchema.action === 'opened') return EMOJIS.issueOpen;
        if(issueSchema.action === 'reopened') return EMOJIS.issueReopen;
        if(issueSchema.action === 'closed') {
            return issueSchema.issue.state_reason === 'completed' ? EMOJIS.issueDone : EMOJIS.issueSkip;
        }
        return EMOJIS.issueOpen;
    }

    private getStateText(issueSchema: IssueSchema) {
        if(issueSchema.action === 'opened') return 'Issue opened';
        if(issueSchema.action === 'reopened') return 'Issue reopened';
        if(issueSchema.action === 'closed') {
            if (issueSchema.issue.state_reason === 'duplicate') return 'Issue closed as duplicate';
            if (issueSchema.issue.state_reason === 'not_planned') return 'Issue closed as not planned';
            return 'Issue closed';
        }
        return '';
    }
}