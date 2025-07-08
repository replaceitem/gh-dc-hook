import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaWebhookStarCreated, SchemaWebhookStarDeleted} from "../../openapi/github-schema.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";

type StarEvent = SchemaWebhookStarCreated | SchemaWebhookStarDeleted;

export class StarTransformer extends EmbedTransformer<StarEvent> {
    override transformEmbed(e: StarEvent): SchemaRichEmbed {
        const added = e.action === 'created';
        return {
            ...super.transformEmbed(e),
            title: `${e.repository.full_name}`,
            url: e.repository.url,
            color: added ? COLORS.star.int : COLORS.gray.int,
            description: added ?
                `${EMOJIS.star} New star added` :
                `${EMOJIS.unstar} Star removed`,
        }
    }
}