import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {PushWebhook} from "../../schemas/push.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {clearLinebreaks, cutWidthEllipsis, mdLink} from "../../util/markdown-util.ts";
import {WebhooksCommit} from "../../schemas/common.ts";
import {joinLines} from "../../util/util.ts";


export class PushTransformer extends EmbedTransformer<PushWebhook> {
    private static readonly REFS_PATTERN = /refs\/([^/])+\/(.+)/;

    override transformEmbed(webhook: PushWebhook): SchemaRichEmbed | undefined {
        if(!webhook.forced && webhook.commits.length === 0) return undefined;
        const compareLink = mdLink(`${webhook.commits.length} ${webhook.commits.length === 1 ? 'commit' : 'commits'}`, webhook.compare);
        const commitLog = webhook.commits.length === 0 ? undefined : this.createCommitLog(webhook);
        const message = `${webhook.forced ? 'Force-pushed' : 'Pushed'} ${compareLink} to ${this.getRefLink(webhook)}`;
        return {
            ...EmbedTransformer.senderAsAuthor(webhook),
            ...EmbedTransformer.repositoryAsTitle(webhook),
            color: webhook.forced ? COLORS.danger.int : COLORS.muted.int,
            description: joinLines(
                [
                    `${webhook.forced ? EMOJIS.force_push : EMOJIS.push} \u00A0${message}`,
                    commitLog
                ],
                '\n\n'
            ),
        }
    }

    private getRefLink(webhook: PushWebhook) {
        const match = PushTransformer.REFS_PATTERN.exec(webhook.ref);
        if(!match) return webhook.ref;
        const refName = match[2];
        return mdLink(`${webhook.repository.name}/${refName}`, `${webhook.repository.html_url}/tree/${refName}`);
    }

    private createCommitLog(webhook: PushWebhook): string {
        const commitsToShow: (WebhooksCommit | 'more')[] = webhook.commits.slice(0, 6);
        const additionalCommits: number = webhook.commits.length - commitsToShow.length;
        if(additionalCommits > 0) {
            commitsToShow.push('more');
        }
        const commitLogText = commitsToShow.reverse().map((commit, index) => {
            const emoji = index === 0 ? EMOJIS.commit_top : EMOJIS.commit_center;
            const commitText = commit === 'more' ?
                `*+${additionalCommits} more*` :
                cutWidthEllipsis(clearLinebreaks(commit.message), 460); // 460px is the remaining width of text before it would overflow in a desktop embed (with some safety margin)
            return `${emoji} ${commitText}`;
        }).join('\n');
        return `${commitLogText}\n${EMOJIS.commit_bottom}`
    }
}