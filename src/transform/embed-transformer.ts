import {WebhookContent} from "../discord-webhook.ts";
import {SchemaRichEmbed, SchemaRichEmbedAuthor} from "../openapi/discord-schema.ts";
import {BaseRepositoryWebhook, BaseSenderWebhook, BaseWebhook} from "../schemas/base.ts";
import {EventTransformer} from "./event-transformer.ts";

export abstract class EmbedTransformer<T extends BaseWebhook> extends EventTransformer<T> {
    public transform(e: T): WebhookContent | undefined {
        const embed = this.transformEmbed(e);
        if(!embed) return undefined;
        return {
            embeds: [embed]
        };
    }

    public abstract transformEmbed(e: T): SchemaRichEmbed | undefined;

    protected senderAsAuthor(senderWebhook: BaseSenderWebhook) {
        return {
            author: this.transformAuthor(senderWebhook),
        };
    }

    protected transformAuthor(senderWebhook: BaseSenderWebhook): SchemaRichEmbedAuthor | undefined {
        const sender = senderWebhook.sender;
        if(!sender || !sender.login) return undefined;
        return {
            name: sender.login,
            icon_url: sender.avatar_url,
            url: sender.html_url,
        };
    }


    protected repositoryAsTitle(repositoryWebhook: BaseRepositoryWebhook) {
        return {
            title: repositoryWebhook.repository.full_name,
            url: repositoryWebhook.repository.url,
        }
    }
}