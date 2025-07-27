import {EmbedTransformer} from "../embed-transformer.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import { SchemaRichEmbed } from "../../openapi/discord-schema.ts";
import {PublicWebhook} from "../../schemas/public.ts";

export class PublicTransformer extends EmbedTransformer<PublicWebhook> {
    override transformEmbed(webhook: PublicWebhook): SchemaRichEmbed | undefined {
        return {
            ...this.senderAsAuthor(webhook),
            ...this.repositoryAsTitle(webhook),
            color: COLORS.muted.int,
            description: `${EMOJIS.public} \u00A0Repository published`,
        }
    }
}