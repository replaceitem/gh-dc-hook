import {EventTransformer} from "./event-transformer.ts";
import {EventSchema} from "../github-webooks.ts";
import {WebhookContent} from "../discord-webhook.ts";
import {SchemaRichEmbed, SchemaRichEmbedAuthor} from "../openapi/discord-schema.ts";
import {SchemaRepository, SchemaSimpleUser} from "../openapi/github-schema.ts";


type WithSender = {
    sender: SchemaSimpleUser
};
type WithRepository = {
    repository: SchemaRepository
};

export abstract class EmbedTransformer<T extends EventSchema> extends EventTransformer<T> {
    public transform(e: T): WebhookContent | undefined {
        const embed = this.transformEmbed(e);
        if(!embed) return undefined;
        return {
            embeds: [embed]
        };
    }

    public abstract transformEmbed(e: T): SchemaRichEmbed | undefined;

    protected senderAsAuthor(withSender: WithSender) {
        return {
            author: this.transformAuthor(withSender),
        };
    }

    protected transformAuthor(withSender: WithSender): SchemaRichEmbedAuthor | undefined {
        const sender = withSender.sender;
        if(!sender || !sender.login) return undefined;
        return {
            name: sender.login,
            icon_url: sender.avatar_url,
            url: sender.html_url,
        };
    }


    protected repositoryAsTitle(withRepository: WithRepository) {
        return {
            title: withRepository.repository.full_name,
            url: withRepository.repository.url,
        }
    }
}