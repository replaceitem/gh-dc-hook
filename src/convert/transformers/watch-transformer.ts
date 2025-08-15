import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {WatchWebhook} from "../../schemas/watch.ts";

export class WatchTransformer extends EmbedTransformer<WatchWebhook> {
    override transformEmbed(webhook: WatchWebhook): SchemaRichEmbed {
        return {
            ...EmbedTransformer.senderAsAuthor(webhook),
            ...EmbedTransformer.repositoryAsTitle(webhook),
            color: COLORS.muted.int,
            description: `${EMOJIS.watch} \u00A0Started watching`,
        }
    }
}