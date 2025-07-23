import {EmbedTransformer} from "../embed-transformer.ts";
import {SchemaWebhookWatchStarted} from "../../openapi/github-schema.ts";
import {SchemaRichEmbed} from "../../openapi/discord-schema.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";

export class WatchTransformer extends EmbedTransformer<SchemaWebhookWatchStarted> {
    override transformEmbed(starSchema: SchemaWebhookWatchStarted): SchemaRichEmbed {
        return {
            ...this.senderAsAuthor(starSchema),
            ...this.repositoryAsTitle(starSchema),
            color: COLORS.gray.int,
            description: `${EMOJIS.watch} \u00A0Started watching`,
        }
    }
}