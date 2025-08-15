import {EmbedTransformer} from "../embed-transformer.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {CreateWebhook} from "../../schemas/create.ts";
import { SchemaRichEmbed } from "../../openapi/discord-schema.ts";
import {mdLink} from "../../util/markdown-util.ts";

export class CreateTransformer extends EmbedTransformer<CreateWebhook> {
    override transformEmbed(webhook: CreateWebhook): SchemaRichEmbed {
        const isBranch = webhook.ref_type === 'branch';
        const refLink = mdLink(webhook.ref, `${webhook.repository.html_url}/tree/${webhook.ref}`);
        return {
            ...EmbedTransformer.senderAsAuthor(webhook),
            ...EmbedTransformer.repositoryAsTitle(webhook),
            color: COLORS.muted.int,
            description: `${isBranch ? EMOJIS.branch : EMOJIS.tag} \u00A0${isBranch ? 'Branch' : 'Tag'} ${refLink} created`,
        }
    }
}