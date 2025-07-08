import {EventTransformer} from "./event-transformer.ts";
import {EventSchema} from "../github-webooks.ts";
import {WebhookContent} from "../discord-webhook.ts";
import {SchemaRichEmbed, SchemaRichEmbedAuthor} from "../openapi/discord-schema.ts";
import {MergeUnion} from "../util/type-helpers.ts";

export abstract class EmbedTransformer<T extends EventSchema> extends EventTransformer<T> {
    public transform(e: T): WebhookContent {
        return {
            embeds: [
                this.transformEmbed(e),
            ]
        };
    }

    public transformEmbed(e: T): SchemaRichEmbed {
        return {
            author: this.transformAuthor(e),
        };
    }

    protected transformAuthor(e: T): SchemaRichEmbedAuthor | undefined {
        const anyEvent = e as MergeUnion<EventSchema>;
        const sender = anyEvent.sender;
        if(!sender || !sender.login) return undefined;
        return {
            name: sender.login,
            icon_url: sender.avatar_url,
            url: sender.html_url,
        };
    }
}