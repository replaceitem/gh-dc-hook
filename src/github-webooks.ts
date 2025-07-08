import {components, SchemaWebhookConfig} from "./openapi/github-schema.ts";
import {FilterKeysByPrefix, FilterPropertiesByType, Prettify} from "./util/type-helpers.ts";

type Schemas = components["schemas"];

export type EventSchemasByKey = Prettify<FilterPropertiesByType<FilterKeysByPrefix<Schemas, 'webhook-'>, string  | number | SchemaWebhookConfig>>;

export type EventKeys = keyof EventSchemasByKey;
export type EventSchema = EventSchemasByKey[EventKeys];

export type IncomingWebhookDataByKey<E extends EventKeys = EventKeys> = {
    [K in EventKeys]: { event: string; data: EventSchemasByKey[K] };
}[E];
