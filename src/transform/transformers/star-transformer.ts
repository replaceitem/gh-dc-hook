import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaWebhookStarCreated, SchemaWebhookStarDeleted} from "../../openapi/github-schema.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";

type StarSchema = SchemaWebhookStarCreated | SchemaWebhookStarDeleted;

export class StarTransformer extends EmbedTransformer<StarSchema> {
    override transformEmbed(starSchema: StarSchema): SchemaRichEmbed {
        const added = starSchema.action === 'created';
        return {
            ...this.senderAsAuthor(starSchema),
            ...this.repositoryAsTitle(starSchema),
            color: added ? COLORS.star.int : COLORS.gray.int,
            description: added ?
                `${EMOJIS.star} New star added` :
                `${EMOJIS.unstar} Star removed`,
        }
    }
}