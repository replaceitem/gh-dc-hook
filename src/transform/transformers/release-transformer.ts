import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {ReleaseWebhook} from "../../schemas/release.ts";
import {cutLengthEllipsis, mdLink} from "../../util/markdown-util.ts";

export class ReleaseTransformer extends EmbedTransformer<ReleaseWebhook> {
    override transformEmbed(webhook: ReleaseWebhook): SchemaRichEmbed | undefined {
        if(webhook.action !== "published") return undefined;
        const isPrerelease = webhook.release.prerelease;
        const icon = isPrerelease ? EMOJIS.pre_release : EMOJIS.release;
        const releaseLink = mdLink(cutLengthEllipsis(webhook.release.tag_name, 50), webhook.release.html_url);
        return {
            ...this.senderAsAuthor(webhook),
            ...this.repositoryAsTitle(webhook),
            color: isPrerelease ? COLORS.attention.int : COLORS.success.int,
            description: `${icon} \u00A0${isPrerelease ? 'Pre-release' : 'Release'} ${releaseLink} published`,
            fields: [
                {
                    name: cutLengthEllipsis(webhook.release.name ?? webhook.release.tag_name, 100),
                    value: cutLengthEllipsis(webhook.release.body ?? '', 1000),
                }
            ]
        }
    }
}