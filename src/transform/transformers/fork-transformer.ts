import { SchemaRichEmbed } from "../../openapi/discord-schema.ts";
import {ForkWebhook} from "../../schemas/fork.ts";
import {EmbedTransformer} from "../embed-transformer.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {mdLink} from "../../util/markdown-util.ts";

export class ForkTransformer extends EmbedTransformer<ForkWebhook> {
    override transformEmbed(webhook: ForkWebhook): SchemaRichEmbed | undefined {
        return {
            ...this.senderAsAuthor(webhook),
            ...this.repositoryAsTitle(webhook),
            color: COLORS.success.int,
            description: `${EMOJIS.fork} \u00A0Fork created: ${mdLink(webhook.forkee.full_name, webhook.forkee.html_url)}`,
        }
    }
}