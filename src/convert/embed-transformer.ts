import {WebhookContent} from "../discord-webhook-client.ts";
import {SchemaRichEmbed, SchemaRichEmbedAuthor} from "../openapi/discord-schema.ts";
import {BaseRepositoryWebhook, BaseSenderWebhook, BaseWebhook} from "../schemas/base.ts";
import {EventTransformer} from "./event-transformer.ts";
import {RepositoryWebhooks, SimpleUser} from "../schemas/common.ts";

export abstract class EmbedTransformer<T extends BaseWebhook> extends EventTransformer<T> {
    public transform(e: T): WebhookContent | undefined {
        const embed = this.transformEmbed(e);
        return EmbedTransformer.ofEmbed(embed);

    }

    public abstract transformEmbed(e: T): SchemaRichEmbed | undefined;

    public static ofEmbed(embed: SchemaRichEmbed | undefined) {
        if(!embed) return undefined;
        return {
            embeds: [embed]
        };
    }

    public static senderAsAuthor(senderWebhook: BaseSenderWebhook) {
        return {
            author: EmbedTransformer.transformAuthor(senderWebhook.sender),
        };
    }

    public static transformAuthor(user: SimpleUser): SchemaRichEmbedAuthor | undefined {
        if(!user || !user.login) return undefined;
        return {
            name: user.login,
            icon_url: user.avatar_url,
            url: user.html_url,
        };
    }


    public static repositoryAsTitle(repositoryWebhook: BaseRepositoryWebhook) {
        return this.transformRepository(repositoryWebhook.repository);
    }

    public static transformRepository(repository: RepositoryWebhooks) {
        return {
            title: repository.full_name,
            url: repository.html_url,
        }
    }
}