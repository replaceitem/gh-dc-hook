import createClient from "openapi-fetch";
import {
    paths as discordPaths,
} from "../openapi/discord-schema.ts";
import {defined, getEnvOrThrow} from "../util/util.ts";
import {contentType} from "@std/media-types";
import {icons} from "./icons.ts";

const token = getEnvOrThrow('EMOJI_BOT_TOKEN');
const guildId = getEnvOrThrow('EMOJI_GUILD_ID');

const client = createClient<discordPaths>({baseUrl: 'https://discord.com/api/v10'});
client.use({
    onRequest({request}) {
      request.headers.set('Authorization', `Bot ${token}`)
    },
    onResponse({ response }) {
        if (!response.ok) {
            throw new Error(`${response.url}: ${response.status} ${response.statusText}`)
        }
    }
});



const uploadEmojis = async () => {

    const emojisResponse = await client.GET('/guilds/{guild_id}/emojis', {
        params: {
            path: {
                guild_id: guildId,
            }
        },
    });

    if(!emojisResponse.data) throw new Error(`Could not get emojis: ${emojisResponse.error?.message}`);

    const existingEmojis = new Set(emojisResponse.data.map(e => e.name));

    const emojiFiles = Deno.readDir('./gen_emojis');

    for await (const file of emojiFiles) {
        if(!file.isFile) continue;
        const name = file.name.split('.')[0]!;
        const fileType = file.name.split('.').at(-1)!;
        if(existingEmojis.has(name)) {
            console.log(`Emoji ${name} already exists, skipping`);
            continue;
        }

        const mimeType = contentType(fileType);
        const bytes = await Deno.readFile(`./gen_emojis/${file.name}`);
        const base64Data = btoa(String.fromCharCode(...new Uint8Array(bytes)));
        const dataUri = `data:${mimeType};base64,${base64Data}`;

        console.log(`Uploading ${name}`);

        const uploadResponse = await client.POST('/guilds/{guild_id}/emojis', {
            params: {
                path: {
                    guild_id: guildId,
                }
            },
            body: {
                name: name,
                image: dataUri,
            }
        });

        if(uploadResponse.error) {
            console.error(`Error uploading emoji: ${uploadResponse.error.message}`);
        }
    }
}

const listEmojis = async () => {
    const emojisResponse = await client.GET('/guilds/{guild_id}/emojis', {
        params: {
            path: {
                guild_id: guildId,
            }
        },
    });

    const emojis = emojisResponse.data;
    if(!emojis) throw new Error(`Could not get emojis: ${emojisResponse.error?.message}`);

    const emojiObject = icons.map(icon => {
        const emoji = emojis.find(emoji => emoji.name === `gh_${icon.name}`);
        if(!emoji) {
            console.log(`Could not find emoji ${icon.name}`);
            return undefined;
        }
        return `${icon.name}: '<${emoji.animated ? 'a' : ''}:${emoji.name}:${emoji.id}>'`;
    })
        .filter(defined)
        .map(prop => ' '.repeat(4) + prop + ',')
        .join('\n');
    console.log('Update EMOJIS in src/util/constants.ts with the following:');
    console.log(`{\n${emojiObject}\n}`);
};


await uploadEmojis();
await listEmojis();