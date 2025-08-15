import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {StarWebhook} from "../../schemas/star.ts";

export class StarTransformer extends EmbedTransformer<StarWebhook> {
    override transformEmbed(webhook: StarWebhook): SchemaRichEmbed {
        const added = webhook.action === 'created';
        return {
            ...EmbedTransformer.senderAsAuthor(webhook),
            ...EmbedTransformer.repositoryAsTitle(webhook),
            color: added ? COLORS.star.int : COLORS.muted.int,
            description: added ?
                `${EMOJIS.star} New star added` :
                `${EMOJIS.unstar} Star removed`,
        }
    }
}