export interface paths {
    "/applications/@me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_my_application"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_my_application"];
        trace?: never;
    };
    "/applications/{application_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_application"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_application"];
        trace?: never;
    };
    "/applications/{application_id}/activity-instances/{instance_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                instance_id: string;
            };
            cookie?: never;
        };
        get: operations["applications_get_activity_instance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/attachment": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["upload_application_attachment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/commands": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_application_commands"];
        put: operations["bulk_set_application_commands"];
        post: operations["create_application_command"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/commands/{command_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_application_command"];
        put?: never;
        post?: never;
        delete: operations["delete_application_command"];
        options?: never;
        head?: never;
        patch: operations["update_application_command"];
        trace?: never;
    };
    "/applications/{application_id}/emojis": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_application_emojis"];
        put?: never;
        post: operations["create_application_emoji"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/emojis/{emoji_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_application_emoji"];
        put?: never;
        post?: never;
        delete: operations["delete_application_emoji"];
        options?: never;
        head?: never;
        patch: operations["update_application_emoji"];
        trace?: never;
    };
    "/applications/{application_id}/entitlements": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_entitlements"];
        put?: never;
        post: operations["create_entitlement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/entitlements/{entitlement_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                entitlement_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_entitlement"];
        put?: never;
        post?: never;
        delete: operations["delete_entitlement"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/entitlements/{entitlement_id}/consume": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                entitlement_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["consume_entitlement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/guilds/{guild_id}/commands": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_application_commands"];
        put: operations["bulk_set_guild_application_commands"];
        post: operations["create_guild_application_command"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/guilds/{guild_id}/commands/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_application_command_permissions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_application_command"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_application_command"];
        options?: never;
        head?: never;
        patch: operations["update_guild_application_command"];
        trace?: never;
    };
    "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_application_command_permissions"];
        put: operations["set_guild_application_command_permissions"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/role-connections/metadata": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_application_role_connections_metadata"];
        put: operations["update_application_role_connections_metadata"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_channel"];
        put?: never;
        post?: never;
        delete: operations["delete_channel"];
        options?: never;
        head?: never;
        patch: operations["update_channel"];
        trace?: never;
    };
    "/channels/{channel_id}/followers": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["follow_channel"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/invites": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_channel_invites"];
        put?: never;
        post: operations["create_channel_invite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_messages"];
        put?: never;
        post: operations["create_message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/bulk-delete": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["bulk_delete_messages"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/pins": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_pins"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/pins/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["create_pin"];
        post?: never;
        delete: operations["delete_pin"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_message"];
        put?: never;
        post?: never;
        delete: operations["delete_message"];
        options?: never;
        head?: never;
        patch: operations["update_message"];
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/crosspost": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["crosspost_message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/reactions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["delete_all_message_reactions"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
            };
            cookie?: never;
        };
        get: operations["list_message_reactions_by_emoji"];
        put?: never;
        post?: never;
        delete: operations["delete_all_message_reactions_by_emoji"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
            };
            cookie?: never;
        };
        get?: never;
        put: operations["add_my_message_reaction"];
        post?: never;
        delete: operations["delete_my_message_reaction"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["delete_user_message_reaction"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/threads": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_thread_from_message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/permissions/{overwrite_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                overwrite_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["set_channel_permission_overwrite"];
        post?: never;
        delete: operations["delete_channel_permission_overwrite"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/pins": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["deprecated_list_pins"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/pins/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["deprecated_create_pin"];
        post?: never;
        delete: operations["deprecated_delete_pin"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/polls/{message_id}/answers/{answer_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
                answer_id: number;
            };
            cookie?: never;
        };
        get: operations["get_answer_voters"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/polls/{message_id}/expire": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["poll_expire"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/recipients/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["add_group_dm_user"];
        post?: never;
        delete: operations["delete_group_dm_user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/send-soundboard-sound": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["send_soundboard_sound"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/thread-members": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_thread_members"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/thread-members/@me": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["join_thread"];
        post?: never;
        delete: operations["leave_thread"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/thread-members/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_thread_member"];
        put: operations["add_thread_member"];
        post?: never;
        delete: operations["delete_thread_member"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/threads": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_thread"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/threads/archived/private": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_private_archived_threads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/threads/archived/public": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_public_archived_threads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/threads/search": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["thread_search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/typing": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["trigger_typing_indicator"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/users/@me/threads/archived/private": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_my_private_archived_threads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_channel_webhooks"];
        put?: never;
        post: operations["create_webhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/gateway": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_gateway"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/gateway/bot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_bot_gateway"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_guild"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/templates/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        get: operations["get_guild_template"];
        put?: never;
        post: operations["create_guild_from_template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild"];
        put?: never;
        post?: never;
        delete: operations["delete_guild"];
        options?: never;
        head?: never;
        patch: operations["update_guild"];
        trace?: never;
    };
    "/guilds/{guild_id}/audit-logs": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_audit_log_entries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/auto-moderation/rules": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_auto_moderation_rules"];
        put?: never;
        post: operations["create_auto_moderation_rule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/auto-moderation/rules/{rule_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                rule_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_auto_moderation_rule"];
        put?: never;
        post?: never;
        delete: operations["delete_auto_moderation_rule"];
        options?: never;
        head?: never;
        patch: operations["update_auto_moderation_rule"];
        trace?: never;
    };
    "/guilds/{guild_id}/bans": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_bans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/bans/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_ban"];
        put: operations["ban_user_from_guild"];
        post?: never;
        delete: operations["unban_user_from_guild"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/bulk-ban": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["bulk_ban_users_from_guild"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/channels": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_channels"];
        put?: never;
        post: operations["create_guild_channel"];
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["bulk_update_guild_channels"];
        trace?: never;
    };
    "/guilds/{guild_id}/emojis": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_emojis"];
        put?: never;
        post: operations["create_guild_emoji"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/emojis/{emoji_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_emoji"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_emoji"];
        options?: never;
        head?: never;
        patch: operations["update_guild_emoji"];
        trace?: never;
    };
    "/guilds/{guild_id}/integrations": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_integrations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/integrations/{integration_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                integration_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["delete_guild_integration"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/invites": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_invites"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/members": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_members"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/members/@me": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_my_guild_member"];
        trace?: never;
    };
    "/guilds/{guild_id}/members/search": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["search_guild_members"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/members/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_member"];
        put: operations["add_guild_member"];
        post?: never;
        delete: operations["delete_guild_member"];
        options?: never;
        head?: never;
        patch: operations["update_guild_member"];
        trace?: never;
    };
    "/guilds/{guild_id}/members/{user_id}/roles/{role_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["add_guild_member_role"];
        post?: never;
        delete: operations["delete_guild_member_role"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/mfa": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["set_guild_mfa_level"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/new-member-welcome": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_new_member_welcome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/onboarding": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guilds_onboarding"];
        put: operations["put_guilds_onboarding"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/preview": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_preview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/prune": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["preview_prune_guild"];
        put?: never;
        post: operations["prune_guild"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/regions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_voice_regions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_roles"];
        put?: never;
        post: operations["create_guild_role"];
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["bulk_update_guild_roles"];
        trace?: never;
    };
    "/guilds/{guild_id}/roles/{role_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_role"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_role"];
        options?: never;
        head?: never;
        patch: operations["update_guild_role"];
        trace?: never;
    };
    "/guilds/{guild_id}/scheduled-events": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_scheduled_events"];
        put?: never;
        post: operations["create_guild_scheduled_event"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_scheduled_event"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_scheduled_event"];
        options?: never;
        head?: never;
        patch: operations["update_guild_scheduled_event"];
        trace?: never;
    };
    "/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_scheduled_event_users"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/soundboard-sounds": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_soundboard_sounds"];
        put?: never;
        post: operations["create_guild_soundboard_sound"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/soundboard-sounds/{sound_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sound_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_soundboard_sound"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_soundboard_sound"];
        options?: never;
        head?: never;
        patch: operations["update_guild_soundboard_sound"];
        trace?: never;
    };
    "/guilds/{guild_id}/stickers": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_stickers"];
        put?: never;
        post: operations["create_guild_sticker"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/stickers/{sticker_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_sticker"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_sticker"];
        options?: never;
        head?: never;
        patch: operations["update_guild_sticker"];
        trace?: never;
    };
    "/guilds/{guild_id}/templates": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_templates"];
        put?: never;
        post: operations["create_guild_template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/templates/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                code: string;
            };
            cookie?: never;
        };
        get?: never;
        put: operations["sync_guild_template"];
        post?: never;
        delete: operations["delete_guild_template"];
        options?: never;
        head?: never;
        patch: operations["update_guild_template"];
        trace?: never;
    };
    "/guilds/{guild_id}/threads/active": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_active_guild_threads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/vanity-url": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_vanity_url"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/voice-states/@me": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_self_voice_state"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_self_voice_state"];
        trace?: never;
    };
    "/guilds/{guild_id}/voice-states/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_voice_state"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_voice_state"];
        trace?: never;
    };
    "/guilds/{guild_id}/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_webhooks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/welcome-screen": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_welcome_screen"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_guild_welcome_screen"];
        trace?: never;
    };
    "/guilds/{guild_id}/widget": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_widget_settings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_guild_widget_settings"];
        trace?: never;
    };
    "/guilds/{guild_id}/widget.json": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_widget"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/widget.png": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_widget_png"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/interactions/{interaction_id}/{interaction_token}/callback": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                interaction_id: components["schemas"]["SnowflakeType"];
                interaction_token: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_interaction_response"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/invites/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        get: operations["invite_resolve"];
        put?: never;
        post?: never;
        delete: operations["invite_revoke"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["create_or_join_lobby"];
        post: operations["create_lobby"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_lobby"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["edit_lobby"];
        trace?: never;
    };
    "/lobbies/{lobby_id}/channel-linking": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["edit_lobby_channel_link"];
        trace?: never;
    };
    "/lobbies/{lobby_id}/members/@me": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["leave_lobby"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}/members/@me/invites": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_linked_lobby_guild_invite_for_self"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}/members/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["bulk_update_lobby_members"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}/members/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["add_lobby_member"];
        post?: never;
        delete: operations["delete_lobby_member"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}/members/{user_id}/invites": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_linked_lobby_guild_invite_for_user"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_lobby_messages"];
        put?: never;
        post: operations["create_lobby_message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth2/@me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_my_oauth2_authorization"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth2/applications/@me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_my_oauth2_application"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth2/keys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_public_keys"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth2/userinfo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_openid_connect_userinfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/partner-sdk/provisional-accounts/unmerge": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["partner_sdk_unmerge_provisional_account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/partner-sdk/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["partner_sdk_token"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/partner-sdk/token/bot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["bot_partner_sdk_token"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/soundboard-default-sounds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_soundboard_default_sounds"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stage-instances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_stage_instance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stage-instances/{channel_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_stage_instance"];
        put?: never;
        post?: never;
        delete: operations["delete_stage_instance"];
        options?: never;
        head?: never;
        patch: operations["update_stage_instance"];
        trace?: never;
    };
    "/sticker-packs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["list_sticker_packs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sticker-packs/{pack_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                pack_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_sticker_pack"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stickers/{sticker_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_sticker"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_my_user"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_my_user"];
        trace?: never;
    };
    "/users/@me/applications/{application_id}/role-connection": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_application_user_role_connection"];
        put: operations["update_application_user_role_connection"];
        post?: never;
        delete: operations["delete_application_user_role_connection"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_dm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me/connections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["list_my_connections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me/guilds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["list_my_guilds"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me/guilds/{guild_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["leave_guild"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me/guilds/{guild_id}/member": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_my_guild_member"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_user"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/voice/regions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["list_voice_regions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/{webhook_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_webhook"];
        put?: never;
        post?: never;
        delete: operations["delete_webhook"];
        options?: never;
        head?: never;
        patch: operations["update_webhook"];
        trace?: never;
    };
    "/webhooks/{webhook_id}/{webhook_token}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        get: operations["get_webhook_by_token"];
        put?: never;
        post: operations["execute_webhook"];
        delete: operations["delete_webhook_by_token"];
        options?: never;
        head?: never;
        patch: operations["update_webhook_by_token"];
        trace?: never;
    };
    "/webhooks/{webhook_id}/{webhook_token}/github": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["execute_github_compatible_webhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/{webhook_id}/{webhook_token}/messages/@original": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        get: operations["get_original_webhook_message"];
        put?: never;
        post?: never;
        delete: operations["delete_original_webhook_message"];
        options?: never;
        head?: never;
        patch: operations["update_original_webhook_message"];
        trace?: never;
    };
    "/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_webhook_message"];
        put?: never;
        post?: never;
        delete: operations["delete_webhook_message"];
        options?: never;
        head?: never;
        patch: operations["update_webhook_message"];
        trace?: never;
    };
    "/webhooks/{webhook_id}/{webhook_token}/slack": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["execute_slack_compatible_webhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AccountResponse: {
            id: string;
            name?: string | null;
        };
        ActionRowComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
            components: (components["schemas"]["ButtonComponentForMessageRequest"] | components["schemas"]["ChannelSelectComponentForMessageRequest"] | components["schemas"]["MentionableSelectComponentForMessageRequest"] | components["schemas"]["RoleSelectComponentForMessageRequest"] | components["schemas"]["StringSelectComponentForMessageRequest"] | components["schemas"]["UserSelectComponentForMessageRequest"])[];
        };
        ActionRowComponentForModalRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
            components: components["schemas"]["TextInputComponentForModalRequest"][];
        };
        ActionRowComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
            /** Format: int32 */
            id: number;
            components?: (components["schemas"]["ButtonComponentResponse"] | components["schemas"]["ChannelSelectComponentResponse"] | components["schemas"]["MentionableSelectComponentResponse"] | components["schemas"]["RoleSelectComponentResponse"] | components["schemas"]["StringSelectComponentResponse"] | components["schemas"]["TextInputComponentResponse"] | components["schemas"]["UserSelectComponentResponse"])[] | null;
        };
        ActivitiesAttachmentResponse: {
            attachment: components["schemas"]["AttachmentResponse"];
        };
        /** Format: int32 */
        AfkTimeouts: number & (60 | 300 | 900 | 1800 | 3600);
        AllowedMentionTypes: string & ("users" | "roles" | "everyone");
        ApplicationCommandAttachmentOption: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 11;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
        };
        ApplicationCommandAttachmentOptionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 11;
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
        };
        ApplicationCommandAutocompleteCallbackRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 8;
            data: components["schemas"]["InteractionApplicationCommandAutocompleteCallbackIntegerData"] | components["schemas"]["InteractionApplicationCommandAutocompleteCallbackNumberData"] | components["schemas"]["InteractionApplicationCommandAutocompleteCallbackStringData"];
        };
        ApplicationCommandBooleanOption: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 5;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
        };
        ApplicationCommandBooleanOptionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 5;
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
        };
        ApplicationCommandChannelOption: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 7;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            channel_types?: components["schemas"]["ChannelTypes"][] | null;
        };
        ApplicationCommandChannelOptionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 7;
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            channel_types?: components["schemas"]["ChannelTypes"][] | null;
        };
        ApplicationCommandCreateRequest: {
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            options?: (components["schemas"]["ApplicationCommandAttachmentOption"] | components["schemas"]["ApplicationCommandBooleanOption"] | components["schemas"]["ApplicationCommandChannelOption"] | components["schemas"]["ApplicationCommandIntegerOption"] | components["schemas"]["ApplicationCommandMentionableOption"] | components["schemas"]["ApplicationCommandNumberOption"] | components["schemas"]["ApplicationCommandRoleOption"] | components["schemas"]["ApplicationCommandStringOption"] | components["schemas"]["ApplicationCommandSubcommandGroupOption"] | components["schemas"]["ApplicationCommandSubcommandOption"] | components["schemas"]["ApplicationCommandUserOption"])[] | null;
            default_member_permissions?: number | null;
            dm_permission?: boolean | null;
            contexts?: components["schemas"]["InteractionContextType"][] | null;
            integration_types?: components["schemas"]["ApplicationIntegrationType"][] | null;
            handler?: null | components["schemas"]["ApplicationCommandHandler"];
            type?: null | components["schemas"]["ApplicationCommandType"];
        };
        /** Format: int32 */
        ApplicationCommandHandler: number;
        ApplicationCommandIntegerOption: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            autocomplete?: boolean | null;
            choices?: components["schemas"]["ApplicationCommandOptionIntegerChoice"][] | null;
            min_value?: null | components["schemas"]["Int53Type"];
            max_value?: null | components["schemas"]["Int53Type"];
        };
        ApplicationCommandIntegerOptionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            autocomplete?: boolean | null;
            choices?: components["schemas"]["ApplicationCommandOptionIntegerChoiceResponse"][] | null;
            min_value?: null | components["schemas"]["Int53Type"];
            max_value?: null | components["schemas"]["Int53Type"];
        };
        ApplicationCommandInteractionMetadataResponse: {
            id: components["schemas"]["SnowflakeType"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            user?: null | components["schemas"]["UserResponse"];
            authorizing_integration_owners: {
                [key: string]: components["schemas"]["SnowflakeType"];
            };
            original_response_message_id?: null | components["schemas"]["SnowflakeType"];
            target_user?: null | components["schemas"]["UserResponse"];
            target_message_id?: null | components["schemas"]["SnowflakeType"];
        };
        ApplicationCommandMentionableOption: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 9;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
        };
        ApplicationCommandMentionableOptionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 9;
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
        };
        ApplicationCommandNumberOption: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            autocomplete?: boolean | null;
            choices?: components["schemas"]["ApplicationCommandOptionNumberChoice"][] | null;
            /** Format: double */
            min_value?: number | null;
            /** Format: double */
            max_value?: number | null;
        };
        ApplicationCommandNumberOptionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10;
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            autocomplete?: boolean | null;
            choices?: components["schemas"]["ApplicationCommandOptionNumberChoiceResponse"][] | null;
            /** Format: double */
            min_value?: number | null;
            /** Format: double */
            max_value?: number | null;
        };
        ApplicationCommandOptionIntegerChoice: {
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            value: components["schemas"]["Int53Type"];
        };
        ApplicationCommandOptionIntegerChoiceResponse: {
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            value: components["schemas"]["Int53Type"];
        };
        ApplicationCommandOptionNumberChoice: {
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            /** Format: double */
            value: number;
        };
        ApplicationCommandOptionNumberChoiceResponse: {
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            /** Format: double */
            value: number;
        };
        ApplicationCommandOptionStringChoice: {
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            value: string;
        };
        ApplicationCommandOptionStringChoiceResponse: {
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            value: string;
        };
        /** Format: int32 */
        ApplicationCommandOptionType: number & (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11);
        ApplicationCommandPatchRequestPartial: {
            name?: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            options?: (components["schemas"]["ApplicationCommandAttachmentOption"] | components["schemas"]["ApplicationCommandBooleanOption"] | components["schemas"]["ApplicationCommandChannelOption"] | components["schemas"]["ApplicationCommandIntegerOption"] | components["schemas"]["ApplicationCommandMentionableOption"] | components["schemas"]["ApplicationCommandNumberOption"] | components["schemas"]["ApplicationCommandRoleOption"] | components["schemas"]["ApplicationCommandStringOption"] | components["schemas"]["ApplicationCommandSubcommandGroupOption"] | components["schemas"]["ApplicationCommandSubcommandOption"] | components["schemas"]["ApplicationCommandUserOption"])[] | null;
            default_member_permissions?: number | null;
            dm_permission?: boolean | null;
            contexts?: components["schemas"]["InteractionContextType"][] | null;
            integration_types?: components["schemas"]["ApplicationIntegrationType"][] | null;
            handler?: null | components["schemas"]["ApplicationCommandHandler"];
        };
        ApplicationCommandPermission: {
            id: components["schemas"]["SnowflakeType"];
            type: components["schemas"]["ApplicationCommandPermissionType"];
            permission: boolean;
        };
        /** Format: int32 */
        ApplicationCommandPermissionType: number & (1 | 2 | 3);
        ApplicationCommandResponse: {
            id: components["schemas"]["SnowflakeType"];
            application_id: components["schemas"]["SnowflakeType"];
            version: components["schemas"]["SnowflakeType"];
            default_member_permissions?: string | null;
            type: components["schemas"]["ApplicationCommandType"];
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            guild_id?: null | components["schemas"]["SnowflakeType"];
            dm_permission?: boolean | null;
            contexts?: components["schemas"]["InteractionContextType"][] | null;
            integration_types?: components["schemas"]["ApplicationIntegrationType"][] | null;
            options?: (components["schemas"]["ApplicationCommandAttachmentOptionResponse"] | components["schemas"]["ApplicationCommandBooleanOptionResponse"] | components["schemas"]["ApplicationCommandChannelOptionResponse"] | components["schemas"]["ApplicationCommandIntegerOptionResponse"] | components["schemas"]["ApplicationCommandMentionableOptionResponse"] | components["schemas"]["ApplicationCommandNumberOptionResponse"] | components["schemas"]["ApplicationCommandRoleOptionResponse"] | components["schemas"]["ApplicationCommandStringOptionResponse"] | components["schemas"]["ApplicationCommandSubcommandGroupOptionResponse"] | components["schemas"]["ApplicationCommandSubcommandOptionResponse"] | components["schemas"]["ApplicationCommandUserOptionResponse"])[] | null;
            nsfw?: boolean | null;
        };
        ApplicationCommandRoleOption: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 8;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
        };
        ApplicationCommandRoleOptionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 8;
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
        };
        ApplicationCommandStringOption: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            autocomplete?: boolean | null;
            min_length?: number | null;
            max_length?: number | null;
            choices?: components["schemas"]["ApplicationCommandOptionStringChoice"][] | null;
        };
        ApplicationCommandStringOptionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            autocomplete?: boolean | null;
            choices?: components["schemas"]["ApplicationCommandOptionStringChoiceResponse"][] | null;
            /** Format: int32 */
            min_length?: number | null;
            /** Format: int32 */
            max_length?: number | null;
        };
        ApplicationCommandSubcommandGroupOption: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            options?: components["schemas"]["ApplicationCommandSubcommandOption"][] | null;
        };
        ApplicationCommandSubcommandGroupOptionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            options?: components["schemas"]["ApplicationCommandSubcommandOptionResponse"][] | null;
        };
        ApplicationCommandSubcommandOption: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            options?: (components["schemas"]["ApplicationCommandAttachmentOption"] | components["schemas"]["ApplicationCommandBooleanOption"] | components["schemas"]["ApplicationCommandChannelOption"] | components["schemas"]["ApplicationCommandIntegerOption"] | components["schemas"]["ApplicationCommandMentionableOption"] | components["schemas"]["ApplicationCommandNumberOption"] | components["schemas"]["ApplicationCommandRoleOption"] | components["schemas"]["ApplicationCommandStringOption"] | components["schemas"]["ApplicationCommandUserOption"])[] | null;
        };
        ApplicationCommandSubcommandOptionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            options?: (components["schemas"]["ApplicationCommandAttachmentOptionResponse"] | components["schemas"]["ApplicationCommandBooleanOptionResponse"] | components["schemas"]["ApplicationCommandChannelOptionResponse"] | components["schemas"]["ApplicationCommandIntegerOptionResponse"] | components["schemas"]["ApplicationCommandMentionableOptionResponse"] | components["schemas"]["ApplicationCommandNumberOptionResponse"] | components["schemas"]["ApplicationCommandRoleOptionResponse"] | components["schemas"]["ApplicationCommandStringOptionResponse"] | components["schemas"]["ApplicationCommandUserOptionResponse"])[] | null;
        };
        /** Format: int32 */
        ApplicationCommandType: number & (1 | 2 | 3 | 4);
        ApplicationCommandUpdateRequest: {
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            options?: (components["schemas"]["ApplicationCommandAttachmentOption"] | components["schemas"]["ApplicationCommandBooleanOption"] | components["schemas"]["ApplicationCommandChannelOption"] | components["schemas"]["ApplicationCommandIntegerOption"] | components["schemas"]["ApplicationCommandMentionableOption"] | components["schemas"]["ApplicationCommandNumberOption"] | components["schemas"]["ApplicationCommandRoleOption"] | components["schemas"]["ApplicationCommandStringOption"] | components["schemas"]["ApplicationCommandSubcommandGroupOption"] | components["schemas"]["ApplicationCommandSubcommandOption"] | components["schemas"]["ApplicationCommandUserOption"])[] | null;
            default_member_permissions?: number | null;
            dm_permission?: boolean | null;
            contexts?: components["schemas"]["InteractionContextType"][] | null;
            integration_types?: components["schemas"]["ApplicationIntegrationType"][] | null;
            handler?: null | components["schemas"]["ApplicationCommandHandler"];
            type?: null | components["schemas"]["ApplicationCommandType"];
            id?: null | components["schemas"]["SnowflakeType"];
        };
        ApplicationCommandUserOption: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 6;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
        };
        ApplicationCommandUserOptionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 6;
            name: string;
            name_localized?: string | null;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localized?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
        };
        /** Format: int32 */
        ApplicationExplicitContentFilterTypes: number & (0 | 1);
        ApplicationFormPartial: {
            description?: {
                default: string;
                localizations?: {
                    [key: string]: string;
                } | null;
            } | null;
            icon?: string | null;
            cover_image?: string | null;
            team_id?: null | components["schemas"]["SnowflakeType"];
            flags?: number | null;
            /** Format: uri */
            interactions_endpoint_url?: string | null;
            explicit_content_filter?: null | components["schemas"]["ApplicationExplicitContentFilterTypes"];
            /** Format: int32 */
            max_participants?: number | null;
            type?: null | components["schemas"]["ApplicationTypes"];
            tags?: string[] | null;
            /** Format: uri */
            custom_install_url?: string | null;
            install_params?: null | components["schemas"]["ApplicationOAuth2InstallParams"];
            /** Format: uri */
            role_connections_verification_url?: string | null;
            integration_types_config?: {
                [key: string]: null | components["schemas"]["ApplicationIntegrationTypeConfiguration"];
            } | null;
        };
        ApplicationIdentityProviderAuthType: string & ("OIDC" | "EPIC_ONLINE_SERVICES_ACCESS_TOKEN" | "EPIC_ONLINE_SERVICES_ID_TOKEN" | "STEAM_SESSION_TICKET" | "UNITY_SERVICES_ID_TOKEN");
        ApplicationIncomingWebhookResponse: {
            application_id?: null | components["schemas"]["SnowflakeType"];
            avatar?: string | null;
            channel_id?: null | components["schemas"]["SnowflakeType"];
            guild_id?: null | components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
            user?: null | components["schemas"]["UserResponse"];
        };
        /** Format: int32 */
        ApplicationIntegrationType: number & (0 | 1);
        ApplicationIntegrationTypeConfiguration: {
            oauth2_install_params?: null | components["schemas"]["ApplicationOAuth2InstallParams"];
        };
        ApplicationIntegrationTypeConfigurationResponse: {
            oauth2_install_params?: null | components["schemas"]["ApplicationOAuth2InstallParamsResponse"];
        };
        ApplicationOAuth2InstallParams: {
            scopes?: ("applications.commands" | "bot")[] | null;
            permissions?: number | null;
        };
        ApplicationOAuth2InstallParamsResponse: {
            scopes: ("applications.commands" | "bot")[];
            permissions: string;
        };
        ApplicationResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            icon?: string | null;
            description: string;
            type?: null | components["schemas"]["ApplicationTypes"];
            cover_image?: string | null;
            primary_sku_id?: null | components["schemas"]["SnowflakeType"];
            bot?: null | components["schemas"]["UserResponse"];
            slug?: string | null;
            guild_id?: null | components["schemas"]["SnowflakeType"];
            rpc_origins?: (string | null)[] | null;
            bot_public?: boolean | null;
            bot_require_code_grant?: boolean | null;
            /** Format: uri */
            terms_of_service_url?: string | null;
            /** Format: uri */
            privacy_policy_url?: string | null;
            /** Format: uri */
            custom_install_url?: string | null;
            install_params?: null | components["schemas"]["ApplicationOAuth2InstallParamsResponse"];
            integration_types_config?: {
                [key: string]: components["schemas"]["ApplicationIntegrationTypeConfigurationResponse"];
            } | null;
            verify_key: string;
            /** Format: int32 */
            flags: number;
            /** Format: int32 */
            max_participants?: number | null;
            tags?: string[] | null;
        };
        ApplicationRoleConnectionsMetadataItemRequest: {
            type: components["schemas"]["MetadataItemTypes"];
            key: string;
            name: string;
            name_localizations?: {
                [key: string]: string | null;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string | null;
            } | null;
        };
        ApplicationRoleConnectionsMetadataItemResponse: {
            type: components["schemas"]["MetadataItemTypes"];
            key: string;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
        };
        /** Format: int32 */
        ApplicationTypes: number & 4;
        ApplicationUserRoleConnectionResponse: {
            platform_name?: string | null;
            platform_username?: string | null;
            metadata?: {
                [key: string]: string;
            } | null;
        };
        AttachmentResponse: {
            id: components["schemas"]["SnowflakeType"];
            filename: string;
            /** Format: int32 */
            size: number;
            /** Format: uri */
            url: string;
            /** Format: uri */
            proxy_url: string;
            /** Format: int32 */
            width?: number | null;
            /** Format: int32 */
            height?: number | null;
            /** Format: double */
            duration_secs?: number | null;
            waveform?: string | null;
            description?: string | null;
            content_type?: string | null;
            ephemeral?: boolean | null;
            title?: string | null;
            application?: null | components["schemas"]["ApplicationResponse"];
            /** Format: date-time */
            clip_created_at?: string | null;
            clip_participants?: components["schemas"]["UserResponse"][] | null;
        };
        /** Format: int32 */
        AuditLogActionTypes: number & (1 | 10 | 11 | 12 | 13 | 14 | 15 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 30 | 31 | 32 | 40 | 41 | 42 | 50 | 51 | 52 | 60 | 61 | 62 | 72 | 73 | 74 | 75 | 80 | 81 | 82 | 83 | 84 | 85 | 90 | 91 | 92 | 100 | 101 | 102 | 110 | 111 | 112 | 121 | 130 | 131 | 132 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 150 | 151 | 163 | 164 | 165 | 166 | 167 | 171 | 172 | 180 | 190 | 191 | 192 | 193 | 211);
        AuditLogEntryResponse: {
            id: components["schemas"]["SnowflakeType"];
            action_type: components["schemas"]["AuditLogActionTypes"];
            user_id?: null | components["schemas"]["SnowflakeType"];
            target_id?: null | components["schemas"]["SnowflakeType"];
            changes?: components["schemas"]["AuditLogObjectChangeResponse"][] | null;
            options?: {
                [key: string]: string;
            } | null;
            reason?: string | null;
        };
        AuditLogObjectChangeResponse: {
            key?: string | null;
            new_value?: unknown;
            old_value?: unknown;
        };
        /** Format: int32 */
        AutomodActionType: number & (1 | 2 | 3 | 4);
        /** Format: int32 */
        AutomodEventType: number & (1 | 2);
        /** Format: int32 */
        AutomodKeywordPresetType: number & (1 | 2 | 3);
        /** Format: int32 */
        AutomodTriggerType: number & (1 | 2 | 3 | 4 | 5);
        AvailableLocalesEnum: string & ("ar" | "bg" | "cs" | "da" | "de" | "el" | "en-GB" | "en-US" | "es-419" | "es-ES" | "fi" | "fr" | "he" | "hi" | "hr" | "hu" | "id" | "it" | "ja" | "ko" | "lt" | "nl" | "no" | "pl" | "pt-BR" | "ro" | "ru" | "sv-SE" | "th" | "tr" | "uk" | "vi" | "zh-CN" | "zh-TW");
        BaseCreateMessageCreateRequest: {
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            sticker_ids?: components["schemas"]["SnowflakeType"][] | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            flags?: number | null;
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
            confetti_potion?: null | components["schemas"]["ConfettiPotionCreateRequest"];
        };
        BasicApplicationResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            icon?: string | null;
            description: string;
            type?: null | components["schemas"]["ApplicationTypes"];
            cover_image?: string | null;
            primary_sku_id?: null | components["schemas"]["SnowflakeType"];
            bot?: null | components["schemas"]["UserResponse"];
        };
        BasicMessageResponse: {
            type: components["schemas"]["MessageType"];
            content: string;
            mentions: components["schemas"]["UserResponse"][];
            mention_roles: components["schemas"]["SnowflakeType"][];
            attachments: components["schemas"]["MessageAttachmentResponse"][];
            embeds: components["schemas"]["MessageEmbedResponse"][];
            /** Format: date-time */
            timestamp: string;
            /** Format: date-time */
            edited_timestamp?: string | null;
            /** Format: int32 */
            flags: number;
            components: (components["schemas"]["ActionRowComponentResponse"] | components["schemas"]["ContainerComponentResponse"] | components["schemas"]["FileComponentResponse"] | components["schemas"]["MediaGalleryComponentResponse"] | components["schemas"]["SectionComponentResponse"] | components["schemas"]["SeparatorComponentResponse"] | components["schemas"]["TextDisplayComponentResponse"])[];
            resolved?: null | components["schemas"]["ResolvedObjectsResponse"];
            stickers?: (components["schemas"]["GuildStickerResponse"] | components["schemas"]["StandardStickerResponse"])[] | null;
            sticker_items?: components["schemas"]["MessageStickerItemResponse"][] | null;
            id: components["schemas"]["SnowflakeType"];
            channel_id: components["schemas"]["SnowflakeType"];
            author: components["schemas"]["UserResponse"];
            pinned: boolean;
            mention_everyone: boolean;
            tts: boolean;
            call?: null | components["schemas"]["MessageCallResponse"];
            activity?: null | components["schemas"]["MessageActivityResponse"];
            application?: null | components["schemas"]["BasicApplicationResponse"];
            application_id?: null | components["schemas"]["SnowflakeType"];
            interaction?: null | components["schemas"]["MessageInteractionResponse"];
            nonce?: number | string | null;
            webhook_id?: null | components["schemas"]["SnowflakeType"];
            message_reference?: null | components["schemas"]["MessageReferenceResponse"];
            thread?: null | components["schemas"]["ThreadResponse"];
            mention_channels?: (null | components["schemas"]["MessageMentionChannelResponse"])[] | null;
            role_subscription_data?: null | components["schemas"]["MessageRoleSubscriptionDataResponse"];
            purchase_notification?: null | components["schemas"]["PurchaseNotificationResponse"];
            /** Format: int32 */
            position?: number | null;
            poll?: null | components["schemas"]["PollResponse"];
            interaction_metadata?: components["schemas"]["ApplicationCommandInteractionMetadataResponse"] | components["schemas"]["MessageComponentInteractionMetadataResponse"] | components["schemas"]["ModalSubmitInteractionMetadataResponse"] | null;
            message_snapshots?: components["schemas"]["MessageSnapshotResponse"][] | null;
        };
        BlockMessageAction: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
            metadata?: null | components["schemas"]["BlockMessageActionMetadata"];
        };
        BlockMessageActionMetadata: {
            custom_message?: string | null;
        };
        BlockMessageActionMetadataResponse: {
            custom_message?: string | null;
        };
        BlockMessageActionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
            metadata: components["schemas"]["BlockMessageActionMetadataResponse"];
        };
        BotAccountPatchRequest: {
            username: string;
            avatar?: string | null;
            banner?: string | null;
        };
        BotAddGuildMemberRequest: {
            nick?: string | null;
            roles?: components["schemas"]["SnowflakeType"][] | null;
            mute?: boolean | null;
            deaf?: boolean | null;
            access_token: string;
            flags?: number | null;
        };
        BulkBanUsersResponse: {
            banned_users: components["schemas"]["SnowflakeType"][];
            failed_users: components["schemas"]["SnowflakeType"][];
        };
        BulkLobbyMemberRequest: {
            id: components["schemas"]["SnowflakeType"];
            metadata?: {
                [key: string]: string;
            } | null;
            flags?: null | 1;
            remove_member?: boolean | null;
        };
        ButtonComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            custom_id?: string | null;
            style: components["schemas"]["ButtonStyleTypes"];
            label?: string | null;
            disabled?: boolean | null;
            /** Format: uri */
            url?: string | null;
            sku_id?: null | components["schemas"]["SnowflakeType"];
            emoji?: null | components["schemas"]["ComponentEmojiForMessageRequest"];
        };
        ButtonComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            /** Format: int32 */
            id: number;
            custom_id?: string | null;
            style: components["schemas"]["ButtonStyleTypes"];
            label?: string | null;
            disabled?: boolean | null;
            emoji?: null | components["schemas"]["ComponentEmojiResponse"];
            /** Format: uri */
            url?: string | null;
            sku_id?: null | components["schemas"]["SnowflakeType"];
        };
        /** Format: int32 */
        ButtonStyleTypes: number & (1 | 2 | 3 | 4 | 5 | 6);
        ChannelFollowerResponse: {
            channel_id: components["schemas"]["SnowflakeType"];
            webhook_id: components["schemas"]["SnowflakeType"];
        };
        ChannelFollowerWebhookResponse: {
            application_id?: null | components["schemas"]["SnowflakeType"];
            avatar?: string | null;
            channel_id?: null | components["schemas"]["SnowflakeType"];
            guild_id?: null | components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            user?: null | components["schemas"]["UserResponse"];
            source_guild?: null | components["schemas"]["WebhookSourceGuildResponse"];
            source_channel?: null | components["schemas"]["WebhookSourceChannelResponse"];
        };
        ChannelPermissionOverwriteRequest: {
            id: components["schemas"]["SnowflakeType"];
            type?: null | components["schemas"]["ChannelPermissionOverwrites"];
            allow?: number | null;
            deny?: number | null;
        };
        ChannelPermissionOverwriteResponse: {
            id: components["schemas"]["SnowflakeType"];
            type: components["schemas"]["ChannelPermissionOverwrites"];
            allow: string;
            deny: string;
        };
        /** Format: int32 */
        ChannelPermissionOverwrites: number & (0 | 1);
        ChannelSelectComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 8;
            custom_id: string;
            placeholder?: string | null;
            min_values?: number | null;
            max_values?: number | null;
            disabled?: boolean | null;
            default_values?: components["schemas"]["ChannelSelectDefaultValue"][] | null;
            channel_types?: components["schemas"]["ChannelTypes"][] | null;
        };
        ChannelSelectComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 8;
            /** Format: int32 */
            id: number;
            custom_id: string;
            placeholder?: string | null;
            /** Format: int32 */
            min_values?: number | null;
            /** Format: int32 */
            max_values?: number | null;
            disabled?: boolean | null;
            channel_types?: components["schemas"]["ChannelTypes"][] | null;
            default_values?: components["schemas"]["ChannelSelectDefaultValueResponse"][] | null;
        };
        ChannelSelectDefaultValue: {
            /** @enum {string} */
            type: "channel";
            id: components["schemas"]["SnowflakeType"];
        };
        ChannelSelectDefaultValueResponse: {
            /** @enum {string} */
            type: "channel";
            id: components["schemas"]["SnowflakeType"];
        };
        /** Format: int32 */
        ChannelTypes: number & (1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15);
        CommandPermissionResponse: {
            id: components["schemas"]["SnowflakeType"];
            type: components["schemas"]["ApplicationCommandPermissionType"];
            permission: boolean;
        };
        CommandPermissionsResponse: {
            id: components["schemas"]["SnowflakeType"];
            application_id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            permissions: components["schemas"]["CommandPermissionResponse"][];
        };
        ComponentEmojiForMessageRequest: {
            id?: null | components["schemas"]["SnowflakeType"];
            name: string;
        };
        ComponentEmojiResponse: {
            id?: null | components["schemas"]["SnowflakeType"];
            name: string;
            animated?: boolean | null;
        };
        ConfettiPotionCreateRequest: Record<string, never>;
        ConnectedAccountGuildResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            icon?: string | null;
        };
        ConnectedAccountIntegrationResponse: {
            id: string;
            type: components["schemas"]["IntegrationTypes"];
            account: components["schemas"]["AccountResponse"];
            guild: components["schemas"]["ConnectedAccountGuildResponse"];
        };
        ConnectedAccountProviders: string & ("battlenet" | "bluesky" | "bungie" | "ebay" | "epicgames" | "facebook" | "github" | "instagram" | "mastodon" | "leagueoflegends" | "paypal" | "playstation" | "reddit" | "riotgames" | "roblox" | "skype" | "spotify" | "steam" | "tiktok" | "twitch" | "twitter" | "xbox" | "youtube" | "domain");
        ConnectedAccountResponse: {
            id: string;
            name?: string | null;
            type: components["schemas"]["ConnectedAccountProviders"];
            friend_sync: boolean;
            integrations?: components["schemas"]["ConnectedAccountIntegrationResponse"][] | null;
            show_activity: boolean;
            two_way_link: boolean;
            verified: boolean;
            visibility: components["schemas"]["ConnectedAccountVisibility"];
            revoked?: boolean | null;
        };
        /** Format: int32 */
        ConnectedAccountVisibility: number & (0 | 1);
        ContainerComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 17;
            accent_color?: number | null;
            components: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[];
            spoiler?: boolean | null;
        };
        ContainerComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 17;
            /** Format: int32 */
            id: number;
            /** Format: int32 */
            accent_color?: number | null;
            components: (components["schemas"]["ActionRowComponentResponse"] | components["schemas"]["FileComponentResponse"] | components["schemas"]["MediaGalleryComponentResponse"] | components["schemas"]["SectionComponentResponse"] | components["schemas"]["SeparatorComponentResponse"] | components["schemas"]["TextDisplayComponentResponse"])[];
            spoiler: boolean;
        };
        CreateEntitlementRequestData: {
            sku_id: components["schemas"]["SnowflakeType"];
            owner_id: components["schemas"]["SnowflakeType"];
            owner_type: components["schemas"]["EntitlementOwnerTypes"];
        };
        CreateForumThreadRequest: {
            name: string;
            auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            rate_limit_per_user?: number | null;
            applied_tags?: components["schemas"]["SnowflakeType"][] | null;
            message: components["schemas"]["BaseCreateMessageCreateRequest"];
        };
        CreateGroupDMInviteRequest: {
            max_age?: number | null;
        };
        CreateGuildChannelRequest: {
            type?: null | (0 | 2 | 4 | 5 | 13 | 14 | 15);
            name: string;
            /** Format: int32 */
            position?: number | null;
            topic?: string | null;
            /** Format: int32 */
            bitrate?: number | null;
            /** Format: int32 */
            user_limit?: number | null;
            nsfw?: boolean | null;
            rate_limit_per_user?: number | null;
            parent_id?: null | components["schemas"]["SnowflakeType"];
            permission_overwrites?: components["schemas"]["ChannelPermissionOverwriteRequest"][] | null;
            rtc_region?: string | null;
            video_quality_mode?: null | components["schemas"]["VideoQualityModes"];
            default_auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            default_reaction_emoji?: null | components["schemas"]["UpdateDefaultReactionEmojiRequest"];
            default_thread_rate_limit_per_user?: number | null;
            default_sort_order?: null | components["schemas"]["ThreadSortOrder"];
            default_forum_layout?: null | components["schemas"]["ForumLayout"];
            default_tag_setting?: null | components["schemas"]["ThreadSearchTagSetting"];
            available_tags?: (null | components["schemas"]["CreateOrUpdateThreadTagRequest"])[] | null;
        };
        CreateGuildInviteRequest: {
            max_age?: number | null;
            temporary?: boolean | null;
            max_uses?: number | null;
            unique?: boolean | null;
            target_user_id?: null | components["schemas"]["SnowflakeType"];
            target_application_id?: null | components["schemas"]["SnowflakeType"];
            target_type?: null | (1 | 2);
        };
        CreateGuildRequestChannelItem: {
            type?: null | (0 | 2 | 4);
            name: string;
            /** Format: int32 */
            position?: number | null;
            topic?: string | null;
            /** Format: int32 */
            bitrate?: number | null;
            /** Format: int32 */
            user_limit?: number | null;
            nsfw?: boolean | null;
            rate_limit_per_user?: number | null;
            parent_id?: null | components["schemas"]["SnowflakeType"];
            permission_overwrites?: components["schemas"]["ChannelPermissionOverwriteRequest"][] | null;
            rtc_region?: string | null;
            video_quality_mode?: null | components["schemas"]["VideoQualityModes"];
            default_auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            default_reaction_emoji?: null | components["schemas"]["UpdateDefaultReactionEmojiRequest"];
            default_thread_rate_limit_per_user?: number | null;
            default_sort_order?: null | components["schemas"]["ThreadSortOrder"];
            default_forum_layout?: null | components["schemas"]["ForumLayout"];
            default_tag_setting?: null | components["schemas"]["ThreadSearchTagSetting"];
            id?: null | components["schemas"]["SnowflakeType"];
            available_tags?: components["schemas"]["CreateOrUpdateThreadTagRequest"][] | null;
        };
        CreateGuildRequestRoleItem: {
            id: number;
            name?: string | null;
            permissions?: number | null;
            color?: number | null;
            hoist?: boolean | null;
            mentionable?: boolean | null;
            unicode_emoji?: string | null;
        };
        CreateMessageInteractionCallbackRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4 | 5;
            data?: null | components["schemas"]["IncomingWebhookInteractionRequest"];
        };
        CreateMessageInteractionCallbackResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
            message: components["schemas"]["MessageResponse"];
        };
        CreateOrUpdateThreadTagRequest: {
            name: string;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
            moderated?: boolean | null;
        };
        CreatePrivateChannelRequest: {
            recipient_id?: null | components["schemas"]["SnowflakeType"];
            access_tokens?: string[] | null;
            nicks?: {
                [key: string]: string | null;
            } | null;
        };
        CreateTextThreadWithMessageRequest: {
            name: string;
            auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            rate_limit_per_user?: number | null;
        };
        CreateTextThreadWithoutMessageRequest: {
            name: string;
            auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            rate_limit_per_user?: number | null;
            type?: null | (10 | 11 | 12);
            invitable?: boolean | null;
        };
        CreatedThreadResponse: {
            id: components["schemas"]["SnowflakeType"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10 | 11 | 12;
            last_message_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            flags: number;
            /** Format: date-time */
            last_pin_timestamp?: string | null;
            guild_id: components["schemas"]["SnowflakeType"];
            name: string;
            parent_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            rate_limit_per_user?: number | null;
            /** Format: int32 */
            bitrate?: number | null;
            /** Format: int32 */
            user_limit?: number | null;
            rtc_region?: string | null;
            video_quality_mode?: null | components["schemas"]["VideoQualityModes"];
            permissions?: string | null;
            owner_id: components["schemas"]["SnowflakeType"];
            thread_metadata?: null | components["schemas"]["ThreadMetadataResponse"];
            /** Format: int32 */
            message_count: number;
            /** Format: int32 */
            member_count: number;
            /** Format: int32 */
            total_message_sent: number;
            applied_tags?: components["schemas"]["SnowflakeType"][] | null;
            member?: null | components["schemas"]["ThreadMemberResponse"];
        };
        DefaultKeywordListTriggerMetadata: {
            allow_list?: string[] | null;
            presets?: components["schemas"]["AutomodKeywordPresetType"][] | null;
        };
        DefaultKeywordListTriggerMetadataResponse: {
            allow_list: string[];
            presets: components["schemas"]["AutomodKeywordPresetType"][];
        };
        DefaultKeywordListUpsertRequest: {
            name: string;
            event_type: components["schemas"]["AutomodEventType"];
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 4;
            trigger_metadata: components["schemas"]["DefaultKeywordListTriggerMetadata"];
        };
        DefaultKeywordListUpsertRequestPartial: {
            name?: string;
            event_type?: components["schemas"]["AutomodEventType"];
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type?: 4;
            trigger_metadata?: components["schemas"]["DefaultKeywordListTriggerMetadata"];
        };
        DefaultKeywordRuleResponse: {
            id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            creator_id: components["schemas"]["SnowflakeType"];
            name: string;
            event_type: components["schemas"]["AutomodEventType"];
            actions: (components["schemas"]["BlockMessageActionResponse"] | components["schemas"]["FlagToChannelActionResponse"] | components["schemas"]["QuarantineUserActionResponse"] | components["schemas"]["UserCommunicationDisabledActionResponse"])[];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 4;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            trigger_metadata: components["schemas"]["DefaultKeywordListTriggerMetadataResponse"];
        };
        DefaultReactionEmojiResponse: {
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
        };
        DiscordIntegrationResponse: {
            /** @enum {string} */
            type: "discord";
            name?: string | null;
            account?: null | components["schemas"]["AccountResponse"];
            enabled?: boolean | null;
            id: components["schemas"]["SnowflakeType"];
            application: components["schemas"]["IntegrationApplicationResponse"];
            scopes: ("applications.commands" | "bot" | "webhook.incoming")[];
            user?: null | components["schemas"]["UserResponse"];
        };
        EmbeddedActivityInstance: {
            application_id: components["schemas"]["SnowflakeType"];
            instance_id: string;
            launch_id: string;
            location?: components["schemas"]["GuildChannelLocation"] | components["schemas"]["PrivateChannelLocation"] | null;
            users: components["schemas"]["SnowflakeType"][];
        };
        EmbeddedActivityLocationKind: string & ("gc" | "pc");
        EmojiResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            user?: null | components["schemas"]["UserResponse"];
            roles: components["schemas"]["SnowflakeType"][];
            require_colons: boolean;
            managed: boolean;
            animated: boolean;
            available: boolean;
        };
        /** Format: int32 */
        EntitlementOwnerTypes: number;
        EntitlementResponse: {
            id: components["schemas"]["SnowflakeType"];
            sku_id: components["schemas"]["SnowflakeType"];
            application_id: components["schemas"]["SnowflakeType"];
            user_id: components["schemas"]["SnowflakeType"];
            guild_id?: null | components["schemas"]["SnowflakeType"];
            deleted: boolean;
            /** Format: date-time */
            starts_at?: string | null;
            /** Format: date-time */
            ends_at?: string | null;
            type: components["schemas"]["EntitlementTypes"];
            /** Format: date-time */
            fulfilled_at?: string | null;
            fulfillment_status?: null | components["schemas"]["EntitlementTenantFulfillmentStatusResponse"];
            consumed?: boolean | null;
        };
        /** Format: int32 */
        EntitlementTenantFulfillmentStatusResponse: number & (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7);
        /** Format: int32 */
        EntitlementTypes: number & (8 | 10);
        EntityMetadataExternal: {
            location: string;
        };
        EntityMetadataExternalResponse: {
            location: string;
        };
        EntityMetadataStageInstance: Record<string, never>;
        EntityMetadataStageInstanceResponse: Record<string, never>;
        EntityMetadataVoice: Record<string, never>;
        EntityMetadataVoiceResponse: Record<string, never>;
        ExternalConnectionIntegrationResponse: {
            /** @enum {string} */
            type: "twitch" | "youtube";
            name?: string | null;
            account?: null | components["schemas"]["AccountResponse"];
            enabled?: boolean | null;
            id: string;
            user: components["schemas"]["UserResponse"];
            revoked?: boolean | null;
            expire_behavior?: null | components["schemas"]["IntegrationExpireBehaviorTypes"];
            expire_grace_period?: null | components["schemas"]["IntegrationExpireGracePeriodTypes"];
            /** Format: int32 */
            subscriber_count?: number | null;
            /** Format: date-time */
            synced_at?: string | null;
            role_id?: null | components["schemas"]["SnowflakeType"];
            syncing?: boolean | null;
            enable_emoticons?: boolean | null;
        };
        ExternalScheduledEventCreateRequest: {
            name: string;
            description?: string | null;
            image?: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
            /** Format: date-time */
            scheduled_end_time?: string | null;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 3;
            channel_id?: null | components["schemas"]["SnowflakeType"];
            entity_metadata: components["schemas"]["EntityMetadataExternal"];
        };
        ExternalScheduledEventPatchRequestPartial: {
            status?: null | components["schemas"]["GuildScheduledEventStatuses"];
            name?: string;
            description?: string | null;
            image?: string | null;
            /** Format: date-time */
            scheduled_start_time?: string;
            /** Format: date-time */
            scheduled_end_time?: string | null;
            entity_type?: null | 3;
            privacy_level?: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            channel_id?: null | components["schemas"]["SnowflakeType"];
            entity_metadata?: components["schemas"]["EntityMetadataExternal"];
        };
        ExternalScheduledEventResponse: {
            id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            name: string;
            description?: string | null;
            channel_id?: null | components["schemas"]["SnowflakeType"];
            creator_id?: null | components["schemas"]["SnowflakeType"];
            creator?: null | components["schemas"]["UserResponse"];
            image?: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
            /** Format: date-time */
            scheduled_end_time?: string | null;
            status: components["schemas"]["GuildScheduledEventStatuses"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 3;
            entity_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            user_count?: number | null;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            user_rsvp?: null | components["schemas"]["ScheduledEventUserResponse"];
            entity_metadata: components["schemas"]["EntityMetadataExternalResponse"];
        };
        FileComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 13;
            spoiler?: boolean | null;
            file: components["schemas"]["UnfurledMediaRequestWithAttachmentReferenceRequired"];
        };
        FileComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 13;
            /** Format: int32 */
            id: number;
            file: components["schemas"]["UnfurledMediaResponse"];
            name?: string | null;
            /** Format: int32 */
            size?: number | null;
            spoiler: boolean;
        };
        FlagToChannelAction: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            metadata: components["schemas"]["FlagToChannelActionMetadata"];
        };
        FlagToChannelActionMetadata: {
            channel_id: components["schemas"]["SnowflakeType"];
        };
        FlagToChannelActionMetadataResponse: {
            channel_id: components["schemas"]["SnowflakeType"];
        };
        FlagToChannelActionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            metadata: components["schemas"]["FlagToChannelActionMetadataResponse"];
        };
        /** Format: int32 */
        ForumLayout: number & (0 | 1 | 2);
        ForumTagResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            moderated: boolean;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
        };
        FriendInviteResponse: {
            type?: null | 2;
            code: string;
            inviter?: null | components["schemas"]["UserResponse"];
            /** Format: int32 */
            max_age?: number | null;
            /** Format: date-time */
            created_at?: string | null;
            /** Format: date-time */
            expires_at?: string | null;
            /** Format: int32 */
            friends_count?: number | null;
            channel?: null | components["schemas"]["InviteChannelResponse"];
            is_contact?: boolean | null;
            /** Format: int32 */
            uses?: number | null;
            /** Format: int32 */
            max_uses?: number | null;
            /** Format: int32 */
            flags?: number | null;
        };
        GatewayBotResponse: {
            /** Format: uri */
            url: string;
            session_start_limit: components["schemas"]["GatewayBotSessionStartLimitResponse"];
            /** Format: int32 */
            shards: number;
        };
        GatewayBotSessionStartLimitResponse: {
            /** Format: int32 */
            max_concurrency: number;
            /** Format: int32 */
            remaining: number;
            /** Format: int32 */
            reset_after: number;
            /** Format: int32 */
            total: number;
        };
        GatewayResponse: {
            /** Format: uri */
            url: string;
        };
        GithubAuthor: {
            username?: string | null;
            name: string;
        };
        GithubCheckApp: {
            name: string;
        };
        GithubCheckPullRequest: {
            number: number;
        };
        GithubCheckRun: {
            conclusion?: string | null;
            name: string;
            /** Format: uri */
            html_url: string;
            check_suite: components["schemas"]["GithubCheckSuite"];
            /** Format: uri */
            details_url?: string | null;
            output?: null | components["schemas"]["GithubCheckRunOutput"];
            pull_requests?: components["schemas"]["GithubCheckPullRequest"][] | null;
        };
        GithubCheckRunOutput: {
            title?: string | null;
            summary?: string | null;
        };
        GithubCheckSuite: {
            conclusion?: string | null;
            head_branch?: string | null;
            head_sha: string;
            pull_requests?: components["schemas"]["GithubCheckPullRequest"][] | null;
            app: components["schemas"]["GithubCheckApp"];
        };
        GithubComment: {
            id: number;
            /** Format: uri */
            html_url: string;
            user: components["schemas"]["GithubUser"];
            commit_id?: string | null;
            body: string;
        };
        GithubCommit: {
            id: string;
            /** Format: uri */
            url: string;
            message: string;
            author: components["schemas"]["GithubAuthor"];
        };
        GithubDiscussion: {
            title: string;
            number: number;
            /** Format: uri */
            html_url: string;
            /** Format: uri */
            answer_html_url?: string | null;
            body?: string | null;
            user: components["schemas"]["GithubUser"];
        };
        GithubIssue: {
            id: number;
            number: number;
            /** Format: uri */
            html_url: string;
            user: components["schemas"]["GithubUser"];
            title: string;
            body?: string | null;
            pull_request?: unknown;
        };
        GithubRelease: {
            id: number;
            tag_name: string;
            /** Format: uri */
            html_url: string;
            author: components["schemas"]["GithubUser"];
        };
        GithubRepository: {
            id: number;
            /** Format: uri */
            html_url: string;
            name: string;
            full_name: string;
        };
        GithubReview: {
            user: components["schemas"]["GithubUser"];
            body?: string | null;
            /** Format: uri */
            html_url: string;
            state: string;
        };
        GithubUser: {
            id: number;
            login: string;
            /** Format: uri */
            html_url: string;
            /** Format: uri */
            avatar_url: string;
        };
        GithubWebhook: {
            action?: string | null;
            ref?: string | null;
            ref_type?: string | null;
            comment?: null | components["schemas"]["GithubComment"];
            issue?: null | components["schemas"]["GithubIssue"];
            pull_request?: null | components["schemas"]["GithubIssue"];
            repository?: null | components["schemas"]["GithubRepository"];
            forkee?: null | components["schemas"]["GithubRepository"];
            sender: components["schemas"]["GithubUser"];
            member?: null | components["schemas"]["GithubUser"];
            release?: null | components["schemas"]["GithubRelease"];
            head_commit?: null | components["schemas"]["GithubCommit"];
            commits?: components["schemas"]["GithubCommit"][] | null;
            forced?: boolean | null;
            /** Format: uri */
            compare?: string | null;
            review?: null | components["schemas"]["GithubReview"];
            check_run?: null | components["schemas"]["GithubCheckRun"];
            check_suite?: null | components["schemas"]["GithubCheckSuite"];
            discussion?: null | components["schemas"]["GithubDiscussion"];
            answer?: null | components["schemas"]["GithubComment"];
        };
        GroupDMInviteResponse: {
            type?: null | 1;
            code: string;
            inviter?: null | components["schemas"]["UserResponse"];
            /** Format: int32 */
            max_age?: number | null;
            /** Format: date-time */
            created_at?: string | null;
            /** Format: date-time */
            expires_at?: string | null;
            channel?: null | components["schemas"]["InviteChannelResponse"];
            /** Format: int32 */
            approximate_member_count?: number | null;
        };
        GuildAuditLogResponse: {
            audit_log_entries: components["schemas"]["AuditLogEntryResponse"][];
            users: components["schemas"]["UserResponse"][];
            integrations: (components["schemas"]["PartialDiscordIntegrationResponse"] | components["schemas"]["PartialExternalConnectionIntegrationResponse"] | components["schemas"]["PartialGuildSubscriptionIntegrationResponse"])[];
            webhooks: (components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"])[];
            guild_scheduled_events: (components["schemas"]["ExternalScheduledEventResponse"] | components["schemas"]["StageScheduledEventResponse"] | components["schemas"]["VoiceScheduledEventResponse"])[];
            threads: components["schemas"]["ThreadResponse"][];
            application_commands: components["schemas"]["ApplicationCommandResponse"][];
            auto_moderation_rules: (components["schemas"]["DefaultKeywordRuleResponse"] | components["schemas"]["KeywordRuleResponse"] | components["schemas"]["MLSpamRuleResponse"] | components["schemas"]["MentionSpamRuleResponse"] | components["schemas"]["SpamLinkRuleResponse"] | null)[];
        };
        GuildBanResponse: {
            user: components["schemas"]["UserResponse"];
            reason?: string | null;
        };
        GuildChannelLocation: {
            id: string;
            /** @enum {string} */
            kind: "gc";
            channel_id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
        };
        GuildChannelResponse: {
            id: components["schemas"]["SnowflakeType"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 0 | 2 | 4 | 5 | 13 | 14 | 15;
            last_message_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            flags: number;
            /** Format: date-time */
            last_pin_timestamp?: string | null;
            guild_id: components["schemas"]["SnowflakeType"];
            name: string;
            parent_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            rate_limit_per_user?: number | null;
            /** Format: int32 */
            bitrate?: number | null;
            /** Format: int32 */
            user_limit?: number | null;
            rtc_region?: string | null;
            video_quality_mode?: null | components["schemas"]["VideoQualityModes"];
            permissions?: string | null;
            topic?: string | null;
            default_auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            /** Format: int32 */
            default_thread_rate_limit_per_user?: number | null;
            /** Format: int32 */
            position: number;
            permission_overwrites?: components["schemas"]["ChannelPermissionOverwriteResponse"][] | null;
            nsfw?: boolean | null;
            available_tags?: components["schemas"]["ForumTagResponse"][] | null;
            default_reaction_emoji?: null | components["schemas"]["DefaultReactionEmojiResponse"];
            default_sort_order?: null | components["schemas"]["ThreadSortOrder"];
            default_forum_layout?: null | components["schemas"]["ForumLayout"];
            default_tag_setting?: null | components["schemas"]["ThreadSearchTagSetting"];
            /** Format: date-time */
            hd_streaming_until?: string | null;
            hd_streaming_buyer_id?: null | components["schemas"]["SnowflakeType"];
        };
        GuildCreateRequest: {
            description?: string | null;
            name: string;
            region?: string | null;
            icon?: string | null;
            verification_level?: null | components["schemas"]["VerificationLevels"];
            default_message_notifications?: null | components["schemas"]["UserNotificationSettings"];
            explicit_content_filter?: null | components["schemas"]["GuildExplicitContentFilterTypes"];
            preferred_locale?: null | components["schemas"]["AvailableLocalesEnum"];
            afk_timeout?: null | components["schemas"]["AfkTimeouts"];
            roles?: components["schemas"]["CreateGuildRequestRoleItem"][] | null;
            channels?: components["schemas"]["CreateGuildRequestChannelItem"][] | null;
            afk_channel_id?: null | components["schemas"]["SnowflakeType"];
            system_channel_id?: null | components["schemas"]["SnowflakeType"];
            system_channel_flags?: number | null;
        };
        /** Format: int32 */
        GuildExplicitContentFilterTypes: number & (0 | 1 | 2);
        GuildFeatures: string & ("ANIMATED_BANNER" | "ANIMATED_ICON" | "APPLICATION_COMMAND_PERMISSIONS_V2" | "AUTO_MODERATION" | "BANNER" | "COMMUNITY" | "CREATOR_MONETIZABLE_PROVISIONAL" | "CREATOR_STORE_PAGE" | "DEVELOPER_SUPPORT_SERVER" | "DISCOVERABLE" | "FEATURABLE" | "INVITES_DISABLED" | "INVITE_SPLASH" | "MEMBER_VERIFICATION_GATE_ENABLED" | "MORE_STICKERS" | "NEWS" | "PARTNERED" | "PREVIEW_ENABLED" | "RAID_ALERTS_DISABLED" | "ROLE_ICONS" | "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE" | "ROLE_SUBSCRIPTIONS_ENABLED" | "TICKETED_EVENTS_ENABLED" | "VANITY_URL" | "VERIFIED" | "VIP_REGIONS" | "WELCOME_SCREEN_ENABLED");
        GuildHomeSettingsResponse: {
            guild_id: components["schemas"]["SnowflakeType"];
            enabled: boolean;
            welcome_message?: null | components["schemas"]["WelcomeMessageResponse"];
            new_member_actions?: (null | components["schemas"]["NewMemberActionResponse"])[] | null;
            resource_channels?: (null | components["schemas"]["ResourceChannelResponse"])[] | null;
        };
        GuildIncomingWebhookResponse: {
            application_id?: null | components["schemas"]["SnowflakeType"];
            avatar?: string | null;
            channel_id?: null | components["schemas"]["SnowflakeType"];
            guild_id?: null | components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
            user?: null | components["schemas"]["UserResponse"];
            token?: string | null;
            /** Format: uri */
            url?: string | null;
        };
        GuildInviteResponse: {
            type?: null | 0;
            code: string;
            inviter?: null | components["schemas"]["UserResponse"];
            /** Format: int32 */
            max_age?: number | null;
            /** Format: date-time */
            created_at?: string | null;
            /** Format: date-time */
            expires_at?: string | null;
            is_contact?: boolean | null;
            /** Format: int32 */
            flags?: number | null;
            guild?: null | components["schemas"]["InviteGuildResponse"];
            guild_id?: null | components["schemas"]["SnowflakeType"];
            channel?: null | components["schemas"]["InviteChannelResponse"];
            target_type?: null | components["schemas"]["InviteTargetTypes"];
            target_user?: null | components["schemas"]["UserResponse"];
            target_application?: null | components["schemas"]["InviteApplicationResponse"];
            guild_scheduled_event?: null | components["schemas"]["ScheduledEventResponse"];
            /** Format: int32 */
            uses?: number | null;
            /** Format: int32 */
            max_uses?: number | null;
            temporary?: boolean | null;
            /** Format: int32 */
            approximate_member_count?: number | null;
            /** Format: int32 */
            approximate_presence_count?: number | null;
            is_nickname_changeable?: boolean | null;
        };
        /** Format: int32 */
        GuildMFALevel: number & (0 | 1);
        GuildMFALevelResponse: {
            level: components["schemas"]["GuildMFALevel"];
        };
        GuildMemberResponse: {
            avatar?: string | null;
            avatar_decoration_data?: null | components["schemas"]["UserAvatarDecorationResponse"];
            banner?: string | null;
            /** Format: date-time */
            communication_disabled_until?: string | null;
            /** Format: int32 */
            flags: number;
            /** Format: date-time */
            joined_at: string;
            nick?: string | null;
            pending: boolean;
            /** Format: date-time */
            premium_since?: string | null;
            roles: components["schemas"]["SnowflakeType"][];
            user: components["schemas"]["UserResponse"];
            mute: boolean;
            deaf: boolean;
        };
        /** Format: int32 */
        GuildNSFWContentLevel: number & (0 | 1 | 2 | 3);
        /** Format: int32 */
        GuildOnboardingMode: number & (0 | 1);
        GuildOnboardingResponse: {
            guild_id: components["schemas"]["SnowflakeType"];
            prompts: components["schemas"]["OnboardingPromptResponse"][];
            default_channel_ids: components["schemas"]["SnowflakeType"][];
            enabled: boolean;
        };
        GuildPatchRequestPartial: {
            name?: string;
            description?: string | null;
            region?: string | null;
            icon?: string | null;
            verification_level?: null | components["schemas"]["VerificationLevels"];
            default_message_notifications?: null | components["schemas"]["UserNotificationSettings"];
            explicit_content_filter?: null | components["schemas"]["GuildExplicitContentFilterTypes"];
            preferred_locale?: null | components["schemas"]["AvailableLocalesEnum"];
            afk_timeout?: null | components["schemas"]["AfkTimeouts"];
            afk_channel_id?: null | components["schemas"]["SnowflakeType"];
            system_channel_id?: null | components["schemas"]["SnowflakeType"];
            owner_id?: components["schemas"]["SnowflakeType"];
            splash?: string | null;
            banner?: string | null;
            system_channel_flags?: number | null;
            features?: (string | null)[] | null;
            discovery_splash?: string | null;
            home_header?: string | null;
            rules_channel_id?: null | components["schemas"]["SnowflakeType"];
            safety_alerts_channel_id?: null | components["schemas"]["SnowflakeType"];
            public_updates_channel_id?: null | components["schemas"]["SnowflakeType"];
            premium_progress_bar_enabled?: boolean | null;
        };
        GuildPreviewResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            icon?: string | null;
            description?: string | null;
            home_header?: string | null;
            splash?: string | null;
            discovery_splash?: string | null;
            features: components["schemas"]["GuildFeatures"][];
            /** Format: int32 */
            approximate_member_count: number;
            /** Format: int32 */
            approximate_presence_count: number;
            emojis: components["schemas"]["EmojiResponse"][];
            stickers: components["schemas"]["GuildStickerResponse"][];
        };
        GuildProductPurchaseResponse: {
            listing_id: components["schemas"]["SnowflakeType"];
            product_name: string;
        };
        GuildPruneResponse: {
            /** Format: int32 */
            pruned?: number | null;
        };
        GuildResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            icon?: string | null;
            description?: string | null;
            home_header?: string | null;
            splash?: string | null;
            discovery_splash?: string | null;
            features: components["schemas"]["GuildFeatures"][];
            banner?: string | null;
            owner_id: components["schemas"]["SnowflakeType"];
            application_id?: null | components["schemas"]["SnowflakeType"];
            region: string;
            afk_channel_id?: null | components["schemas"]["SnowflakeType"];
            afk_timeout: components["schemas"]["AfkTimeouts"];
            system_channel_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            system_channel_flags: number;
            widget_enabled: boolean;
            widget_channel_id?: null | components["schemas"]["SnowflakeType"];
            verification_level: components["schemas"]["VerificationLevels"];
            roles: components["schemas"]["GuildRoleResponse"][];
            default_message_notifications: components["schemas"]["UserNotificationSettings"];
            mfa_level: components["schemas"]["GuildMFALevel"];
            explicit_content_filter: components["schemas"]["GuildExplicitContentFilterTypes"];
            /** Format: int32 */
            max_presences?: number | null;
            /** Format: int32 */
            max_members?: number | null;
            /** Format: int32 */
            max_stage_video_channel_users?: number | null;
            /** Format: int32 */
            max_video_channel_users?: number | null;
            vanity_url_code?: string | null;
            premium_tier: components["schemas"]["PremiumGuildTiers"];
            /** Format: int32 */
            premium_subscription_count: number;
            preferred_locale: components["schemas"]["AvailableLocalesEnum"];
            rules_channel_id?: null | components["schemas"]["SnowflakeType"];
            safety_alerts_channel_id?: null | components["schemas"]["SnowflakeType"];
            public_updates_channel_id?: null | components["schemas"]["SnowflakeType"];
            premium_progress_bar_enabled: boolean;
            nsfw: boolean;
            nsfw_level: components["schemas"]["GuildNSFWContentLevel"];
            emojis: components["schemas"]["EmojiResponse"][];
            stickers: components["schemas"]["GuildStickerResponse"][];
        };
        GuildRoleColorsResponse: {
            /** Format: int32 */
            primary_color?: number | null;
            /** Format: int32 */
            secondary_color?: number | null;
            /** Format: int32 */
            tertiary_color?: number | null;
        };
        GuildRoleResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            description?: string | null;
            permissions: string;
            /** Format: int32 */
            position: number;
            /** Format: int32 */
            color: number;
            colors?: null | components["schemas"]["GuildRoleColorsResponse"];
            hoist: boolean;
            managed: boolean;
            mentionable: boolean;
            icon?: string | null;
            unicode_emoji?: string | null;
            tags?: null | components["schemas"]["GuildRoleTagsResponse"];
            /** Format: int32 */
            flags: number;
        };
        GuildRoleTagsResponse: {
            premium_subscriber?: null;
            bot_id?: null | components["schemas"]["SnowflakeType"];
            integration_id?: null | components["schemas"]["SnowflakeType"];
            subscription_listing_id?: null | components["schemas"]["SnowflakeType"];
            available_for_purchase?: null;
            guild_connections?: null;
        };
        /** Format: int32 */
        GuildScheduledEventEntityTypes: number & (0 | 1 | 2 | 3);
        /** Format: int32 */
        GuildScheduledEventPrivacyLevels: number & 2;
        /** Format: int32 */
        GuildScheduledEventStatuses: number & (1 | 2 | 3 | 4);
        GuildStickerResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            tags: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            format_type?: null | components["schemas"]["StickerFormatTypes"];
            description?: string | null;
            available: boolean;
            guild_id: components["schemas"]["SnowflakeType"];
            user?: null | components["schemas"]["UserResponse"];
        };
        GuildSubscriptionIntegrationResponse: {
            /** @enum {string} */
            type: "guild_subscription";
            name?: string | null;
            account?: null | components["schemas"]["AccountResponse"];
            enabled?: boolean | null;
            id: components["schemas"]["SnowflakeType"];
        };
        GuildTemplateChannelResponse: {
            /** Format: int32 */
            id?: number | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 0 | 2 | 4;
            name?: string | null;
            /** Format: int32 */
            position?: number | null;
            topic?: string | null;
            /** Format: int32 */
            bitrate: number;
            /** Format: int32 */
            user_limit: number;
            nsfw: boolean;
            /** Format: int32 */
            rate_limit_per_user: number;
            parent_id?: null | components["schemas"]["SnowflakeType"];
            default_auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            permission_overwrites: (null | components["schemas"]["ChannelPermissionOverwriteResponse"])[];
            available_tags?: components["schemas"]["GuildTemplateChannelTags"][] | null;
            template: string;
            default_reaction_emoji?: null | components["schemas"]["DefaultReactionEmojiResponse"];
            /** Format: int32 */
            default_thread_rate_limit_per_user?: number | null;
            default_sort_order?: null | components["schemas"]["ThreadSortOrder"];
            default_forum_layout?: null | components["schemas"]["ForumLayout"];
            default_tag_setting?: null | components["schemas"]["ThreadSearchTagSetting"];
            icon_emoji?: null | components["schemas"]["IconEmojiResponse"];
            /** Format: int32 */
            theme_color?: number | null;
        };
        GuildTemplateChannelTags: {
            name: string;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
            moderated?: boolean | null;
        };
        GuildTemplateResponse: {
            code: string;
            name: string;
            description?: string | null;
            /** Format: int32 */
            usage_count: number;
            creator_id: components["schemas"]["SnowflakeType"];
            creator?: null | components["schemas"]["UserResponse"];
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            source_guild_id: components["schemas"]["SnowflakeType"];
            serialized_source_guild: components["schemas"]["GuildTemplateSnapshotResponse"];
            is_dirty?: boolean | null;
        };
        GuildTemplateRoleResponse: {
            /** Format: int32 */
            id: number;
            name: string;
            permissions: string;
            /** Format: int32 */
            color: number;
            hoist: boolean;
            mentionable: boolean;
            icon?: string | null;
            unicode_emoji?: string | null;
        };
        GuildTemplateSnapshotResponse: {
            name: string;
            description?: string | null;
            region?: string | null;
            verification_level: components["schemas"]["VerificationLevels"];
            default_message_notifications: components["schemas"]["UserNotificationSettings"];
            explicit_content_filter: components["schemas"]["GuildExplicitContentFilterTypes"];
            preferred_locale: components["schemas"]["AvailableLocalesEnum"];
            afk_channel_id?: null | components["schemas"]["SnowflakeType"];
            afk_timeout: components["schemas"]["AfkTimeouts"];
            system_channel_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            system_channel_flags: number;
            roles: components["schemas"]["GuildTemplateRoleResponse"][];
            channels: components["schemas"]["GuildTemplateChannelResponse"][];
        };
        GuildWelcomeChannel: {
            channel_id: components["schemas"]["SnowflakeType"];
            description: string;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
        };
        GuildWelcomeScreenChannelResponse: {
            channel_id: components["schemas"]["SnowflakeType"];
            description: string;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
        };
        GuildWelcomeScreenResponse: {
            description?: string | null;
            welcome_channels: components["schemas"]["GuildWelcomeScreenChannelResponse"][];
        };
        GuildWithCountsResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            icon?: string | null;
            description?: string | null;
            home_header?: string | null;
            splash?: string | null;
            discovery_splash?: string | null;
            features: components["schemas"]["GuildFeatures"][];
            banner?: string | null;
            owner_id: components["schemas"]["SnowflakeType"];
            application_id?: null | components["schemas"]["SnowflakeType"];
            region: string;
            afk_channel_id?: null | components["schemas"]["SnowflakeType"];
            afk_timeout: components["schemas"]["AfkTimeouts"];
            system_channel_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            system_channel_flags: number;
            widget_enabled: boolean;
            widget_channel_id?: null | components["schemas"]["SnowflakeType"];
            verification_level: components["schemas"]["VerificationLevels"];
            roles: components["schemas"]["GuildRoleResponse"][];
            default_message_notifications: components["schemas"]["UserNotificationSettings"];
            mfa_level: components["schemas"]["GuildMFALevel"];
            explicit_content_filter: components["schemas"]["GuildExplicitContentFilterTypes"];
            /** Format: int32 */
            max_presences?: number | null;
            /** Format: int32 */
            max_members?: number | null;
            /** Format: int32 */
            max_stage_video_channel_users?: number | null;
            /** Format: int32 */
            max_video_channel_users?: number | null;
            vanity_url_code?: string | null;
            premium_tier: components["schemas"]["PremiumGuildTiers"];
            /** Format: int32 */
            premium_subscription_count: number;
            preferred_locale: components["schemas"]["AvailableLocalesEnum"];
            rules_channel_id?: null | components["schemas"]["SnowflakeType"];
            safety_alerts_channel_id?: null | components["schemas"]["SnowflakeType"];
            public_updates_channel_id?: null | components["schemas"]["SnowflakeType"];
            premium_progress_bar_enabled: boolean;
            nsfw: boolean;
            nsfw_level: components["schemas"]["GuildNSFWContentLevel"];
            emojis: components["schemas"]["EmojiResponse"][];
            stickers: components["schemas"]["GuildStickerResponse"][];
            /** Format: int32 */
            approximate_member_count?: number | null;
            /** Format: int32 */
            approximate_presence_count?: number | null;
        };
        IconEmojiResponse: Record<string, never>;
        IncomingWebhookInteractionRequest: {
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
            tts?: boolean | null;
            flags?: number | null;
        };
        IncomingWebhookRequestPartial: {
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
            tts?: boolean | null;
            flags?: number | null;
            username?: string | null;
            /** Format: uri */
            avatar_url?: string | null;
            thread_name?: string | null;
            applied_tags?: components["schemas"]["SnowflakeType"][] | null;
        };
        IncomingWebhookUpdateForInteractionCallbackRequestPartial: {
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            flags?: number | null;
        };
        IncomingWebhookUpdateRequestPartial: {
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
            flags?: number | null;
        };
        /** Format: int64 */
        Int53Type: number;
        IntegrationApplicationResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            icon?: string | null;
            description: string;
            type?: null | components["schemas"]["ApplicationTypes"];
            cover_image?: string | null;
            primary_sku_id?: null | components["schemas"]["SnowflakeType"];
            bot?: null | components["schemas"]["UserResponse"];
        };
        /** Format: int32 */
        IntegrationExpireBehaviorTypes: number & (0 | 1);
        /** Format: int32 */
        IntegrationExpireGracePeriodTypes: number & (1 | 3 | 7 | 14 | 30);
        IntegrationTypes: string & ("discord" | "twitch" | "youtube" | "guild_subscription");
        InteractionApplicationCommandAutocompleteCallbackIntegerData: {
            choices?: (null | components["schemas"]["ApplicationCommandOptionIntegerChoice"])[] | null;
        };
        InteractionApplicationCommandAutocompleteCallbackNumberData: {
            choices?: (null | components["schemas"]["ApplicationCommandOptionNumberChoice"])[] | null;
        };
        InteractionApplicationCommandAutocompleteCallbackStringData: {
            choices?: (null | components["schemas"]["ApplicationCommandOptionStringChoice"])[] | null;
        };
        InteractionCallbackResponse: {
            interaction: components["schemas"]["InteractionResponse"];
            resource?: components["schemas"]["CreateMessageInteractionCallbackResponse"] | components["schemas"]["LaunchActivityInteractionCallbackResponse"] | components["schemas"]["UpdateMessageInteractionCallbackResponse"] | null;
        };
        /** Format: int32 */
        InteractionCallbackTypes: number & (1 | 4 | 5 | 6 | 7 | 8 | 9 | 12);
        /** Format: int32 */
        InteractionContextType: number & (0 | 1 | 2);
        InteractionResponse: {
            id: components["schemas"]["SnowflakeType"];
            type: components["schemas"]["InteractionTypes"];
            response_message_id?: null | components["schemas"]["SnowflakeType"];
            response_message_loading?: boolean | null;
            response_message_ephemeral?: boolean | null;
            channel_id?: null | components["schemas"]["SnowflakeType"];
            guild_id?: null | components["schemas"]["SnowflakeType"];
        };
        /** Format: int32 */
        InteractionTypes: number & (1 | 2 | 3 | 4 | 5);
        InviteApplicationResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            icon?: string | null;
            description: string;
            type?: null | components["schemas"]["ApplicationTypes"];
            cover_image?: string | null;
            primary_sku_id?: null | components["schemas"]["SnowflakeType"];
            bot?: null | components["schemas"]["UserResponse"];
            slug?: string | null;
            guild_id?: null | components["schemas"]["SnowflakeType"];
            rpc_origins?: (string | null)[] | null;
            bot_public?: boolean | null;
            bot_require_code_grant?: boolean | null;
            /** Format: uri */
            terms_of_service_url?: string | null;
            /** Format: uri */
            privacy_policy_url?: string | null;
            /** Format: uri */
            custom_install_url?: string | null;
            install_params?: null | components["schemas"]["ApplicationOAuth2InstallParamsResponse"];
            integration_types_config?: {
                [key: string]: components["schemas"]["ApplicationIntegrationTypeConfigurationResponse"];
            } | null;
            verify_key: string;
            /** Format: int32 */
            flags: number;
            /** Format: int32 */
            max_participants?: number | null;
            tags?: string[] | null;
        };
        InviteChannelRecipientResponse: {
            username: string;
        };
        InviteChannelResponse: {
            id: components["schemas"]["SnowflakeType"];
            type: components["schemas"]["ChannelTypes"];
            name?: string | null;
            icon?: string | null;
            recipients?: components["schemas"]["InviteChannelRecipientResponse"][] | null;
        };
        InviteGuildResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            splash?: string | null;
            banner?: string | null;
            description?: string | null;
            icon?: string | null;
            features: components["schemas"]["GuildFeatures"][];
            verification_level?: null | components["schemas"]["VerificationLevels"];
            vanity_url_code?: string | null;
            nsfw_level?: null | components["schemas"]["GuildNSFWContentLevel"];
            nsfw?: boolean | null;
            /** Format: int32 */
            premium_subscription_count?: number | null;
        };
        /** Format: int32 */
        InviteTargetTypes: number & (1 | 2 | 3);
        /** Format: int32 */
        InviteTypes: number & (0 | 1 | 2);
        KeywordRuleResponse: {
            id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            creator_id: components["schemas"]["SnowflakeType"];
            name: string;
            event_type: components["schemas"]["AutomodEventType"];
            actions: (components["schemas"]["BlockMessageActionResponse"] | components["schemas"]["FlagToChannelActionResponse"] | components["schemas"]["QuarantineUserActionResponse"] | components["schemas"]["UserCommunicationDisabledActionResponse"])[];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 1;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            trigger_metadata: components["schemas"]["KeywordTriggerMetadataResponse"];
        };
        KeywordTriggerMetadata: {
            keyword_filter?: string[] | null;
            regex_patterns?: string[] | null;
            allow_list?: string[] | null;
        };
        KeywordTriggerMetadataResponse: {
            keyword_filter: string[];
            regex_patterns: string[];
            allow_list: string[];
        };
        KeywordUpsertRequest: {
            name: string;
            event_type: components["schemas"]["AutomodEventType"];
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 1;
            trigger_metadata?: null | components["schemas"]["KeywordTriggerMetadata"];
        };
        KeywordUpsertRequestPartial: {
            name?: string;
            event_type?: components["schemas"]["AutomodEventType"];
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type?: 1;
            trigger_metadata?: null | components["schemas"]["KeywordTriggerMetadata"];
        };
        LaunchActivityInteractionCallbackRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 12;
        };
        LaunchActivityInteractionCallbackResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 12;
        };
        ListApplicationEmojisResponse: {
            items: components["schemas"]["EmojiResponse"][];
        };
        ListGuildSoundboardSoundsResponse: {
            items: components["schemas"]["SoundboardSoundResponse"][];
        };
        LobbyGuildInviteResponse: {
            code: string;
        };
        LobbyMemberRequest: {
            id: components["schemas"]["SnowflakeType"];
            metadata?: {
                [key: string]: string;
            } | null;
            flags?: null | 1;
        };
        LobbyMemberResponse: {
            id: components["schemas"]["SnowflakeType"];
            metadata?: {
                [key: string]: string;
            } | null;
            /** Format: int32 */
            flags: number;
        };
        LobbyMessageResponse: {
            id: components["schemas"]["SnowflakeType"];
            type: components["schemas"]["MessageType"];
            content: string;
            lobby_id: components["schemas"]["SnowflakeType"];
            channel_id: components["schemas"]["SnowflakeType"];
            author: components["schemas"]["UserResponse"];
            metadata?: {
                [key: string]: string;
            } | null;
            /** Format: int32 */
            flags: number;
            application_id?: null | components["schemas"]["SnowflakeType"];
        };
        LobbyResponse: {
            id: components["schemas"]["SnowflakeType"];
            application_id: components["schemas"]["SnowflakeType"];
            metadata?: {
                [key: string]: string;
            } | null;
            members?: components["schemas"]["LobbyMemberResponse"][] | null;
            linked_channel?: null | components["schemas"]["GuildChannelResponse"];
        };
        MLSpamRuleResponse: {
            id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            creator_id: components["schemas"]["SnowflakeType"];
            name: string;
            event_type: components["schemas"]["AutomodEventType"];
            actions: (components["schemas"]["BlockMessageActionResponse"] | components["schemas"]["FlagToChannelActionResponse"] | components["schemas"]["QuarantineUserActionResponse"] | components["schemas"]["UserCommunicationDisabledActionResponse"])[];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 3;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            trigger_metadata: components["schemas"]["MLSpamTriggerMetadataResponse"];
        };
        MLSpamTriggerMetadata: Record<string, never>;
        MLSpamTriggerMetadataResponse: Record<string, never>;
        MLSpamUpsertRequest: {
            name: string;
            event_type: components["schemas"]["AutomodEventType"];
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 3;
            trigger_metadata?: null | components["schemas"]["MLSpamTriggerMetadata"];
        };
        MLSpamUpsertRequestPartial: {
            name?: string;
            event_type?: components["schemas"]["AutomodEventType"];
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type?: 3;
            trigger_metadata?: null | components["schemas"]["MLSpamTriggerMetadata"];
        };
        MediaGalleryComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 12;
            items: components["schemas"]["MediaGalleryItemRequest"][];
        };
        MediaGalleryComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 12;
            /** Format: int32 */
            id: number;
            items: components["schemas"]["MediaGalleryItemResponse"][];
        };
        MediaGalleryItemRequest: {
            description?: string | null;
            spoiler?: boolean | null;
            media: components["schemas"]["UnfurledMediaRequest"];
        };
        MediaGalleryItemResponse: {
            media: components["schemas"]["UnfurledMediaResponse"];
            description?: string | null;
            spoiler: boolean;
        };
        MentionSpamRuleResponse: {
            id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            creator_id: components["schemas"]["SnowflakeType"];
            name: string;
            event_type: components["schemas"]["AutomodEventType"];
            actions: (components["schemas"]["BlockMessageActionResponse"] | components["schemas"]["FlagToChannelActionResponse"] | components["schemas"]["QuarantineUserActionResponse"] | components["schemas"]["UserCommunicationDisabledActionResponse"])[];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 5;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            trigger_metadata: components["schemas"]["MentionSpamTriggerMetadataResponse"];
        };
        MentionSpamTriggerMetadata: {
            mention_total_limit: number;
            mention_raid_protection_enabled?: boolean | null;
        };
        MentionSpamTriggerMetadataResponse: {
            /** Format: int32 */
            mention_total_limit: number;
            mention_raid_protection_enabled?: boolean | null;
        };
        MentionSpamUpsertRequest: {
            name: string;
            event_type: components["schemas"]["AutomodEventType"];
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 5;
            trigger_metadata?: null | components["schemas"]["MentionSpamTriggerMetadata"];
        };
        MentionSpamUpsertRequestPartial: {
            name?: string;
            event_type?: components["schemas"]["AutomodEventType"];
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type?: 5;
            trigger_metadata?: null | components["schemas"]["MentionSpamTriggerMetadata"];
        };
        MentionableSelectComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 7;
            custom_id: string;
            placeholder?: string | null;
            min_values?: number | null;
            max_values?: number | null;
            disabled?: boolean | null;
            default_values?: (components["schemas"]["RoleSelectDefaultValue"] | components["schemas"]["UserSelectDefaultValue"])[] | null;
        };
        MentionableSelectComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 7;
            /** Format: int32 */
            id: number;
            custom_id: string;
            placeholder?: string | null;
            /** Format: int32 */
            min_values?: number | null;
            /** Format: int32 */
            max_values?: number | null;
            disabled?: boolean | null;
            default_values?: (components["schemas"]["RoleSelectDefaultValueResponse"] | components["schemas"]["UserSelectDefaultValueResponse"])[] | null;
        };
        MessageActivityResponse: Record<string, never>;
        MessageAllowedMentionsRequest: {
            parse?: (null | components["schemas"]["AllowedMentionTypes"])[] | null;
            users?: (null | components["schemas"]["SnowflakeType"])[] | null;
            roles?: (null | components["schemas"]["SnowflakeType"])[] | null;
            replied_user?: boolean | null;
        };
        MessageAttachmentRequest: {
            id: components["schemas"]["SnowflakeType"];
            filename?: string | null;
            description?: string | null;
            /** Format: double */
            duration_secs?: number | null;
            waveform?: string | null;
            title?: string | null;
            is_remix?: boolean | null;
        };
        MessageAttachmentResponse: {
            id: components["schemas"]["SnowflakeType"];
            filename: string;
            /** Format: int32 */
            size: number;
            /** Format: uri */
            url: string;
            /** Format: uri */
            proxy_url: string;
            /** Format: int32 */
            width?: number | null;
            /** Format: int32 */
            height?: number | null;
            /** Format: double */
            duration_secs?: number | null;
            waveform?: string | null;
            description?: string | null;
            content_type?: string | null;
            ephemeral?: boolean | null;
            title?: string | null;
            application?: null | components["schemas"]["ApplicationResponse"];
            /** Format: date-time */
            clip_created_at?: string | null;
            clip_participants?: components["schemas"]["UserResponse"][] | null;
        };
        MessageCallResponse: {
            /** Format: date-time */
            ended_timestamp?: string | null;
            participants: components["schemas"]["SnowflakeType"][];
        };
        MessageComponentInteractionMetadataResponse: {
            id: components["schemas"]["SnowflakeType"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
            user?: null | components["schemas"]["UserResponse"];
            authorizing_integration_owners: {
                [key: string]: components["schemas"]["SnowflakeType"];
            };
            original_response_message_id?: null | components["schemas"]["SnowflakeType"];
            interacted_message_id: components["schemas"]["SnowflakeType"];
        };
        /** Format: int32 */
        MessageComponentSeparatorSpacingSize: number & (1 | 2);
        /** Format: int32 */
        MessageComponentTypes: number & (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 17);
        MessageCreateRequest: {
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            sticker_ids?: components["schemas"]["SnowflakeType"][] | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            flags?: number | null;
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
            confetti_potion?: null | components["schemas"]["ConfettiPotionCreateRequest"];
            message_reference?: null | components["schemas"]["MessageReferenceRequest"];
            nonce?: number | string | null;
            enforce_nonce?: boolean | null;
            tts?: boolean | null;
        };
        MessageEditRequestPartial: {
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            flags?: number | null;
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            sticker_ids?: components["schemas"]["SnowflakeType"][] | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
        };
        MessageEmbedAuthorResponse: {
            name: string;
            url?: string | null;
            icon_url?: string | null;
            /** Format: uri */
            proxy_icon_url?: string | null;
        };
        MessageEmbedFieldResponse: {
            name: string;
            value: string;
            inline: boolean;
        };
        MessageEmbedFooterResponse: {
            text: string;
            icon_url?: string | null;
            /** Format: uri */
            proxy_icon_url?: string | null;
        };
        MessageEmbedImageResponse: {
            url?: string | null;
            /** Format: uri */
            proxy_url?: string | null;
            width?: null | components["schemas"]["UInt32Type"];
            height?: null | components["schemas"]["UInt32Type"];
            content_type?: string | null;
            placeholder?: string | null;
            placeholder_version?: null | components["schemas"]["UInt32Type"];
            description?: string | null;
            flags?: null | components["schemas"]["UInt32Type"];
        };
        MessageEmbedProviderResponse: {
            name: string;
            /** Format: uri */
            url?: string | null;
        };
        MessageEmbedResponse: {
            type: string;
            /** Format: uri */
            url?: string | null;
            title?: string | null;
            description?: string | null;
            /** Format: int32 */
            color?: number | null;
            /** Format: date-time */
            timestamp?: string | null;
            fields?: components["schemas"]["MessageEmbedFieldResponse"][] | null;
            author?: null | components["schemas"]["MessageEmbedAuthorResponse"];
            provider?: null | components["schemas"]["MessageEmbedProviderResponse"];
            image?: null | components["schemas"]["MessageEmbedImageResponse"];
            thumbnail?: null | components["schemas"]["MessageEmbedImageResponse"];
            video?: null | components["schemas"]["MessageEmbedVideoResponse"];
            footer?: null | components["schemas"]["MessageEmbedFooterResponse"];
        };
        MessageEmbedVideoResponse: {
            url?: string | null;
            /** Format: uri */
            proxy_url?: string | null;
            width?: null | components["schemas"]["UInt32Type"];
            height?: null | components["schemas"]["UInt32Type"];
            content_type?: string | null;
            placeholder?: string | null;
            placeholder_version?: null | components["schemas"]["UInt32Type"];
            description?: string | null;
            flags?: null | components["schemas"]["UInt32Type"];
        };
        MessageInteractionResponse: {
            id: components["schemas"]["SnowflakeType"];
            type: components["schemas"]["InteractionTypes"];
            name: string;
            user?: null | components["schemas"]["UserResponse"];
            name_localized?: string | null;
        };
        MessageMentionChannelResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            type: components["schemas"]["ChannelTypes"];
            guild_id: components["schemas"]["SnowflakeType"];
        };
        MessageReactionCountDetailsResponse: {
            /** Format: int32 */
            burst: number;
            /** Format: int32 */
            normal: number;
        };
        MessageReactionEmojiResponse: {
            id?: null | components["schemas"]["SnowflakeType"];
            name?: string | null;
            animated?: boolean | null;
        };
        MessageReactionResponse: {
            emoji: components["schemas"]["MessageReactionEmojiResponse"];
            /** Format: int32 */
            count: number;
            count_details: components["schemas"]["MessageReactionCountDetailsResponse"];
            burst_colors: string[];
            me_burst: boolean;
            me: boolean;
        };
        MessageReferenceRequest: {
            guild_id?: null | components["schemas"]["SnowflakeType"];
            channel_id?: null | components["schemas"]["SnowflakeType"];
            message_id: components["schemas"]["SnowflakeType"];
            fail_if_not_exists?: boolean | null;
            type?: null | components["schemas"]["MessageReferenceType"];
        };
        MessageReferenceResponse: {
            type?: null | components["schemas"]["MessageReferenceType"];
            channel_id: components["schemas"]["SnowflakeType"];
            message_id?: null | components["schemas"]["SnowflakeType"];
            guild_id?: null | components["schemas"]["SnowflakeType"];
        };
        /** Format: int32 */
        MessageReferenceType: number & 0;
        MessageResponse: {
            type: components["schemas"]["MessageType"];
            content: string;
            mentions: components["schemas"]["UserResponse"][];
            mention_roles: components["schemas"]["SnowflakeType"][];
            attachments: components["schemas"]["MessageAttachmentResponse"][];
            embeds: components["schemas"]["MessageEmbedResponse"][];
            /** Format: date-time */
            timestamp: string;
            /** Format: date-time */
            edited_timestamp?: string | null;
            /** Format: int32 */
            flags: number;
            components: (components["schemas"]["ActionRowComponentResponse"] | components["schemas"]["ContainerComponentResponse"] | components["schemas"]["FileComponentResponse"] | components["schemas"]["MediaGalleryComponentResponse"] | components["schemas"]["SectionComponentResponse"] | components["schemas"]["SeparatorComponentResponse"] | components["schemas"]["TextDisplayComponentResponse"])[];
            resolved?: null | components["schemas"]["ResolvedObjectsResponse"];
            stickers?: (components["schemas"]["GuildStickerResponse"] | components["schemas"]["StandardStickerResponse"])[] | null;
            sticker_items?: components["schemas"]["MessageStickerItemResponse"][] | null;
            id: components["schemas"]["SnowflakeType"];
            channel_id: components["schemas"]["SnowflakeType"];
            author: components["schemas"]["UserResponse"];
            pinned: boolean;
            mention_everyone: boolean;
            tts: boolean;
            call?: null | components["schemas"]["MessageCallResponse"];
            activity?: null | components["schemas"]["MessageActivityResponse"];
            application?: null | components["schemas"]["BasicApplicationResponse"];
            application_id?: null | components["schemas"]["SnowflakeType"];
            interaction?: null | components["schemas"]["MessageInteractionResponse"];
            nonce?: number | string | null;
            webhook_id?: null | components["schemas"]["SnowflakeType"];
            message_reference?: null | components["schemas"]["MessageReferenceResponse"];
            thread?: null | components["schemas"]["ThreadResponse"];
            mention_channels?: (null | components["schemas"]["MessageMentionChannelResponse"])[] | null;
            role_subscription_data?: null | components["schemas"]["MessageRoleSubscriptionDataResponse"];
            purchase_notification?: null | components["schemas"]["PurchaseNotificationResponse"];
            /** Format: int32 */
            position?: number | null;
            poll?: null | components["schemas"]["PollResponse"];
            interaction_metadata?: components["schemas"]["ApplicationCommandInteractionMetadataResponse"] | components["schemas"]["MessageComponentInteractionMetadataResponse"] | components["schemas"]["ModalSubmitInteractionMetadataResponse"] | null;
            message_snapshots?: components["schemas"]["MessageSnapshotResponse"][] | null;
            reactions?: components["schemas"]["MessageReactionResponse"][] | null;
            referenced_message?: null | components["schemas"]["BasicMessageResponse"];
        };
        MessageRoleSubscriptionDataResponse: {
            role_subscription_listing_id: components["schemas"]["SnowflakeType"];
            tier_name: string;
            /** Format: int32 */
            total_months_subscribed: number;
            is_renewal: boolean;
        };
        MessageSnapshotResponse: {
            message?: null | components["schemas"]["MinimalContentMessageResponse"];
        };
        MessageStickerItemResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            format_type: components["schemas"]["StickerFormatTypes"];
        };
        /** Format: int32 */
        MessageType: number & (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 46 | 55);
        /** Format: int32 */
        MetadataItemTypes: number & (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8);
        MinimalContentMessageResponse: {
            type: components["schemas"]["MessageType"];
            content: string;
            mentions: components["schemas"]["UserResponse"][];
            mention_roles: components["schemas"]["SnowflakeType"][];
            attachments: components["schemas"]["MessageAttachmentResponse"][];
            embeds: components["schemas"]["MessageEmbedResponse"][];
            /** Format: date-time */
            timestamp: string;
            /** Format: date-time */
            edited_timestamp?: string | null;
            /** Format: int32 */
            flags: number;
            components: (components["schemas"]["ActionRowComponentResponse"] | components["schemas"]["ContainerComponentResponse"] | components["schemas"]["FileComponentResponse"] | components["schemas"]["MediaGalleryComponentResponse"] | components["schemas"]["SectionComponentResponse"] | components["schemas"]["SeparatorComponentResponse"] | components["schemas"]["TextDisplayComponentResponse"])[];
            resolved?: null | components["schemas"]["ResolvedObjectsResponse"];
            stickers?: (components["schemas"]["GuildStickerResponse"] | components["schemas"]["StandardStickerResponse"])[] | null;
            sticker_items?: components["schemas"]["MessageStickerItemResponse"][] | null;
        };
        ModalInteractionCallbackRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 9;
            data: components["schemas"]["ModalInteractionCallbackRequestData"];
        };
        ModalInteractionCallbackRequestData: {
            custom_id: string;
            title: string;
            components: components["schemas"]["ActionRowComponentForModalRequest"][];
        };
        ModalSubmitInteractionMetadataResponse: {
            id: components["schemas"]["SnowflakeType"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 5;
            user?: null | components["schemas"]["UserResponse"];
            authorizing_integration_owners: {
                [key: string]: components["schemas"]["SnowflakeType"];
            };
            original_response_message_id?: null | components["schemas"]["SnowflakeType"];
            triggering_interaction_metadata: components["schemas"]["ApplicationCommandInteractionMetadataResponse"] | components["schemas"]["MessageComponentInteractionMetadataResponse"];
        };
        MyGuildResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            icon?: string | null;
            banner?: string | null;
            owner: boolean;
            permissions: string;
            features: components["schemas"]["GuildFeatures"][];
            /** Format: int32 */
            approximate_member_count?: number | null;
            /** Format: int32 */
            approximate_presence_count?: number | null;
        };
        NameplatePalette: string;
        NewMemberActionResponse: {
            channel_id: components["schemas"]["SnowflakeType"];
            action_type: components["schemas"]["NewMemberActionType"];
            title: string;
            description: string;
            emoji?: null | components["schemas"]["SettingsEmojiResponse"];
            icon?: string | null;
        };
        /** Format: int32 */
        NewMemberActionType: number & (0 | 1);
        OAuth2GetAuthorizationResponse: {
            application: components["schemas"]["ApplicationResponse"];
            /** Format: date-time */
            expires: string;
            scopes: components["schemas"]["OAuth2Scopes"][];
            user?: null | components["schemas"]["UserResponse"];
        };
        OAuth2GetKeys: {
            keys: components["schemas"]["OAuth2Key"][];
        };
        OAuth2GetOpenIDConnectUserInfoResponse: {
            sub: string;
            email?: string | null;
            email_verified?: boolean | null;
            preferred_username?: string | null;
            nickname?: string | null;
            picture?: string | null;
            locale?: string | null;
        };
        OAuth2Key: {
            kty: string;
            use: string;
            kid: string;
            n: string;
            e: string;
            alg: string;
        };
        OAuth2Scopes: string & ("identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "bot" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.permissions.update" | "applications.commands.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "activities.invites.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write" | "openid");
        OnboardingPromptOptionRequest: {
            id?: null | components["schemas"]["SnowflakeType"];
            title: string;
            description?: string | null;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
            emoji_animated?: boolean | null;
            role_ids?: components["schemas"]["SnowflakeType"][] | null;
            channel_ids?: components["schemas"]["SnowflakeType"][] | null;
        };
        OnboardingPromptOptionResponse: {
            id: components["schemas"]["SnowflakeType"];
            title: string;
            description: string;
            emoji: components["schemas"]["SettingsEmojiResponse"];
            role_ids: components["schemas"]["SnowflakeType"][];
            channel_ids: components["schemas"]["SnowflakeType"][];
        };
        OnboardingPromptResponse: {
            id: components["schemas"]["SnowflakeType"];
            title: string;
            options: components["schemas"]["OnboardingPromptOptionResponse"][];
            single_select: boolean;
            required: boolean;
            in_onboarding: boolean;
            type: components["schemas"]["OnboardingPromptType"];
        };
        /** Format: int32 */
        OnboardingPromptType: number & (0 | 1);
        PartialDiscordIntegrationResponse: {
            id: components["schemas"]["SnowflakeType"];
            /** @enum {string} */
            type: "discord";
            name?: string | null;
            account?: null | components["schemas"]["AccountResponse"];
            application_id: components["schemas"]["SnowflakeType"];
        };
        PartialExternalConnectionIntegrationResponse: {
            id: components["schemas"]["SnowflakeType"];
            /** @enum {string} */
            type: "twitch" | "youtube";
            name?: string | null;
            account?: null | components["schemas"]["AccountResponse"];
        };
        PartialGuildSubscriptionIntegrationResponse: {
            id: components["schemas"]["SnowflakeType"];
            /** @enum {string} */
            type: "guild_subscription";
            name?: string | null;
            account?: null | components["schemas"]["AccountResponse"];
        };
        PinnedMessageResponse: {
            /** Format: date-time */
            pinned_at: string;
            message: components["schemas"]["MessageResponse"];
        };
        PinnedMessagesResponse: {
            items?: components["schemas"]["PinnedMessageResponse"][] | null;
            has_more: boolean;
        };
        PollAnswerCreateRequest: {
            poll_media: components["schemas"]["PollMediaCreateRequest"];
        };
        PollAnswerDetailsResponse: {
            users?: components["schemas"]["UserResponse"][] | null;
        };
        PollAnswerResponse: {
            /** Format: int32 */
            answer_id: number;
            poll_media: components["schemas"]["PollMediaResponse"];
        };
        PollCreateRequest: {
            question: components["schemas"]["PollMedia"];
            answers: components["schemas"]["PollAnswerCreateRequest"][];
            allow_multiselect?: boolean | null;
            layout_type?: null | components["schemas"]["PollLayoutTypes"];
            /** Format: int32 */
            duration?: number | null;
        };
        PollEmoji: {
            id?: null | components["schemas"]["SnowflakeType"];
            name?: string | null;
            animated?: boolean | null;
        };
        PollEmojiCreateRequest: {
            id?: null | components["schemas"]["SnowflakeType"];
            name?: string | null;
            animated?: boolean | null;
        };
        /** Format: int32 */
        PollLayoutTypes: number;
        PollMedia: {
            text?: string | null;
            emoji?: null | components["schemas"]["PollEmoji"];
        };
        PollMediaCreateRequest: {
            text?: string | null;
            emoji?: null | components["schemas"]["PollEmojiCreateRequest"];
        };
        PollMediaResponse: {
            text?: string | null;
            emoji?: null | components["schemas"]["MessageReactionEmojiResponse"];
        };
        PollResponse: {
            question: components["schemas"]["PollMediaResponse"];
            answers: components["schemas"]["PollAnswerResponse"][];
            /** Format: date-time */
            expiry: string;
            allow_multiselect: boolean;
            layout_type: components["schemas"]["PollLayoutTypes"];
            results: components["schemas"]["PollResultsResponse"];
        };
        PollResultsEntryResponse: {
            /** Format: int32 */
            id: number;
            /** Format: int32 */
            count: number;
            me_voted?: boolean | null;
        };
        PollResultsResponse: {
            answer_counts?: components["schemas"]["PollResultsEntryResponse"][] | null;
            is_finalized: boolean;
        };
        PongInteractionCallbackRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        /** Format: int32 */
        PremiumGuildTiers: number & (0 | 1 | 2 | 3);
        /** Format: int32 */
        PremiumTypes: number & (0 | 1 | 2 | 3);
        PrivateApplicationResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            icon?: string | null;
            description: string;
            type?: null | components["schemas"]["ApplicationTypes"];
            cover_image?: string | null;
            primary_sku_id?: null | components["schemas"]["SnowflakeType"];
            bot?: null | components["schemas"]["UserResponse"];
            slug?: string | null;
            guild_id?: null | components["schemas"]["SnowflakeType"];
            rpc_origins?: (string | null)[] | null;
            bot_public?: boolean | null;
            bot_require_code_grant?: boolean | null;
            /** Format: uri */
            terms_of_service_url?: string | null;
            /** Format: uri */
            privacy_policy_url?: string | null;
            /** Format: uri */
            custom_install_url?: string | null;
            install_params?: null | components["schemas"]["ApplicationOAuth2InstallParamsResponse"];
            integration_types_config?: {
                [key: string]: components["schemas"]["ApplicationIntegrationTypeConfigurationResponse"];
            } | null;
            verify_key: string;
            /** Format: int32 */
            flags: number;
            /** Format: int32 */
            max_participants?: number | null;
            tags?: string[] | null;
            redirect_uris: (string | null)[];
            /** Format: uri */
            interactions_endpoint_url?: string | null;
            /** Format: uri */
            role_connections_verification_url?: string | null;
            owner: components["schemas"]["UserResponse"];
            /** Format: int32 */
            approximate_guild_count?: number | null;
            /** Format: int32 */
            approximate_user_install_count: number;
            /** Format: int32 */
            approximate_user_authorization_count: number;
            explicit_content_filter: components["schemas"]["ApplicationExplicitContentFilterTypes"];
            team?: null | components["schemas"]["TeamResponse"];
        };
        PrivateChannelLocation: {
            id: string;
            /** @enum {string} */
            kind: "pc";
            channel_id: components["schemas"]["SnowflakeType"];
        };
        PrivateChannelResponse: {
            id: components["schemas"]["SnowflakeType"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
            last_message_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            flags: number;
            /** Format: date-time */
            last_pin_timestamp?: string | null;
            recipients: components["schemas"]["UserResponse"][];
        };
        PrivateGroupChannelResponse: {
            id: components["schemas"]["SnowflakeType"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
            last_message_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            flags: number;
            /** Format: date-time */
            last_pin_timestamp?: string | null;
            recipients: components["schemas"]["UserResponse"][];
            name?: string | null;
            icon?: string | null;
            owner_id?: null | components["schemas"]["SnowflakeType"];
            managed?: boolean | null;
            application_id?: null | components["schemas"]["SnowflakeType"];
        };
        PrivateGuildMemberResponse: {
            avatar?: string | null;
            avatar_decoration_data?: null | components["schemas"]["UserAvatarDecorationResponse"];
            banner?: string | null;
            /** Format: date-time */
            communication_disabled_until?: string | null;
            /** Format: int32 */
            flags: number;
            /** Format: date-time */
            joined_at: string;
            nick?: string | null;
            pending: boolean;
            /** Format: date-time */
            premium_since?: string | null;
            roles: components["schemas"]["SnowflakeType"][];
            user: components["schemas"]["UserResponse"];
            mute: boolean;
            deaf: boolean;
        };
        ProvisionalTokenResponse: {
            token_type: string;
            access_token: string;
            /** Format: int32 */
            expires_in: number;
            scope: string;
            id_token: string;
            refresh_token?: string | null;
            scopes?: string[] | null;
            /** Format: int32 */
            expires_at_s?: number | null;
        };
        PurchaseNotificationResponse: {
            type: components["schemas"]["PurchaseType"];
            guild_product_purchase?: null | components["schemas"]["GuildProductPurchaseResponse"];
        };
        /** Format: int32 */
        PurchaseType: number & 0;
        QuarantineUserAction: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
            metadata?: null | components["schemas"]["QuarantineUserActionMetadata"];
        };
        QuarantineUserActionMetadata: Record<string, never>;
        QuarantineUserActionMetadataResponse: Record<string, never>;
        QuarantineUserActionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
            metadata: components["schemas"]["QuarantineUserActionMetadataResponse"];
        };
        /** Format: int32 */
        ReactionTypes: number & (0 | 1);
        ResolvedObjectsResponse: {
            users: {
                [key: string]: components["schemas"]["UserResponse"];
            };
            members: {
                [key: string]: components["schemas"]["GuildMemberResponse"];
            };
            channels: {
                [key: string]: components["schemas"]["GuildChannelResponse"] | components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"] | components["schemas"]["ThreadResponse"];
            };
            roles: {
                [key: string]: components["schemas"]["GuildRoleResponse"];
            };
        };
        ResourceChannelResponse: {
            channel_id: components["schemas"]["SnowflakeType"];
            title: string;
            emoji?: null | components["schemas"]["SettingsEmojiResponse"];
            icon?: string | null;
            description: string;
        };
        RichEmbed: {
            type?: string | null;
            /** Format: uri */
            url?: string | null;
            title?: string | null;
            color?: number | null;
            /** Format: date-time */
            timestamp?: string | null;
            description?: string | null;
            author?: null | components["schemas"]["RichEmbedAuthor"];
            image?: null | components["schemas"]["RichEmbedImage"];
            thumbnail?: null | components["schemas"]["RichEmbedThumbnail"];
            footer?: null | components["schemas"]["RichEmbedFooter"];
            fields?: components["schemas"]["RichEmbedField"][] | null;
            provider?: null | components["schemas"]["RichEmbedProvider"];
            video?: null | components["schemas"]["RichEmbedVideo"];
        };
        RichEmbedAuthor: {
            name?: string | null;
            /** Format: uri */
            url?: string | null;
            /** Format: uri */
            icon_url?: string | null;
        };
        RichEmbedField: {
            name: string;
            value: string;
            inline?: boolean | null;
        };
        RichEmbedFooter: {
            text?: string | null;
            /** Format: uri */
            icon_url?: string | null;
        };
        RichEmbedImage: {
            /** Format: uri */
            url?: string | null;
            width?: number | null;
            height?: number | null;
            placeholder?: string | null;
            placeholder_version?: number | null;
            is_animated?: boolean | null;
            description?: string | null;
        };
        RichEmbedProvider: {
            name?: string | null;
            /** Format: uri */
            url?: string | null;
        };
        RichEmbedThumbnail: {
            /** Format: uri */
            url?: string | null;
            width?: number | null;
            height?: number | null;
            placeholder?: string | null;
            placeholder_version?: number | null;
            is_animated?: boolean | null;
            description?: string | null;
        };
        RichEmbedVideo: {
            /** Format: uri */
            url?: string | null;
            width?: number | null;
            height?: number | null;
            placeholder?: string | null;
            placeholder_version?: number | null;
            is_animated?: boolean | null;
            description?: string | null;
        };
        RoleSelectComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 6;
            custom_id: string;
            placeholder?: string | null;
            min_values?: number | null;
            max_values?: number | null;
            disabled?: boolean | null;
            default_values?: components["schemas"]["RoleSelectDefaultValue"][] | null;
        };
        RoleSelectComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 6;
            /** Format: int32 */
            id: number;
            custom_id: string;
            placeholder?: string | null;
            /** Format: int32 */
            min_values?: number | null;
            /** Format: int32 */
            max_values?: number | null;
            disabled?: boolean | null;
            default_values?: components["schemas"]["RoleSelectDefaultValueResponse"][] | null;
        };
        RoleSelectDefaultValue: {
            /** @enum {string} */
            type: "role";
            id: components["schemas"]["SnowflakeType"];
        };
        RoleSelectDefaultValueResponse: {
            /** @enum {string} */
            type: "role";
            id: components["schemas"]["SnowflakeType"];
        };
        SDKMessageRequest: {
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            sticker_ids?: components["schemas"]["SnowflakeType"][] | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            flags?: number | null;
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
            confetti_potion?: null | components["schemas"]["ConfettiPotionCreateRequest"];
            message_reference?: null | components["schemas"]["MessageReferenceRequest"];
            nonce?: number | string | null;
            enforce_nonce?: boolean | null;
            tts?: boolean | null;
        };
        ScheduledEventResponse: {
            id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            name: string;
            description?: string | null;
            channel_id?: null | components["schemas"]["SnowflakeType"];
            creator_id?: null | components["schemas"]["SnowflakeType"];
            creator?: null | components["schemas"]["UserResponse"];
            image?: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
            /** Format: date-time */
            scheduled_end_time?: string | null;
            status: components["schemas"]["GuildScheduledEventStatuses"];
            entity_type: components["schemas"]["GuildScheduledEventEntityTypes"];
            entity_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            user_count?: number | null;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            user_rsvp?: null | components["schemas"]["ScheduledEventUserResponse"];
        };
        ScheduledEventUserResponse: {
            guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            user_id: components["schemas"]["SnowflakeType"];
            user?: null | components["schemas"]["UserResponse"];
            member?: null | components["schemas"]["GuildMemberResponse"];
        };
        SectionComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 9;
            components: components["schemas"]["TextDisplayComponentForMessageRequest"][];
            accessory: components["schemas"]["ButtonComponentForMessageRequest"] | components["schemas"]["ThumbnailComponentForMessageRequest"];
        };
        SectionComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 9;
            /** Format: int32 */
            id: number;
            components: components["schemas"]["TextDisplayComponentResponse"][];
            accessory: components["schemas"]["ButtonComponentResponse"] | components["schemas"]["ThumbnailComponentResponse"];
        };
        SeparatorComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 14;
            spacing?: null | components["schemas"]["MessageComponentSeparatorSpacingSize"];
            divider?: boolean | null;
        };
        SeparatorComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 14;
            /** Format: int32 */
            id: number;
            spacing: components["schemas"]["MessageComponentSeparatorSpacingSize"];
            divider: boolean;
        };
        SettingsEmojiResponse: {
            id?: null | components["schemas"]["SnowflakeType"];
            name?: string | null;
            animated?: boolean | null;
        };
        SlackWebhook: {
            text?: string | null;
            username?: string | null;
            /** Format: uri */
            icon_url?: string | null;
            attachments?: components["schemas"]["WebhookSlackEmbed"][] | null;
        };
        SnowflakeSelectDefaultValueTypes: string & ("user" | "role" | "channel");
        /** Format: snowflake */
        SnowflakeType: string;
        SortingOrder: string & ("asc" | "desc");
        SoundboardCreateRequest: {
            name: string;
            /** Format: double */
            volume?: number | null;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
            sound: string;
        };
        SoundboardPatchRequestPartial: {
            name?: string;
            /** Format: double */
            volume?: number | null;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
        };
        SoundboardSoundResponse: {
            name: string;
            sound_id: components["schemas"]["SnowflakeType"];
            /** Format: double */
            volume: number;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
            guild_id?: null | components["schemas"]["SnowflakeType"];
            available: boolean;
            user?: null | components["schemas"]["UserResponse"];
        };
        SoundboardSoundSendRequest: {
            sound_id: components["schemas"]["SnowflakeType"];
            source_guild_id?: null | components["schemas"]["SnowflakeType"];
        };
        SpamLinkRuleResponse: {
            id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            creator_id: components["schemas"]["SnowflakeType"];
            name: string;
            event_type: components["schemas"]["AutomodEventType"];
            actions: (components["schemas"]["BlockMessageActionResponse"] | components["schemas"]["FlagToChannelActionResponse"] | components["schemas"]["QuarantineUserActionResponse"] | components["schemas"]["UserCommunicationDisabledActionResponse"])[];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 2;
            enabled?: boolean | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            trigger_metadata: components["schemas"]["SpamLinkTriggerMetadataResponse"];
        };
        SpamLinkTriggerMetadataResponse: Record<string, never>;
        StageInstanceResponse: {
            guild_id: components["schemas"]["SnowflakeType"];
            channel_id: components["schemas"]["SnowflakeType"];
            topic: string;
            privacy_level: components["schemas"]["StageInstancesPrivacyLevels"];
            id: components["schemas"]["SnowflakeType"];
            discoverable_disabled?: boolean | null;
            guild_scheduled_event_id?: null | components["schemas"]["SnowflakeType"];
        };
        /** Format: int32 */
        StageInstancesPrivacyLevels: number & (1 | 2);
        StageScheduledEventCreateRequest: {
            name: string;
            description?: string | null;
            image?: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
            /** Format: date-time */
            scheduled_end_time?: string | null;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 1;
            channel_id?: null | components["schemas"]["SnowflakeType"];
            entity_metadata?: null | components["schemas"]["EntityMetadataStageInstance"];
        };
        StageScheduledEventPatchRequestPartial: {
            status?: null | components["schemas"]["GuildScheduledEventStatuses"];
            name?: string;
            description?: string | null;
            image?: string | null;
            /** Format: date-time */
            scheduled_start_time?: string;
            /** Format: date-time */
            scheduled_end_time?: string | null;
            entity_type?: null | 1;
            privacy_level?: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            channel_id?: null | components["schemas"]["SnowflakeType"];
            entity_metadata?: null | components["schemas"]["EntityMetadataStageInstance"];
        };
        StageScheduledEventResponse: {
            id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            name: string;
            description?: string | null;
            channel_id?: null | components["schemas"]["SnowflakeType"];
            creator_id?: null | components["schemas"]["SnowflakeType"];
            creator?: null | components["schemas"]["UserResponse"];
            image?: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
            /** Format: date-time */
            scheduled_end_time?: string | null;
            status: components["schemas"]["GuildScheduledEventStatuses"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 1;
            entity_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            user_count?: number | null;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            user_rsvp?: null | components["schemas"]["ScheduledEventUserResponse"];
            entity_metadata?: null | components["schemas"]["EntityMetadataStageInstanceResponse"];
        };
        StandardStickerResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            tags: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
            format_type?: null | components["schemas"]["StickerFormatTypes"];
            description?: string | null;
            pack_id: components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            sort_value: number;
        };
        /** Format: int32 */
        StickerFormatTypes: number & (1 | 2 | 3 | 4);
        StickerPackCollectionResponse: {
            sticker_packs: components["schemas"]["StickerPackResponse"][];
        };
        StickerPackResponse: {
            id: components["schemas"]["SnowflakeType"];
            sku_id: components["schemas"]["SnowflakeType"];
            name: string;
            description?: string | null;
            stickers: components["schemas"]["StandardStickerResponse"][];
            cover_sticker_id?: null | components["schemas"]["SnowflakeType"];
            banner_asset_id?: null | components["schemas"]["SnowflakeType"];
        };
        /** Format: int32 */
        StickerTypes: number & (1 | 2);
        StringSelectComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
            custom_id: string;
            placeholder?: string | null;
            min_values?: number | null;
            max_values?: number | null;
            disabled?: boolean | null;
            options: components["schemas"]["StringSelectOptionForMessageRequest"][];
        };
        StringSelectComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
            /** Format: int32 */
            id: number;
            custom_id: string;
            placeholder?: string | null;
            /** Format: int32 */
            min_values?: number | null;
            /** Format: int32 */
            max_values?: number | null;
            disabled?: boolean | null;
            options: components["schemas"]["StringSelectOptionResponse"][];
        };
        StringSelectOptionForMessageRequest: {
            label: string;
            value: string;
            description?: string | null;
            default?: boolean | null;
            emoji?: null | components["schemas"]["ComponentEmojiForMessageRequest"];
        };
        StringSelectOptionResponse: {
            label: string;
            value: string;
            description?: string | null;
            emoji?: null | components["schemas"]["ComponentEmojiResponse"];
            default?: boolean | null;
        };
        TeamMemberResponse: {
            user: components["schemas"]["UserResponse"];
            team_id: components["schemas"]["SnowflakeType"];
            membership_state: components["schemas"]["TeamMembershipStates"];
        };
        /** Format: int32 */
        TeamMembershipStates: number & (1 | 2);
        TeamResponse: {
            id: components["schemas"]["SnowflakeType"];
            icon?: string | null;
            name: string;
            owner_user_id: components["schemas"]["SnowflakeType"];
            members: components["schemas"]["TeamMemberResponse"][];
        };
        TextDisplayComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10;
            content: string;
        };
        TextDisplayComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10;
            /** Format: int32 */
            id: number;
            content: string;
        };
        TextInputComponentForModalRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
            custom_id: string;
            style: components["schemas"]["TextInputStyleTypes"];
            label: string;
            value?: string | null;
            placeholder?: string | null;
            required?: boolean | null;
            min_length?: number | null;
            max_length?: number | null;
        };
        TextInputComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
            /** Format: int32 */
            id: number;
            custom_id: string;
            style: components["schemas"]["TextInputStyleTypes"];
            label?: string | null;
            value?: string | null;
            placeholder?: string | null;
            required?: boolean | null;
            /** Format: int32 */
            min_length?: number | null;
            /** Format: int32 */
            max_length?: number | null;
        };
        /** Format: int32 */
        TextInputStyleTypes: number & (1 | 2);
        /** Format: int32 */
        ThreadAutoArchiveDuration: number & (60 | 1440 | 4320 | 10080);
        ThreadMemberResponse: {
            id: components["schemas"]["SnowflakeType"];
            user_id: components["schemas"]["SnowflakeType"];
            /** Format: date-time */
            join_timestamp: string;
            /** Format: int32 */
            flags: number;
            member?: null | components["schemas"]["GuildMemberResponse"];
        };
        ThreadMetadataResponse: {
            archived: boolean;
            /** Format: date-time */
            archive_timestamp?: string | null;
            auto_archive_duration: components["schemas"]["ThreadAutoArchiveDuration"];
            locked: boolean;
            /** Format: date-time */
            create_timestamp?: string | null;
            invitable?: boolean | null;
        };
        ThreadResponse: {
            id: components["schemas"]["SnowflakeType"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10 | 11 | 12;
            last_message_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            flags: number;
            /** Format: date-time */
            last_pin_timestamp?: string | null;
            guild_id: components["schemas"]["SnowflakeType"];
            name: string;
            parent_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            rate_limit_per_user?: number | null;
            /** Format: int32 */
            bitrate?: number | null;
            /** Format: int32 */
            user_limit?: number | null;
            rtc_region?: string | null;
            video_quality_mode?: null | components["schemas"]["VideoQualityModes"];
            permissions?: string | null;
            owner_id: components["schemas"]["SnowflakeType"];
            thread_metadata?: null | components["schemas"]["ThreadMetadataResponse"];
            /** Format: int32 */
            message_count: number;
            /** Format: int32 */
            member_count: number;
            /** Format: int32 */
            total_message_sent: number;
            applied_tags?: components["schemas"]["SnowflakeType"][] | null;
            member?: null | components["schemas"]["ThreadMemberResponse"];
        };
        ThreadSearchResponse: {
            threads: components["schemas"]["ThreadResponse"][];
            members: components["schemas"]["ThreadMemberResponse"][];
            has_more?: boolean | null;
            first_messages?: components["schemas"]["MessageResponse"][] | null;
            /** Format: int32 */
            total_results?: number | null;
        };
        ThreadSearchTagSetting: string;
        /** Format: int32 */
        ThreadSortOrder: number & (0 | 1);
        ThreadSortingMode: string & ("relevance" | "creation_time" | "last_message_time" | "archive_time");
        ThreadsResponse: {
            threads: components["schemas"]["ThreadResponse"][];
            members: components["schemas"]["ThreadMemberResponse"][];
            has_more?: boolean | null;
            first_messages?: components["schemas"]["MessageResponse"][] | null;
        };
        ThumbnailComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 11;
            description?: string | null;
            spoiler?: boolean | null;
            media: components["schemas"]["UnfurledMediaRequest"];
        };
        ThumbnailComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 11;
            /** Format: int32 */
            id: number;
            media: components["schemas"]["UnfurledMediaResponse"];
            description?: string | null;
            spoiler: boolean;
        };
        TypingIndicatorResponse: Record<string, never>;
        /** Format: int64 */
        UInt32Type: number;
        UnfurledMediaRequest: {
            /** Format: uri */
            url: string;
        };
        UnfurledMediaRequestWithAttachmentReferenceRequired: {
            /** Format: uri */
            url: string;
        };
        UnfurledMediaResponse: {
            id: components["schemas"]["SnowflakeType"];
            url: string;
            proxy_url: string;
            /** Format: int32 */
            width?: number | null;
            /** Format: int32 */
            height?: number | null;
            content_type?: string | null;
            attachment_id?: null | components["schemas"]["SnowflakeType"];
        };
        UpdateApplicationUserRoleConnectionRequest: {
            platform_name?: string | null;
            platform_username?: string | null;
            metadata?: {
                [key: string]: string;
            } | null;
        };
        UpdateDMRequestPartial: {
            name?: string | null;
        };
        UpdateDefaultReactionEmojiRequest: {
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
        };
        UpdateGroupDMRequestPartial: {
            name?: string | null;
            icon?: string | null;
        };
        UpdateGuildChannelRequestPartial: {
            type?: null | (0 | 2 | 4 | 5 | 13 | 14 | 15);
            name?: string;
            /** Format: int32 */
            position?: number | null;
            topic?: string | null;
            /** Format: int32 */
            bitrate?: number | null;
            /** Format: int32 */
            user_limit?: number | null;
            nsfw?: boolean | null;
            rate_limit_per_user?: number | null;
            parent_id?: null | components["schemas"]["SnowflakeType"];
            permission_overwrites?: components["schemas"]["ChannelPermissionOverwriteRequest"][] | null;
            rtc_region?: string | null;
            video_quality_mode?: null | components["schemas"]["VideoQualityModes"];
            default_auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            default_reaction_emoji?: null | components["schemas"]["UpdateDefaultReactionEmojiRequest"];
            default_thread_rate_limit_per_user?: number | null;
            default_sort_order?: null | components["schemas"]["ThreadSortOrder"];
            default_forum_layout?: null | components["schemas"]["ForumLayout"];
            default_tag_setting?: null | components["schemas"]["ThreadSearchTagSetting"];
            flags?: number | null;
            available_tags?: components["schemas"]["UpdateThreadTagRequest"][] | null;
        };
        UpdateGuildOnboardingRequest: {
            prompts?: components["schemas"]["UpdateOnboardingPromptRequest"][] | null;
            enabled?: boolean | null;
            default_channel_ids?: components["schemas"]["SnowflakeType"][] | null;
            mode?: null | components["schemas"]["GuildOnboardingMode"];
        };
        UpdateMessageInteractionCallbackRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 6 | 7;
            data?: null | components["schemas"]["IncomingWebhookUpdateForInteractionCallbackRequestPartial"];
        };
        UpdateMessageInteractionCallbackResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 7;
            message: components["schemas"]["MessageResponse"];
        };
        UpdateOnboardingPromptRequest: {
            title: string;
            options: components["schemas"]["OnboardingPromptOptionRequest"][];
            single_select?: boolean | null;
            required?: boolean | null;
            in_onboarding?: boolean | null;
            type?: null | components["schemas"]["OnboardingPromptType"];
            id: components["schemas"]["SnowflakeType"];
        };
        UpdateThreadRequestPartial: {
            name?: string | null;
            archived?: boolean | null;
            locked?: boolean | null;
            invitable?: boolean | null;
            auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            rate_limit_per_user?: number | null;
            flags?: number | null;
            applied_tags?: components["schemas"]["SnowflakeType"][] | null;
            /** Format: int32 */
            bitrate?: number | null;
            user_limit?: number | null;
            rtc_region?: string | null;
            video_quality_mode?: null | components["schemas"]["VideoQualityModes"];
        };
        UpdateThreadTagRequest: {
            name: string;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
            moderated?: boolean | null;
            id?: null | components["schemas"]["SnowflakeType"];
        };
        UserAvatarDecorationResponse: {
            asset: string;
            sku_id?: null | components["schemas"]["SnowflakeType"];
        };
        UserCollectiblesResponse: {
            nameplate?: null | components["schemas"]["UserNameplateResponse"];
        };
        UserCommunicationDisabledAction: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
            metadata: components["schemas"]["UserCommunicationDisabledActionMetadata"];
        };
        UserCommunicationDisabledActionMetadata: {
            duration_seconds?: number | null;
        };
        UserCommunicationDisabledActionMetadataResponse: {
            /** Format: int32 */
            duration_seconds: number;
        };
        UserCommunicationDisabledActionResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
            metadata: components["schemas"]["UserCommunicationDisabledActionMetadataResponse"];
        };
        UserGuildOnboardingResponse: {
            guild_id: components["schemas"]["SnowflakeType"];
            prompts: components["schemas"]["OnboardingPromptResponse"][];
            default_channel_ids: components["schemas"]["SnowflakeType"][];
            enabled: boolean;
        };
        UserNameplateResponse: {
            sku_id?: null | components["schemas"]["SnowflakeType"];
            asset?: string | null;
            label?: string | null;
            palette?: null | components["schemas"]["NameplatePalette"];
        };
        /** Format: int32 */
        UserNotificationSettings: number & (0 | 1);
        UserPIIResponse: {
            id: components["schemas"]["SnowflakeType"];
            username: string;
            avatar?: string | null;
            discriminator: string;
            /** Format: int32 */
            public_flags: number;
            flags: components["schemas"]["Int53Type"];
            bot?: boolean | null;
            system?: boolean | null;
            banner?: string | null;
            /** Format: int32 */
            accent_color?: number | null;
            global_name?: string | null;
            avatar_decoration_data?: null | components["schemas"]["UserAvatarDecorationResponse"];
            collectibles?: null | components["schemas"]["UserCollectiblesResponse"];
            primary_guild?: null | components["schemas"]["UserPrimaryGuildResponse"];
            mfa_enabled: boolean;
            locale: components["schemas"]["AvailableLocalesEnum"];
            premium_type?: null | components["schemas"]["PremiumTypes"];
            email?: string | null;
            verified?: boolean | null;
        };
        UserPrimaryGuildResponse: {
            identity_guild_id?: null | components["schemas"]["SnowflakeType"];
            identity_enabled?: boolean | null;
            tag?: string | null;
            badge?: string | null;
        };
        UserResponse: {
            id: components["schemas"]["SnowflakeType"];
            username: string;
            avatar?: string | null;
            discriminator: string;
            /** Format: int32 */
            public_flags: number;
            flags: components["schemas"]["Int53Type"];
            bot?: boolean | null;
            system?: boolean | null;
            banner?: string | null;
            /** Format: int32 */
            accent_color?: number | null;
            global_name?: string | null;
            avatar_decoration_data?: null | components["schemas"]["UserAvatarDecorationResponse"];
            collectibles?: null | components["schemas"]["UserCollectiblesResponse"];
            primary_guild?: null | components["schemas"]["UserPrimaryGuildResponse"];
        };
        UserSelectComponentForMessageRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 5;
            custom_id: string;
            placeholder?: string | null;
            min_values?: number | null;
            max_values?: number | null;
            disabled?: boolean | null;
            default_values?: components["schemas"]["UserSelectDefaultValue"][] | null;
        };
        UserSelectComponentResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 5;
            /** Format: int32 */
            id: number;
            custom_id: string;
            placeholder?: string | null;
            /** Format: int32 */
            min_values?: number | null;
            /** Format: int32 */
            max_values?: number | null;
            disabled?: boolean | null;
            default_values?: components["schemas"]["UserSelectDefaultValueResponse"][] | null;
        };
        UserSelectDefaultValue: {
            /** @enum {string} */
            type: "user";
            id: components["schemas"]["SnowflakeType"];
        };
        UserSelectDefaultValueResponse: {
            /** @enum {string} */
            type: "user";
            id: components["schemas"]["SnowflakeType"];
        };
        VanityURLErrorResponse: {
            message: string;
            /** Format: int32 */
            code: number;
        };
        VanityURLResponse: {
            code?: string | null;
            /** Format: int32 */
            uses: number;
            error?: null | components["schemas"]["VanityURLErrorResponse"];
        };
        /** Format: int32 */
        VerificationLevels: number & (0 | 1 | 2 | 3 | 4);
        /** Format: int32 */
        VideoQualityModes: number & (1 | 2);
        VoiceRegionResponse: {
            id: string;
            name: string;
            custom: boolean;
            deprecated: boolean;
            optimal: boolean;
        };
        VoiceScheduledEventCreateRequest: {
            name: string;
            description?: string | null;
            image?: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
            /** Format: date-time */
            scheduled_end_time?: string | null;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 2;
            channel_id?: null | components["schemas"]["SnowflakeType"];
            entity_metadata?: null | components["schemas"]["EntityMetadataVoice"];
        };
        VoiceScheduledEventPatchRequestPartial: {
            status?: null | components["schemas"]["GuildScheduledEventStatuses"];
            name?: string;
            description?: string | null;
            image?: string | null;
            /** Format: date-time */
            scheduled_start_time?: string;
            /** Format: date-time */
            scheduled_end_time?: string | null;
            entity_type?: null | 2;
            privacy_level?: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            channel_id?: null | components["schemas"]["SnowflakeType"];
            entity_metadata?: null | components["schemas"]["EntityMetadataVoice"];
        };
        VoiceScheduledEventResponse: {
            id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            name: string;
            description?: string | null;
            channel_id?: null | components["schemas"]["SnowflakeType"];
            creator_id?: null | components["schemas"]["SnowflakeType"];
            creator?: null | components["schemas"]["UserResponse"];
            image?: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
            /** Format: date-time */
            scheduled_end_time?: string | null;
            status: components["schemas"]["GuildScheduledEventStatuses"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 2;
            entity_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            user_count?: number | null;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            user_rsvp?: null | components["schemas"]["ScheduledEventUserResponse"];
            entity_metadata?: null | components["schemas"]["EntityMetadataVoiceResponse"];
        };
        VoiceStateResponse: {
            channel_id?: null | components["schemas"]["SnowflakeType"];
            deaf: boolean;
            guild_id?: null | components["schemas"]["SnowflakeType"];
            member?: null | components["schemas"]["GuildMemberResponse"];
            mute: boolean;
            /** Format: date-time */
            request_to_speak_timestamp?: string | null;
            suppress: boolean;
            self_stream?: boolean | null;
            self_deaf: boolean;
            self_mute: boolean;
            self_video: boolean;
            session_id: string;
            user_id: components["schemas"]["SnowflakeType"];
        };
        WebhookSlackEmbed: {
            title?: string | null;
            /** Format: uri */
            title_link?: string | null;
            text?: string | null;
            color?: string | null;
            ts?: number | null;
            pretext?: string | null;
            footer?: string | null;
            /** Format: uri */
            footer_icon?: string | null;
            author_name?: string | null;
            /** Format: uri */
            author_link?: string | null;
            /** Format: uri */
            author_icon?: string | null;
            /** Format: uri */
            image_url?: string | null;
            /** Format: uri */
            thumb_url?: string | null;
            fields?: components["schemas"]["WebhookSlackEmbedField"][] | null;
        };
        WebhookSlackEmbedField: {
            name?: string | null;
            value?: string | null;
            inline?: boolean | null;
        };
        WebhookSourceChannelResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
        };
        WebhookSourceGuildResponse: {
            id: components["schemas"]["SnowflakeType"];
            icon?: string | null;
            name: string;
        };
        /** Format: int32 */
        WebhookTypes: number & (1 | 2 | 3);
        WelcomeMessageResponse: {
            author_ids: components["schemas"]["SnowflakeType"][];
            message: string;
        };
        WelcomeScreenPatchRequestPartial: {
            description?: string | null;
            welcome_channels?: components["schemas"]["GuildWelcomeChannel"][] | null;
            enabled?: boolean | null;
        };
        WidgetActivity: {
            name: string;
        };
        WidgetChannel: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            /** Format: int32 */
            position: number;
        };
        WidgetImageStyles: string & ("shield" | "banner1" | "banner2" | "banner3" | "banner4");
        WidgetMember: {
            id: string;
            username: string;
            discriminator: components["schemas"]["WidgetUserDiscriminator"];
            avatar?: null;
            status: string;
            /** Format: uri */
            avatar_url: string;
            activity?: null | components["schemas"]["WidgetActivity"];
            deaf?: boolean | null;
            mute?: boolean | null;
            self_deaf?: boolean | null;
            self_mute?: boolean | null;
            suppress?: boolean | null;
            channel_id?: null | components["schemas"]["SnowflakeType"];
        };
        WidgetResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            instant_invite?: string | null;
            channels: components["schemas"]["WidgetChannel"][];
            members: components["schemas"]["WidgetMember"][];
            /** Format: int32 */
            presence_count: number;
        };
        WidgetSettingsResponse: {
            enabled: boolean;
            channel_id?: null | components["schemas"]["SnowflakeType"];
        };
        WidgetUserDiscriminator: string & "0000";
        /** @description A single error, either for an API response or a specific field. */
        Error: {
            /** @description Discord internal error code. See error code reference */
            code: number;
            /** @description Human-readable error message */
            message: string;
        };
        InnerErrors: {
            /** @description The list of errors for this field */
            _errors: components["schemas"]["Error"][];
        };
        ErrorDetails: {
            [key: string]: components["schemas"]["ErrorDetails"];
        } | components["schemas"]["InnerErrors"];
        /** @description Errors object returned by the Discord API */
        ErrorResponse: components["schemas"]["Error"] & {
            errors?: components["schemas"]["ErrorDetails"];
        };
        /** @description Ratelimit error object returned by the Discord API */
        RatelimitedResponse: components["schemas"]["Error"] & {
            /** @description The number of seconds to wait before retrying your request */
            retry_after: number;
            /** @description Whether you are being ratelimited by the global ratelimit or a per-endpoint ratelimit */
            global: boolean;
        };
    };
    responses: {
        /** @description Client error response */
        ClientErrorResponse: {
            headers: {
                "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorResponse"];
            };
        };
        /** @description Client ratelimited response */
        ClientRatelimitedResponse: {
            headers: {
                "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["RatelimitedResponse"];
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: {
        /** @description The maximum number of requests that can be made in the current ratelimit window */
        "X-RateLimit-Limit": number;
        /** @description The number of requests remaining in the current ratelimit window */
        "X-RateLimit-Remaining": number;
        /** @description A unix timestamp in seconds at which the current ratelimit window resets */
        "X-RateLimit-Reset": number;
        /** @description The duration in seconds until the current ratelimit window resets */
        "X-RateLimit-Reset-After": number;
        /** @description The bucket that the request belongs to */
        "X-RateLimit-Bucket": string;
    };
    pathItems: never;
}
export type SchemaAccountResponse = components['schemas']['AccountResponse'];
export type SchemaActionRowComponentForMessageRequest = components['schemas']['ActionRowComponentForMessageRequest'];
export type SchemaActionRowComponentForModalRequest = components['schemas']['ActionRowComponentForModalRequest'];
export type SchemaActionRowComponentResponse = components['schemas']['ActionRowComponentResponse'];
export type SchemaActivitiesAttachmentResponse = components['schemas']['ActivitiesAttachmentResponse'];
export type SchemaAfkTimeouts = components['schemas']['AfkTimeouts'];
export type SchemaAllowedMentionTypes = components['schemas']['AllowedMentionTypes'];
export type SchemaApplicationCommandAttachmentOption = components['schemas']['ApplicationCommandAttachmentOption'];
export type SchemaApplicationCommandAttachmentOptionResponse = components['schemas']['ApplicationCommandAttachmentOptionResponse'];
export type SchemaApplicationCommandAutocompleteCallbackRequest = components['schemas']['ApplicationCommandAutocompleteCallbackRequest'];
export type SchemaApplicationCommandBooleanOption = components['schemas']['ApplicationCommandBooleanOption'];
export type SchemaApplicationCommandBooleanOptionResponse = components['schemas']['ApplicationCommandBooleanOptionResponse'];
export type SchemaApplicationCommandChannelOption = components['schemas']['ApplicationCommandChannelOption'];
export type SchemaApplicationCommandChannelOptionResponse = components['schemas']['ApplicationCommandChannelOptionResponse'];
export type SchemaApplicationCommandCreateRequest = components['schemas']['ApplicationCommandCreateRequest'];
export type SchemaApplicationCommandHandler = components['schemas']['ApplicationCommandHandler'];
export type SchemaApplicationCommandIntegerOption = components['schemas']['ApplicationCommandIntegerOption'];
export type SchemaApplicationCommandIntegerOptionResponse = components['schemas']['ApplicationCommandIntegerOptionResponse'];
export type SchemaApplicationCommandInteractionMetadataResponse = components['schemas']['ApplicationCommandInteractionMetadataResponse'];
export type SchemaApplicationCommandMentionableOption = components['schemas']['ApplicationCommandMentionableOption'];
export type SchemaApplicationCommandMentionableOptionResponse = components['schemas']['ApplicationCommandMentionableOptionResponse'];
export type SchemaApplicationCommandNumberOption = components['schemas']['ApplicationCommandNumberOption'];
export type SchemaApplicationCommandNumberOptionResponse = components['schemas']['ApplicationCommandNumberOptionResponse'];
export type SchemaApplicationCommandOptionIntegerChoice = components['schemas']['ApplicationCommandOptionIntegerChoice'];
export type SchemaApplicationCommandOptionIntegerChoiceResponse = components['schemas']['ApplicationCommandOptionIntegerChoiceResponse'];
export type SchemaApplicationCommandOptionNumberChoice = components['schemas']['ApplicationCommandOptionNumberChoice'];
export type SchemaApplicationCommandOptionNumberChoiceResponse = components['schemas']['ApplicationCommandOptionNumberChoiceResponse'];
export type SchemaApplicationCommandOptionStringChoice = components['schemas']['ApplicationCommandOptionStringChoice'];
export type SchemaApplicationCommandOptionStringChoiceResponse = components['schemas']['ApplicationCommandOptionStringChoiceResponse'];
export type SchemaApplicationCommandOptionType = components['schemas']['ApplicationCommandOptionType'];
export type SchemaApplicationCommandPatchRequestPartial = components['schemas']['ApplicationCommandPatchRequestPartial'];
export type SchemaApplicationCommandPermission = components['schemas']['ApplicationCommandPermission'];
export type SchemaApplicationCommandPermissionType = components['schemas']['ApplicationCommandPermissionType'];
export type SchemaApplicationCommandResponse = components['schemas']['ApplicationCommandResponse'];
export type SchemaApplicationCommandRoleOption = components['schemas']['ApplicationCommandRoleOption'];
export type SchemaApplicationCommandRoleOptionResponse = components['schemas']['ApplicationCommandRoleOptionResponse'];
export type SchemaApplicationCommandStringOption = components['schemas']['ApplicationCommandStringOption'];
export type SchemaApplicationCommandStringOptionResponse = components['schemas']['ApplicationCommandStringOptionResponse'];
export type SchemaApplicationCommandSubcommandGroupOption = components['schemas']['ApplicationCommandSubcommandGroupOption'];
export type SchemaApplicationCommandSubcommandGroupOptionResponse = components['schemas']['ApplicationCommandSubcommandGroupOptionResponse'];
export type SchemaApplicationCommandSubcommandOption = components['schemas']['ApplicationCommandSubcommandOption'];
export type SchemaApplicationCommandSubcommandOptionResponse = components['schemas']['ApplicationCommandSubcommandOptionResponse'];
export type SchemaApplicationCommandType = components['schemas']['ApplicationCommandType'];
export type SchemaApplicationCommandUpdateRequest = components['schemas']['ApplicationCommandUpdateRequest'];
export type SchemaApplicationCommandUserOption = components['schemas']['ApplicationCommandUserOption'];
export type SchemaApplicationCommandUserOptionResponse = components['schemas']['ApplicationCommandUserOptionResponse'];
export type SchemaApplicationExplicitContentFilterTypes = components['schemas']['ApplicationExplicitContentFilterTypes'];
export type SchemaApplicationFormPartial = components['schemas']['ApplicationFormPartial'];
export type SchemaApplicationIdentityProviderAuthType = components['schemas']['ApplicationIdentityProviderAuthType'];
export type SchemaApplicationIncomingWebhookResponse = components['schemas']['ApplicationIncomingWebhookResponse'];
export type SchemaApplicationIntegrationType = components['schemas']['ApplicationIntegrationType'];
export type SchemaApplicationIntegrationTypeConfiguration = components['schemas']['ApplicationIntegrationTypeConfiguration'];
export type SchemaApplicationIntegrationTypeConfigurationResponse = components['schemas']['ApplicationIntegrationTypeConfigurationResponse'];
export type SchemaApplicationOAuth2InstallParams = components['schemas']['ApplicationOAuth2InstallParams'];
export type SchemaApplicationOAuth2InstallParamsResponse = components['schemas']['ApplicationOAuth2InstallParamsResponse'];
export type SchemaApplicationResponse = components['schemas']['ApplicationResponse'];
export type SchemaApplicationRoleConnectionsMetadataItemRequest = components['schemas']['ApplicationRoleConnectionsMetadataItemRequest'];
export type SchemaApplicationRoleConnectionsMetadataItemResponse = components['schemas']['ApplicationRoleConnectionsMetadataItemResponse'];
export type SchemaApplicationTypes = components['schemas']['ApplicationTypes'];
export type SchemaApplicationUserRoleConnectionResponse = components['schemas']['ApplicationUserRoleConnectionResponse'];
export type SchemaAttachmentResponse = components['schemas']['AttachmentResponse'];
export type SchemaAuditLogActionTypes = components['schemas']['AuditLogActionTypes'];
export type SchemaAuditLogEntryResponse = components['schemas']['AuditLogEntryResponse'];
export type SchemaAuditLogObjectChangeResponse = components['schemas']['AuditLogObjectChangeResponse'];
export type SchemaAutomodActionType = components['schemas']['AutomodActionType'];
export type SchemaAutomodEventType = components['schemas']['AutomodEventType'];
export type SchemaAutomodKeywordPresetType = components['schemas']['AutomodKeywordPresetType'];
export type SchemaAutomodTriggerType = components['schemas']['AutomodTriggerType'];
export type SchemaAvailableLocalesEnum = components['schemas']['AvailableLocalesEnum'];
export type SchemaBaseCreateMessageCreateRequest = components['schemas']['BaseCreateMessageCreateRequest'];
export type SchemaBasicApplicationResponse = components['schemas']['BasicApplicationResponse'];
export type SchemaBasicMessageResponse = components['schemas']['BasicMessageResponse'];
export type SchemaBlockMessageAction = components['schemas']['BlockMessageAction'];
export type SchemaBlockMessageActionMetadata = components['schemas']['BlockMessageActionMetadata'];
export type SchemaBlockMessageActionMetadataResponse = components['schemas']['BlockMessageActionMetadataResponse'];
export type SchemaBlockMessageActionResponse = components['schemas']['BlockMessageActionResponse'];
export type SchemaBotAccountPatchRequest = components['schemas']['BotAccountPatchRequest'];
export type SchemaBotAddGuildMemberRequest = components['schemas']['BotAddGuildMemberRequest'];
export type SchemaBulkBanUsersResponse = components['schemas']['BulkBanUsersResponse'];
export type SchemaBulkLobbyMemberRequest = components['schemas']['BulkLobbyMemberRequest'];
export type SchemaButtonComponentForMessageRequest = components['schemas']['ButtonComponentForMessageRequest'];
export type SchemaButtonComponentResponse = components['schemas']['ButtonComponentResponse'];
export type SchemaButtonStyleTypes = components['schemas']['ButtonStyleTypes'];
export type SchemaChannelFollowerResponse = components['schemas']['ChannelFollowerResponse'];
export type SchemaChannelFollowerWebhookResponse = components['schemas']['ChannelFollowerWebhookResponse'];
export type SchemaChannelPermissionOverwriteRequest = components['schemas']['ChannelPermissionOverwriteRequest'];
export type SchemaChannelPermissionOverwriteResponse = components['schemas']['ChannelPermissionOverwriteResponse'];
export type SchemaChannelPermissionOverwrites = components['schemas']['ChannelPermissionOverwrites'];
export type SchemaChannelSelectComponentForMessageRequest = components['schemas']['ChannelSelectComponentForMessageRequest'];
export type SchemaChannelSelectComponentResponse = components['schemas']['ChannelSelectComponentResponse'];
export type SchemaChannelSelectDefaultValue = components['schemas']['ChannelSelectDefaultValue'];
export type SchemaChannelSelectDefaultValueResponse = components['schemas']['ChannelSelectDefaultValueResponse'];
export type SchemaChannelTypes = components['schemas']['ChannelTypes'];
export type SchemaCommandPermissionResponse = components['schemas']['CommandPermissionResponse'];
export type SchemaCommandPermissionsResponse = components['schemas']['CommandPermissionsResponse'];
export type SchemaComponentEmojiForMessageRequest = components['schemas']['ComponentEmojiForMessageRequest'];
export type SchemaComponentEmojiResponse = components['schemas']['ComponentEmojiResponse'];
export type SchemaConfettiPotionCreateRequest = components['schemas']['ConfettiPotionCreateRequest'];
export type SchemaConnectedAccountGuildResponse = components['schemas']['ConnectedAccountGuildResponse'];
export type SchemaConnectedAccountIntegrationResponse = components['schemas']['ConnectedAccountIntegrationResponse'];
export type SchemaConnectedAccountProviders = components['schemas']['ConnectedAccountProviders'];
export type SchemaConnectedAccountResponse = components['schemas']['ConnectedAccountResponse'];
export type SchemaConnectedAccountVisibility = components['schemas']['ConnectedAccountVisibility'];
export type SchemaContainerComponentForMessageRequest = components['schemas']['ContainerComponentForMessageRequest'];
export type SchemaContainerComponentResponse = components['schemas']['ContainerComponentResponse'];
export type SchemaCreateEntitlementRequestData = components['schemas']['CreateEntitlementRequestData'];
export type SchemaCreateForumThreadRequest = components['schemas']['CreateForumThreadRequest'];
export type SchemaCreateGroupDmInviteRequest = components['schemas']['CreateGroupDMInviteRequest'];
export type SchemaCreateGuildChannelRequest = components['schemas']['CreateGuildChannelRequest'];
export type SchemaCreateGuildInviteRequest = components['schemas']['CreateGuildInviteRequest'];
export type SchemaCreateGuildRequestChannelItem = components['schemas']['CreateGuildRequestChannelItem'];
export type SchemaCreateGuildRequestRoleItem = components['schemas']['CreateGuildRequestRoleItem'];
export type SchemaCreateMessageInteractionCallbackRequest = components['schemas']['CreateMessageInteractionCallbackRequest'];
export type SchemaCreateMessageInteractionCallbackResponse = components['schemas']['CreateMessageInteractionCallbackResponse'];
export type SchemaCreateOrUpdateThreadTagRequest = components['schemas']['CreateOrUpdateThreadTagRequest'];
export type SchemaCreatePrivateChannelRequest = components['schemas']['CreatePrivateChannelRequest'];
export type SchemaCreateTextThreadWithMessageRequest = components['schemas']['CreateTextThreadWithMessageRequest'];
export type SchemaCreateTextThreadWithoutMessageRequest = components['schemas']['CreateTextThreadWithoutMessageRequest'];
export type SchemaCreatedThreadResponse = components['schemas']['CreatedThreadResponse'];
export type SchemaDefaultKeywordListTriggerMetadata = components['schemas']['DefaultKeywordListTriggerMetadata'];
export type SchemaDefaultKeywordListTriggerMetadataResponse = components['schemas']['DefaultKeywordListTriggerMetadataResponse'];
export type SchemaDefaultKeywordListUpsertRequest = components['schemas']['DefaultKeywordListUpsertRequest'];
export type SchemaDefaultKeywordListUpsertRequestPartial = components['schemas']['DefaultKeywordListUpsertRequestPartial'];
export type SchemaDefaultKeywordRuleResponse = components['schemas']['DefaultKeywordRuleResponse'];
export type SchemaDefaultReactionEmojiResponse = components['schemas']['DefaultReactionEmojiResponse'];
export type SchemaDiscordIntegrationResponse = components['schemas']['DiscordIntegrationResponse'];
export type SchemaEmbeddedActivityInstance = components['schemas']['EmbeddedActivityInstance'];
export type SchemaEmbeddedActivityLocationKind = components['schemas']['EmbeddedActivityLocationKind'];
export type SchemaEmojiResponse = components['schemas']['EmojiResponse'];
export type SchemaEntitlementOwnerTypes = components['schemas']['EntitlementOwnerTypes'];
export type SchemaEntitlementResponse = components['schemas']['EntitlementResponse'];
export type SchemaEntitlementTenantFulfillmentStatusResponse = components['schemas']['EntitlementTenantFulfillmentStatusResponse'];
export type SchemaEntitlementTypes = components['schemas']['EntitlementTypes'];
export type SchemaEntityMetadataExternal = components['schemas']['EntityMetadataExternal'];
export type SchemaEntityMetadataExternalResponse = components['schemas']['EntityMetadataExternalResponse'];
export type SchemaEntityMetadataStageInstance = components['schemas']['EntityMetadataStageInstance'];
export type SchemaEntityMetadataStageInstanceResponse = components['schemas']['EntityMetadataStageInstanceResponse'];
export type SchemaEntityMetadataVoice = components['schemas']['EntityMetadataVoice'];
export type SchemaEntityMetadataVoiceResponse = components['schemas']['EntityMetadataVoiceResponse'];
export type SchemaExternalConnectionIntegrationResponse = components['schemas']['ExternalConnectionIntegrationResponse'];
export type SchemaExternalScheduledEventCreateRequest = components['schemas']['ExternalScheduledEventCreateRequest'];
export type SchemaExternalScheduledEventPatchRequestPartial = components['schemas']['ExternalScheduledEventPatchRequestPartial'];
export type SchemaExternalScheduledEventResponse = components['schemas']['ExternalScheduledEventResponse'];
export type SchemaFileComponentForMessageRequest = components['schemas']['FileComponentForMessageRequest'];
export type SchemaFileComponentResponse = components['schemas']['FileComponentResponse'];
export type SchemaFlagToChannelAction = components['schemas']['FlagToChannelAction'];
export type SchemaFlagToChannelActionMetadata = components['schemas']['FlagToChannelActionMetadata'];
export type SchemaFlagToChannelActionMetadataResponse = components['schemas']['FlagToChannelActionMetadataResponse'];
export type SchemaFlagToChannelActionResponse = components['schemas']['FlagToChannelActionResponse'];
export type SchemaForumLayout = components['schemas']['ForumLayout'];
export type SchemaForumTagResponse = components['schemas']['ForumTagResponse'];
export type SchemaFriendInviteResponse = components['schemas']['FriendInviteResponse'];
export type SchemaGatewayBotResponse = components['schemas']['GatewayBotResponse'];
export type SchemaGatewayBotSessionStartLimitResponse = components['schemas']['GatewayBotSessionStartLimitResponse'];
export type SchemaGatewayResponse = components['schemas']['GatewayResponse'];
export type SchemaGithubAuthor = components['schemas']['GithubAuthor'];
export type SchemaGithubCheckApp = components['schemas']['GithubCheckApp'];
export type SchemaGithubCheckPullRequest = components['schemas']['GithubCheckPullRequest'];
export type SchemaGithubCheckRun = components['schemas']['GithubCheckRun'];
export type SchemaGithubCheckRunOutput = components['schemas']['GithubCheckRunOutput'];
export type SchemaGithubCheckSuite = components['schemas']['GithubCheckSuite'];
export type SchemaGithubComment = components['schemas']['GithubComment'];
export type SchemaGithubCommit = components['schemas']['GithubCommit'];
export type SchemaGithubDiscussion = components['schemas']['GithubDiscussion'];
export type SchemaGithubIssue = components['schemas']['GithubIssue'];
export type SchemaGithubRelease = components['schemas']['GithubRelease'];
export type SchemaGithubRepository = components['schemas']['GithubRepository'];
export type SchemaGithubReview = components['schemas']['GithubReview'];
export type SchemaGithubUser = components['schemas']['GithubUser'];
export type SchemaGithubWebhook = components['schemas']['GithubWebhook'];
export type SchemaGroupDmInviteResponse = components['schemas']['GroupDMInviteResponse'];
export type SchemaGuildAuditLogResponse = components['schemas']['GuildAuditLogResponse'];
export type SchemaGuildBanResponse = components['schemas']['GuildBanResponse'];
export type SchemaGuildChannelLocation = components['schemas']['GuildChannelLocation'];
export type SchemaGuildChannelResponse = components['schemas']['GuildChannelResponse'];
export type SchemaGuildCreateRequest = components['schemas']['GuildCreateRequest'];
export type SchemaGuildExplicitContentFilterTypes = components['schemas']['GuildExplicitContentFilterTypes'];
export type SchemaGuildFeatures = components['schemas']['GuildFeatures'];
export type SchemaGuildHomeSettingsResponse = components['schemas']['GuildHomeSettingsResponse'];
export type SchemaGuildIncomingWebhookResponse = components['schemas']['GuildIncomingWebhookResponse'];
export type SchemaGuildInviteResponse = components['schemas']['GuildInviteResponse'];
export type SchemaGuildMfaLevel = components['schemas']['GuildMFALevel'];
export type SchemaGuildMfaLevelResponse = components['schemas']['GuildMFALevelResponse'];
export type SchemaGuildMemberResponse = components['schemas']['GuildMemberResponse'];
export type SchemaGuildNsfwContentLevel = components['schemas']['GuildNSFWContentLevel'];
export type SchemaGuildOnboardingMode = components['schemas']['GuildOnboardingMode'];
export type SchemaGuildOnboardingResponse = components['schemas']['GuildOnboardingResponse'];
export type SchemaGuildPatchRequestPartial = components['schemas']['GuildPatchRequestPartial'];
export type SchemaGuildPreviewResponse = components['schemas']['GuildPreviewResponse'];
export type SchemaGuildProductPurchaseResponse = components['schemas']['GuildProductPurchaseResponse'];
export type SchemaGuildPruneResponse = components['schemas']['GuildPruneResponse'];
export type SchemaGuildResponse = components['schemas']['GuildResponse'];
export type SchemaGuildRoleColorsResponse = components['schemas']['GuildRoleColorsResponse'];
export type SchemaGuildRoleResponse = components['schemas']['GuildRoleResponse'];
export type SchemaGuildRoleTagsResponse = components['schemas']['GuildRoleTagsResponse'];
export type SchemaGuildScheduledEventEntityTypes = components['schemas']['GuildScheduledEventEntityTypes'];
export type SchemaGuildScheduledEventPrivacyLevels = components['schemas']['GuildScheduledEventPrivacyLevels'];
export type SchemaGuildScheduledEventStatuses = components['schemas']['GuildScheduledEventStatuses'];
export type SchemaGuildStickerResponse = components['schemas']['GuildStickerResponse'];
export type SchemaGuildSubscriptionIntegrationResponse = components['schemas']['GuildSubscriptionIntegrationResponse'];
export type SchemaGuildTemplateChannelResponse = components['schemas']['GuildTemplateChannelResponse'];
export type SchemaGuildTemplateChannelTags = components['schemas']['GuildTemplateChannelTags'];
export type SchemaGuildTemplateResponse = components['schemas']['GuildTemplateResponse'];
export type SchemaGuildTemplateRoleResponse = components['schemas']['GuildTemplateRoleResponse'];
export type SchemaGuildTemplateSnapshotResponse = components['schemas']['GuildTemplateSnapshotResponse'];
export type SchemaGuildWelcomeChannel = components['schemas']['GuildWelcomeChannel'];
export type SchemaGuildWelcomeScreenChannelResponse = components['schemas']['GuildWelcomeScreenChannelResponse'];
export type SchemaGuildWelcomeScreenResponse = components['schemas']['GuildWelcomeScreenResponse'];
export type SchemaGuildWithCountsResponse = components['schemas']['GuildWithCountsResponse'];
export type SchemaIconEmojiResponse = components['schemas']['IconEmojiResponse'];
export type SchemaIncomingWebhookInteractionRequest = components['schemas']['IncomingWebhookInteractionRequest'];
export type SchemaIncomingWebhookRequestPartial = components['schemas']['IncomingWebhookRequestPartial'];
export type SchemaIncomingWebhookUpdateForInteractionCallbackRequestPartial = components['schemas']['IncomingWebhookUpdateForInteractionCallbackRequestPartial'];
export type SchemaIncomingWebhookUpdateRequestPartial = components['schemas']['IncomingWebhookUpdateRequestPartial'];
export type SchemaInt53Type = components['schemas']['Int53Type'];
export type SchemaIntegrationApplicationResponse = components['schemas']['IntegrationApplicationResponse'];
export type SchemaIntegrationExpireBehaviorTypes = components['schemas']['IntegrationExpireBehaviorTypes'];
export type SchemaIntegrationExpireGracePeriodTypes = components['schemas']['IntegrationExpireGracePeriodTypes'];
export type SchemaIntegrationTypes = components['schemas']['IntegrationTypes'];
export type SchemaInteractionApplicationCommandAutocompleteCallbackIntegerData = components['schemas']['InteractionApplicationCommandAutocompleteCallbackIntegerData'];
export type SchemaInteractionApplicationCommandAutocompleteCallbackNumberData = components['schemas']['InteractionApplicationCommandAutocompleteCallbackNumberData'];
export type SchemaInteractionApplicationCommandAutocompleteCallbackStringData = components['schemas']['InteractionApplicationCommandAutocompleteCallbackStringData'];
export type SchemaInteractionCallbackResponse = components['schemas']['InteractionCallbackResponse'];
export type SchemaInteractionCallbackTypes = components['schemas']['InteractionCallbackTypes'];
export type SchemaInteractionContextType = components['schemas']['InteractionContextType'];
export type SchemaInteractionResponse = components['schemas']['InteractionResponse'];
export type SchemaInteractionTypes = components['schemas']['InteractionTypes'];
export type SchemaInviteApplicationResponse = components['schemas']['InviteApplicationResponse'];
export type SchemaInviteChannelRecipientResponse = components['schemas']['InviteChannelRecipientResponse'];
export type SchemaInviteChannelResponse = components['schemas']['InviteChannelResponse'];
export type SchemaInviteGuildResponse = components['schemas']['InviteGuildResponse'];
export type SchemaInviteTargetTypes = components['schemas']['InviteTargetTypes'];
export type SchemaInviteTypes = components['schemas']['InviteTypes'];
export type SchemaKeywordRuleResponse = components['schemas']['KeywordRuleResponse'];
export type SchemaKeywordTriggerMetadata = components['schemas']['KeywordTriggerMetadata'];
export type SchemaKeywordTriggerMetadataResponse = components['schemas']['KeywordTriggerMetadataResponse'];
export type SchemaKeywordUpsertRequest = components['schemas']['KeywordUpsertRequest'];
export type SchemaKeywordUpsertRequestPartial = components['schemas']['KeywordUpsertRequestPartial'];
export type SchemaLaunchActivityInteractionCallbackRequest = components['schemas']['LaunchActivityInteractionCallbackRequest'];
export type SchemaLaunchActivityInteractionCallbackResponse = components['schemas']['LaunchActivityInteractionCallbackResponse'];
export type SchemaListApplicationEmojisResponse = components['schemas']['ListApplicationEmojisResponse'];
export type SchemaListGuildSoundboardSoundsResponse = components['schemas']['ListGuildSoundboardSoundsResponse'];
export type SchemaLobbyGuildInviteResponse = components['schemas']['LobbyGuildInviteResponse'];
export type SchemaLobbyMemberRequest = components['schemas']['LobbyMemberRequest'];
export type SchemaLobbyMemberResponse = components['schemas']['LobbyMemberResponse'];
export type SchemaLobbyMessageResponse = components['schemas']['LobbyMessageResponse'];
export type SchemaLobbyResponse = components['schemas']['LobbyResponse'];
export type SchemaMlSpamRuleResponse = components['schemas']['MLSpamRuleResponse'];
export type SchemaMlSpamTriggerMetadata = components['schemas']['MLSpamTriggerMetadata'];
export type SchemaMlSpamTriggerMetadataResponse = components['schemas']['MLSpamTriggerMetadataResponse'];
export type SchemaMlSpamUpsertRequest = components['schemas']['MLSpamUpsertRequest'];
export type SchemaMlSpamUpsertRequestPartial = components['schemas']['MLSpamUpsertRequestPartial'];
export type SchemaMediaGalleryComponentForMessageRequest = components['schemas']['MediaGalleryComponentForMessageRequest'];
export type SchemaMediaGalleryComponentResponse = components['schemas']['MediaGalleryComponentResponse'];
export type SchemaMediaGalleryItemRequest = components['schemas']['MediaGalleryItemRequest'];
export type SchemaMediaGalleryItemResponse = components['schemas']['MediaGalleryItemResponse'];
export type SchemaMentionSpamRuleResponse = components['schemas']['MentionSpamRuleResponse'];
export type SchemaMentionSpamTriggerMetadata = components['schemas']['MentionSpamTriggerMetadata'];
export type SchemaMentionSpamTriggerMetadataResponse = components['schemas']['MentionSpamTriggerMetadataResponse'];
export type SchemaMentionSpamUpsertRequest = components['schemas']['MentionSpamUpsertRequest'];
export type SchemaMentionSpamUpsertRequestPartial = components['schemas']['MentionSpamUpsertRequestPartial'];
export type SchemaMentionableSelectComponentForMessageRequest = components['schemas']['MentionableSelectComponentForMessageRequest'];
export type SchemaMentionableSelectComponentResponse = components['schemas']['MentionableSelectComponentResponse'];
export type SchemaMessageActivityResponse = components['schemas']['MessageActivityResponse'];
export type SchemaMessageAllowedMentionsRequest = components['schemas']['MessageAllowedMentionsRequest'];
export type SchemaMessageAttachmentRequest = components['schemas']['MessageAttachmentRequest'];
export type SchemaMessageAttachmentResponse = components['schemas']['MessageAttachmentResponse'];
export type SchemaMessageCallResponse = components['schemas']['MessageCallResponse'];
export type SchemaMessageComponentInteractionMetadataResponse = components['schemas']['MessageComponentInteractionMetadataResponse'];
export type SchemaMessageComponentSeparatorSpacingSize = components['schemas']['MessageComponentSeparatorSpacingSize'];
export type SchemaMessageComponentTypes = components['schemas']['MessageComponentTypes'];
export type SchemaMessageCreateRequest = components['schemas']['MessageCreateRequest'];
export type SchemaMessageEditRequestPartial = components['schemas']['MessageEditRequestPartial'];
export type SchemaMessageEmbedAuthorResponse = components['schemas']['MessageEmbedAuthorResponse'];
export type SchemaMessageEmbedFieldResponse = components['schemas']['MessageEmbedFieldResponse'];
export type SchemaMessageEmbedFooterResponse = components['schemas']['MessageEmbedFooterResponse'];
export type SchemaMessageEmbedImageResponse = components['schemas']['MessageEmbedImageResponse'];
export type SchemaMessageEmbedProviderResponse = components['schemas']['MessageEmbedProviderResponse'];
export type SchemaMessageEmbedResponse = components['schemas']['MessageEmbedResponse'];
export type SchemaMessageEmbedVideoResponse = components['schemas']['MessageEmbedVideoResponse'];
export type SchemaMessageInteractionResponse = components['schemas']['MessageInteractionResponse'];
export type SchemaMessageMentionChannelResponse = components['schemas']['MessageMentionChannelResponse'];
export type SchemaMessageReactionCountDetailsResponse = components['schemas']['MessageReactionCountDetailsResponse'];
export type SchemaMessageReactionEmojiResponse = components['schemas']['MessageReactionEmojiResponse'];
export type SchemaMessageReactionResponse = components['schemas']['MessageReactionResponse'];
export type SchemaMessageReferenceRequest = components['schemas']['MessageReferenceRequest'];
export type SchemaMessageReferenceResponse = components['schemas']['MessageReferenceResponse'];
export type SchemaMessageReferenceType = components['schemas']['MessageReferenceType'];
export type SchemaMessageResponse = components['schemas']['MessageResponse'];
export type SchemaMessageRoleSubscriptionDataResponse = components['schemas']['MessageRoleSubscriptionDataResponse'];
export type SchemaMessageSnapshotResponse = components['schemas']['MessageSnapshotResponse'];
export type SchemaMessageStickerItemResponse = components['schemas']['MessageStickerItemResponse'];
export type SchemaMessageType = components['schemas']['MessageType'];
export type SchemaMetadataItemTypes = components['schemas']['MetadataItemTypes'];
export type SchemaMinimalContentMessageResponse = components['schemas']['MinimalContentMessageResponse'];
export type SchemaModalInteractionCallbackRequest = components['schemas']['ModalInteractionCallbackRequest'];
export type SchemaModalInteractionCallbackRequestData = components['schemas']['ModalInteractionCallbackRequestData'];
export type SchemaModalSubmitInteractionMetadataResponse = components['schemas']['ModalSubmitInteractionMetadataResponse'];
export type SchemaMyGuildResponse = components['schemas']['MyGuildResponse'];
export type SchemaNameplatePalette = components['schemas']['NameplatePalette'];
export type SchemaNewMemberActionResponse = components['schemas']['NewMemberActionResponse'];
export type SchemaNewMemberActionType = components['schemas']['NewMemberActionType'];
export type SchemaOAuth2GetAuthorizationResponse = components['schemas']['OAuth2GetAuthorizationResponse'];
export type SchemaOAuth2GetKeys = components['schemas']['OAuth2GetKeys'];
export type SchemaOAuth2GetOpenIdConnectUserInfoResponse = components['schemas']['OAuth2GetOpenIDConnectUserInfoResponse'];
export type SchemaOAuth2Key = components['schemas']['OAuth2Key'];
export type SchemaOAuth2Scopes = components['schemas']['OAuth2Scopes'];
export type SchemaOnboardingPromptOptionRequest = components['schemas']['OnboardingPromptOptionRequest'];
export type SchemaOnboardingPromptOptionResponse = components['schemas']['OnboardingPromptOptionResponse'];
export type SchemaOnboardingPromptResponse = components['schemas']['OnboardingPromptResponse'];
export type SchemaOnboardingPromptType = components['schemas']['OnboardingPromptType'];
export type SchemaPartialDiscordIntegrationResponse = components['schemas']['PartialDiscordIntegrationResponse'];
export type SchemaPartialExternalConnectionIntegrationResponse = components['schemas']['PartialExternalConnectionIntegrationResponse'];
export type SchemaPartialGuildSubscriptionIntegrationResponse = components['schemas']['PartialGuildSubscriptionIntegrationResponse'];
export type SchemaPinnedMessageResponse = components['schemas']['PinnedMessageResponse'];
export type SchemaPinnedMessagesResponse = components['schemas']['PinnedMessagesResponse'];
export type SchemaPollAnswerCreateRequest = components['schemas']['PollAnswerCreateRequest'];
export type SchemaPollAnswerDetailsResponse = components['schemas']['PollAnswerDetailsResponse'];
export type SchemaPollAnswerResponse = components['schemas']['PollAnswerResponse'];
export type SchemaPollCreateRequest = components['schemas']['PollCreateRequest'];
export type SchemaPollEmoji = components['schemas']['PollEmoji'];
export type SchemaPollEmojiCreateRequest = components['schemas']['PollEmojiCreateRequest'];
export type SchemaPollLayoutTypes = components['schemas']['PollLayoutTypes'];
export type SchemaPollMedia = components['schemas']['PollMedia'];
export type SchemaPollMediaCreateRequest = components['schemas']['PollMediaCreateRequest'];
export type SchemaPollMediaResponse = components['schemas']['PollMediaResponse'];
export type SchemaPollResponse = components['schemas']['PollResponse'];
export type SchemaPollResultsEntryResponse = components['schemas']['PollResultsEntryResponse'];
export type SchemaPollResultsResponse = components['schemas']['PollResultsResponse'];
export type SchemaPongInteractionCallbackRequest = components['schemas']['PongInteractionCallbackRequest'];
export type SchemaPremiumGuildTiers = components['schemas']['PremiumGuildTiers'];
export type SchemaPremiumTypes = components['schemas']['PremiumTypes'];
export type SchemaPrivateApplicationResponse = components['schemas']['PrivateApplicationResponse'];
export type SchemaPrivateChannelLocation = components['schemas']['PrivateChannelLocation'];
export type SchemaPrivateChannelResponse = components['schemas']['PrivateChannelResponse'];
export type SchemaPrivateGroupChannelResponse = components['schemas']['PrivateGroupChannelResponse'];
export type SchemaPrivateGuildMemberResponse = components['schemas']['PrivateGuildMemberResponse'];
export type SchemaProvisionalTokenResponse = components['schemas']['ProvisionalTokenResponse'];
export type SchemaPurchaseNotificationResponse = components['schemas']['PurchaseNotificationResponse'];
export type SchemaPurchaseType = components['schemas']['PurchaseType'];
export type SchemaQuarantineUserAction = components['schemas']['QuarantineUserAction'];
export type SchemaQuarantineUserActionMetadata = components['schemas']['QuarantineUserActionMetadata'];
export type SchemaQuarantineUserActionMetadataResponse = components['schemas']['QuarantineUserActionMetadataResponse'];
export type SchemaQuarantineUserActionResponse = components['schemas']['QuarantineUserActionResponse'];
export type SchemaReactionTypes = components['schemas']['ReactionTypes'];
export type SchemaResolvedObjectsResponse = components['schemas']['ResolvedObjectsResponse'];
export type SchemaResourceChannelResponse = components['schemas']['ResourceChannelResponse'];
export type SchemaRichEmbed = components['schemas']['RichEmbed'];
export type SchemaRichEmbedAuthor = components['schemas']['RichEmbedAuthor'];
export type SchemaRichEmbedField = components['schemas']['RichEmbedField'];
export type SchemaRichEmbedFooter = components['schemas']['RichEmbedFooter'];
export type SchemaRichEmbedImage = components['schemas']['RichEmbedImage'];
export type SchemaRichEmbedProvider = components['schemas']['RichEmbedProvider'];
export type SchemaRichEmbedThumbnail = components['schemas']['RichEmbedThumbnail'];
export type SchemaRichEmbedVideo = components['schemas']['RichEmbedVideo'];
export type SchemaRoleSelectComponentForMessageRequest = components['schemas']['RoleSelectComponentForMessageRequest'];
export type SchemaRoleSelectComponentResponse = components['schemas']['RoleSelectComponentResponse'];
export type SchemaRoleSelectDefaultValue = components['schemas']['RoleSelectDefaultValue'];
export type SchemaRoleSelectDefaultValueResponse = components['schemas']['RoleSelectDefaultValueResponse'];
export type SchemaSdkMessageRequest = components['schemas']['SDKMessageRequest'];
export type SchemaScheduledEventResponse = components['schemas']['ScheduledEventResponse'];
export type SchemaScheduledEventUserResponse = components['schemas']['ScheduledEventUserResponse'];
export type SchemaSectionComponentForMessageRequest = components['schemas']['SectionComponentForMessageRequest'];
export type SchemaSectionComponentResponse = components['schemas']['SectionComponentResponse'];
export type SchemaSeparatorComponentForMessageRequest = components['schemas']['SeparatorComponentForMessageRequest'];
export type SchemaSeparatorComponentResponse = components['schemas']['SeparatorComponentResponse'];
export type SchemaSettingsEmojiResponse = components['schemas']['SettingsEmojiResponse'];
export type SchemaSlackWebhook = components['schemas']['SlackWebhook'];
export type SchemaSnowflakeSelectDefaultValueTypes = components['schemas']['SnowflakeSelectDefaultValueTypes'];
export type SchemaSnowflakeType = components['schemas']['SnowflakeType'];
export type SchemaSortingOrder = components['schemas']['SortingOrder'];
export type SchemaSoundboardCreateRequest = components['schemas']['SoundboardCreateRequest'];
export type SchemaSoundboardPatchRequestPartial = components['schemas']['SoundboardPatchRequestPartial'];
export type SchemaSoundboardSoundResponse = components['schemas']['SoundboardSoundResponse'];
export type SchemaSoundboardSoundSendRequest = components['schemas']['SoundboardSoundSendRequest'];
export type SchemaSpamLinkRuleResponse = components['schemas']['SpamLinkRuleResponse'];
export type SchemaSpamLinkTriggerMetadataResponse = components['schemas']['SpamLinkTriggerMetadataResponse'];
export type SchemaStageInstanceResponse = components['schemas']['StageInstanceResponse'];
export type SchemaStageInstancesPrivacyLevels = components['schemas']['StageInstancesPrivacyLevels'];
export type SchemaStageScheduledEventCreateRequest = components['schemas']['StageScheduledEventCreateRequest'];
export type SchemaStageScheduledEventPatchRequestPartial = components['schemas']['StageScheduledEventPatchRequestPartial'];
export type SchemaStageScheduledEventResponse = components['schemas']['StageScheduledEventResponse'];
export type SchemaStandardStickerResponse = components['schemas']['StandardStickerResponse'];
export type SchemaStickerFormatTypes = components['schemas']['StickerFormatTypes'];
export type SchemaStickerPackCollectionResponse = components['schemas']['StickerPackCollectionResponse'];
export type SchemaStickerPackResponse = components['schemas']['StickerPackResponse'];
export type SchemaStickerTypes = components['schemas']['StickerTypes'];
export type SchemaStringSelectComponentForMessageRequest = components['schemas']['StringSelectComponentForMessageRequest'];
export type SchemaStringSelectComponentResponse = components['schemas']['StringSelectComponentResponse'];
export type SchemaStringSelectOptionForMessageRequest = components['schemas']['StringSelectOptionForMessageRequest'];
export type SchemaStringSelectOptionResponse = components['schemas']['StringSelectOptionResponse'];
export type SchemaTeamMemberResponse = components['schemas']['TeamMemberResponse'];
export type SchemaTeamMembershipStates = components['schemas']['TeamMembershipStates'];
export type SchemaTeamResponse = components['schemas']['TeamResponse'];
export type SchemaTextDisplayComponentForMessageRequest = components['schemas']['TextDisplayComponentForMessageRequest'];
export type SchemaTextDisplayComponentResponse = components['schemas']['TextDisplayComponentResponse'];
export type SchemaTextInputComponentForModalRequest = components['schemas']['TextInputComponentForModalRequest'];
export type SchemaTextInputComponentResponse = components['schemas']['TextInputComponentResponse'];
export type SchemaTextInputStyleTypes = components['schemas']['TextInputStyleTypes'];
export type SchemaThreadAutoArchiveDuration = components['schemas']['ThreadAutoArchiveDuration'];
export type SchemaThreadMemberResponse = components['schemas']['ThreadMemberResponse'];
export type SchemaThreadMetadataResponse = components['schemas']['ThreadMetadataResponse'];
export type SchemaThreadResponse = components['schemas']['ThreadResponse'];
export type SchemaThreadSearchResponse = components['schemas']['ThreadSearchResponse'];
export type SchemaThreadSearchTagSetting = components['schemas']['ThreadSearchTagSetting'];
export type SchemaThreadSortOrder = components['schemas']['ThreadSortOrder'];
export type SchemaThreadSortingMode = components['schemas']['ThreadSortingMode'];
export type SchemaThreadsResponse = components['schemas']['ThreadsResponse'];
export type SchemaThumbnailComponentForMessageRequest = components['schemas']['ThumbnailComponentForMessageRequest'];
export type SchemaThumbnailComponentResponse = components['schemas']['ThumbnailComponentResponse'];
export type SchemaTypingIndicatorResponse = components['schemas']['TypingIndicatorResponse'];
export type SchemaUInt32Type = components['schemas']['UInt32Type'];
export type SchemaUnfurledMediaRequest = components['schemas']['UnfurledMediaRequest'];
export type SchemaUnfurledMediaRequestWithAttachmentReferenceRequired = components['schemas']['UnfurledMediaRequestWithAttachmentReferenceRequired'];
export type SchemaUnfurledMediaResponse = components['schemas']['UnfurledMediaResponse'];
export type SchemaUpdateApplicationUserRoleConnectionRequest = components['schemas']['UpdateApplicationUserRoleConnectionRequest'];
export type SchemaUpdateDmRequestPartial = components['schemas']['UpdateDMRequestPartial'];
export type SchemaUpdateDefaultReactionEmojiRequest = components['schemas']['UpdateDefaultReactionEmojiRequest'];
export type SchemaUpdateGroupDmRequestPartial = components['schemas']['UpdateGroupDMRequestPartial'];
export type SchemaUpdateGuildChannelRequestPartial = components['schemas']['UpdateGuildChannelRequestPartial'];
export type SchemaUpdateGuildOnboardingRequest = components['schemas']['UpdateGuildOnboardingRequest'];
export type SchemaUpdateMessageInteractionCallbackRequest = components['schemas']['UpdateMessageInteractionCallbackRequest'];
export type SchemaUpdateMessageInteractionCallbackResponse = components['schemas']['UpdateMessageInteractionCallbackResponse'];
export type SchemaUpdateOnboardingPromptRequest = components['schemas']['UpdateOnboardingPromptRequest'];
export type SchemaUpdateThreadRequestPartial = components['schemas']['UpdateThreadRequestPartial'];
export type SchemaUpdateThreadTagRequest = components['schemas']['UpdateThreadTagRequest'];
export type SchemaUserAvatarDecorationResponse = components['schemas']['UserAvatarDecorationResponse'];
export type SchemaUserCollectiblesResponse = components['schemas']['UserCollectiblesResponse'];
export type SchemaUserCommunicationDisabledAction = components['schemas']['UserCommunicationDisabledAction'];
export type SchemaUserCommunicationDisabledActionMetadata = components['schemas']['UserCommunicationDisabledActionMetadata'];
export type SchemaUserCommunicationDisabledActionMetadataResponse = components['schemas']['UserCommunicationDisabledActionMetadataResponse'];
export type SchemaUserCommunicationDisabledActionResponse = components['schemas']['UserCommunicationDisabledActionResponse'];
export type SchemaUserGuildOnboardingResponse = components['schemas']['UserGuildOnboardingResponse'];
export type SchemaUserNameplateResponse = components['schemas']['UserNameplateResponse'];
export type SchemaUserNotificationSettings = components['schemas']['UserNotificationSettings'];
export type SchemaUserPiiResponse = components['schemas']['UserPIIResponse'];
export type SchemaUserPrimaryGuildResponse = components['schemas']['UserPrimaryGuildResponse'];
export type SchemaUserResponse = components['schemas']['UserResponse'];
export type SchemaUserSelectComponentForMessageRequest = components['schemas']['UserSelectComponentForMessageRequest'];
export type SchemaUserSelectComponentResponse = components['schemas']['UserSelectComponentResponse'];
export type SchemaUserSelectDefaultValue = components['schemas']['UserSelectDefaultValue'];
export type SchemaUserSelectDefaultValueResponse = components['schemas']['UserSelectDefaultValueResponse'];
export type SchemaVanityUrlErrorResponse = components['schemas']['VanityURLErrorResponse'];
export type SchemaVanityUrlResponse = components['schemas']['VanityURLResponse'];
export type SchemaVerificationLevels = components['schemas']['VerificationLevels'];
export type SchemaVideoQualityModes = components['schemas']['VideoQualityModes'];
export type SchemaVoiceRegionResponse = components['schemas']['VoiceRegionResponse'];
export type SchemaVoiceScheduledEventCreateRequest = components['schemas']['VoiceScheduledEventCreateRequest'];
export type SchemaVoiceScheduledEventPatchRequestPartial = components['schemas']['VoiceScheduledEventPatchRequestPartial'];
export type SchemaVoiceScheduledEventResponse = components['schemas']['VoiceScheduledEventResponse'];
export type SchemaVoiceStateResponse = components['schemas']['VoiceStateResponse'];
export type SchemaWebhookSlackEmbed = components['schemas']['WebhookSlackEmbed'];
export type SchemaWebhookSlackEmbedField = components['schemas']['WebhookSlackEmbedField'];
export type SchemaWebhookSourceChannelResponse = components['schemas']['WebhookSourceChannelResponse'];
export type SchemaWebhookSourceGuildResponse = components['schemas']['WebhookSourceGuildResponse'];
export type SchemaWebhookTypes = components['schemas']['WebhookTypes'];
export type SchemaWelcomeMessageResponse = components['schemas']['WelcomeMessageResponse'];
export type SchemaWelcomeScreenPatchRequestPartial = components['schemas']['WelcomeScreenPatchRequestPartial'];
export type SchemaWidgetActivity = components['schemas']['WidgetActivity'];
export type SchemaWidgetChannel = components['schemas']['WidgetChannel'];
export type SchemaWidgetImageStyles = components['schemas']['WidgetImageStyles'];
export type SchemaWidgetMember = components['schemas']['WidgetMember'];
export type SchemaWidgetResponse = components['schemas']['WidgetResponse'];
export type SchemaWidgetSettingsResponse = components['schemas']['WidgetSettingsResponse'];
export type SchemaWidgetUserDiscriminator = components['schemas']['WidgetUserDiscriminator'];
export type SchemaError = components['schemas']['Error'];
export type SchemaInnerErrors = components['schemas']['InnerErrors'];
export type SchemaErrorDetails = components['schemas']['ErrorDetails'];
export type SchemaErrorResponse = components['schemas']['ErrorResponse'];
export type SchemaRatelimitedResponse = components['schemas']['RatelimitedResponse'];
export type ResponseClientErrorResponse = components['responses']['ClientErrorResponse'];
export type ResponseClientRatelimitedResponse = components['responses']['ClientRatelimitedResponse'];
export type HeaderXRateLimitLimit = components['headers']['X-RateLimit-Limit'];
export type HeaderXRateLimitRemaining = components['headers']['X-RateLimit-Remaining'];
export type HeaderXRateLimitReset = components['headers']['X-RateLimit-Reset'];
export type HeaderXRateLimitResetAfter = components['headers']['X-RateLimit-Reset-After'];
export type HeaderXRateLimitBucket = components['headers']['X-RateLimit-Bucket'];
export type $defs = Record<string, never>;
export interface operations {
    get_my_application: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_my_application */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateApplicationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_my_application: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationFormPartial"];
            };
        };
        responses: {
            /** @description 200 response for update_my_application */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateApplicationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_application: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_application */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateApplicationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_application: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationFormPartial"];
            };
        };
        responses: {
            /** @description 200 response for update_application */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateApplicationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    applications_get_activity_instance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                instance_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for applications_get_activity_instance */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmbeddedActivityInstance"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    upload_application_attachment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    file: string;
                };
            };
        };
        responses: {
            /** @description 200 response for upload_application_attachment */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActivitiesAttachmentResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_application_commands: {
        parameters: {
            query?: {
                with_localizations?: boolean;
            };
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_application_commands */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    bulk_set_application_commands: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandUpdateRequest"][] | null;
            };
        };
        responses: {
            /** @description 200 response for bulk_set_application_commands */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandCreateRequest"];
            };
        };
        responses: {
            /** @description 200 response for create_application_command */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            /** @description 201 response for create_application_command */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_application_command */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_application_command */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandPatchRequestPartial"];
            };
        };
        responses: {
            /** @description 200 response for update_application_command */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_application_emojis: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_application_emojis */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListApplicationEmojisResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_application_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    image: string;
                };
            };
        };
        responses: {
            /** @description 201 response for create_application_emoji */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_application_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_application_emoji */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_application_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_application_emoji */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_application_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                };
            };
        };
        responses: {
            /** @description 200 response for update_application_emoji */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_entitlements: {
        parameters: {
            query: {
                user_id?: components["schemas"]["SnowflakeType"];
                sku_ids: string | (null | components["schemas"]["SnowflakeType"])[];
                guild_id?: components["schemas"]["SnowflakeType"];
                before?: components["schemas"]["SnowflakeType"];
                after?: components["schemas"]["SnowflakeType"];
                limit?: number;
                exclude_ended?: boolean;
                exclude_deleted?: boolean;
                only_active?: boolean;
            };
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_entitlements */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (null | components["schemas"]["EntitlementResponse"])[];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_entitlement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateEntitlementRequestData"];
            };
        };
        responses: {
            /** @description 200 response for create_entitlement */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EntitlementResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_entitlement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                entitlement_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_entitlement */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EntitlementResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_entitlement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                entitlement_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_entitlement */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    consume_entitlement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                entitlement_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for consume_entitlement */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_application_commands: {
        parameters: {
            query?: {
                with_localizations?: boolean;
            };
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_application_commands */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    bulk_set_guild_application_commands: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandUpdateRequest"][] | null;
            };
        };
        responses: {
            /** @description 200 response for bulk_set_guild_application_commands */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_guild_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandCreateRequest"];
            };
        };
        responses: {
            /** @description 200 response for create_guild_application_command */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            /** @description 201 response for create_guild_application_command */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_application_command_permissions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_application_command_permissions */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommandPermissionsResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_application_command */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_guild_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_guild_application_command */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_guild_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandPatchRequestPartial"];
            };
        };
        responses: {
            /** @description 200 response for update_guild_application_command */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_application_command_permissions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_application_command_permissions */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommandPermissionsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    set_guild_application_command_permissions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    permissions?: components["schemas"]["ApplicationCommandPermission"][] | null;
                };
            };
        };
        responses: {
            /** @description 200 response for set_guild_application_command_permissions */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommandPermissionsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_application_role_connections_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_application_role_connections_metadata */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationRoleConnectionsMetadataItemResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_application_role_connections_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationRoleConnectionsMetadataItemRequest"][] | null;
            };
        };
        responses: {
            /** @description 200 response for update_application_role_connections_metadata */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationRoleConnectionsMetadataItemResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_channel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_channel */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildChannelResponse"] | components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"] | components["schemas"]["ThreadResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_channel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for delete_channel */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildChannelResponse"] | components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"] | components["schemas"]["ThreadResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_channel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateDMRequestPartial"] | components["schemas"]["UpdateGroupDMRequestPartial"] | components["schemas"]["UpdateGuildChannelRequestPartial"] | components["schemas"]["UpdateThreadRequestPartial"];
            };
        };
        responses: {
            /** @description 200 response for update_channel */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildChannelResponse"] | components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"] | components["schemas"]["ThreadResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    follow_channel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    webhook_channel_id: components["schemas"]["SnowflakeType"];
                };
            };
        };
        responses: {
            /** @description 200 response for follow_channel */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelFollowerResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_channel_invites: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_channel_invites */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["FriendInviteResponse"] | components["schemas"]["GroupDMInviteResponse"] | components["schemas"]["GuildInviteResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_channel_invite: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateGroupDMInviteRequest"] | components["schemas"]["CreateGuildInviteRequest"];
            };
        };
        responses: {
            /** @description 200 response for create_channel_invite */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FriendInviteResponse"] | components["schemas"]["GroupDMInviteResponse"] | components["schemas"]["GuildInviteResponse"];
                };
            };
            /** @description 204 response for create_channel_invite */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_messages: {
        parameters: {
            query?: {
                around?: components["schemas"]["SnowflakeType"];
                before?: components["schemas"]["SnowflakeType"];
                after?: components["schemas"]["SnowflakeType"];
                limit?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_messages */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MessageCreateRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["MessageCreateRequest"];
                "multipart/form-data": components["schemas"]["MessageCreateRequest"] & {
                    "files[0]"?: string;
                    "files[1]"?: string;
                    "files[2]"?: string;
                    "files[3]"?: string;
                    "files[4]"?: string;
                    "files[5]"?: string;
                    "files[6]"?: string;
                    "files[7]"?: string;
                    "files[8]"?: string;
                    "files[9]"?: string;
                };
            };
        };
        responses: {
            /** @description 200 response for create_message */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    bulk_delete_messages: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    messages: components["schemas"]["SnowflakeType"][];
                };
            };
        };
        responses: {
            /** @description 204 response for bulk_delete_messages */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_pins: {
        parameters: {
            query?: {
                before?: string;
                limit?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_pins */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PinnedMessagesResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_pin: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for create_pin */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_pin: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_pin */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_message */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_message */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MessageEditRequestPartial"];
                "application/x-www-form-urlencoded": components["schemas"]["MessageEditRequestPartial"];
                "multipart/form-data": components["schemas"]["MessageEditRequestPartial"] & {
                    "files[0]"?: string;
                    "files[1]"?: string;
                    "files[2]"?: string;
                    "files[3]"?: string;
                    "files[4]"?: string;
                    "files[5]"?: string;
                    "files[6]"?: string;
                    "files[7]"?: string;
                    "files[8]"?: string;
                    "files[9]"?: string;
                };
            };
        };
        responses: {
            /** @description 200 response for update_message */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    crosspost_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for crosspost_message */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_all_message_reactions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_all_message_reactions */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_message_reactions_by_emoji: {
        parameters: {
            query?: {
                after?: components["schemas"]["SnowflakeType"];
                limit?: number;
                type?: components["schemas"]["ReactionTypes"];
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_message_reactions_by_emoji */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_all_message_reactions_by_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_all_message_reactions_by_emoji */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    add_my_message_reaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for add_my_message_reaction */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_my_message_reaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_my_message_reaction */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_user_message_reaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_user_message_reaction */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_thread_from_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateTextThreadWithMessageRequest"];
            };
        };
        responses: {
            /** @description 201 response for create_thread_from_message */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    set_channel_permission_overwrite: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                overwrite_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    type?: null | components["schemas"]["ChannelPermissionOverwrites"];
                    allow?: number | null;
                    deny?: number | null;
                };
            };
        };
        responses: {
            /** @description 204 response for set_channel_permission_overwrite */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_channel_permission_overwrite: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                overwrite_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_channel_permission_overwrite */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    deprecated_list_pins: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for deprecated_list_pins */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    deprecated_create_pin: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for deprecated_create_pin */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    deprecated_delete_pin: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for deprecated_delete_pin */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_answer_voters: {
        parameters: {
            query?: {
                after?: components["schemas"]["SnowflakeType"];
                limit?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
                answer_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_answer_voters */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PollAnswerDetailsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    poll_expire: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for poll_expire */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    add_group_dm_user: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    access_token?: string | null;
                    nick?: string | null;
                };
            };
        };
        responses: {
            /** @description 201 response for add_group_dm_user */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"];
                };
            };
            /** @description 204 response for add_group_dm_user */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_group_dm_user: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_group_dm_user */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    send_soundboard_sound: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SoundboardSoundSendRequest"];
            };
        };
        responses: {
            /** @description 204 response for send_soundboard_sound */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_thread_members: {
        parameters: {
            query?: {
                with_member?: boolean;
                limit?: number;
                after?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_thread_members */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadMemberResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    join_thread: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for join_thread */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    leave_thread: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for leave_thread */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_thread_member: {
        parameters: {
            query?: {
                with_member?: boolean;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_thread_member */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadMemberResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    add_thread_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for add_thread_member */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_thread_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_thread_member */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_thread: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateForumThreadRequest"] | components["schemas"]["CreateTextThreadWithoutMessageRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["CreateForumThreadRequest"] | components["schemas"]["CreateTextThreadWithoutMessageRequest"];
                "multipart/form-data": components["schemas"]["CreateForumThreadRequest"] | components["schemas"]["CreateTextThreadWithoutMessageRequest"];
            };
        };
        responses: {
            /** @description 201 response for create_thread */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreatedThreadResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_private_archived_threads: {
        parameters: {
            query?: {
                before?: string;
                limit?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_private_archived_threads */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_public_archived_threads: {
        parameters: {
            query?: {
                before?: string;
                limit?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_public_archived_threads */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    thread_search: {
        parameters: {
            query?: {
                name?: string;
                slop?: number;
                min_id?: components["schemas"]["SnowflakeType"];
                max_id?: components["schemas"]["SnowflakeType"];
                tag?: string | components["schemas"]["SnowflakeType"][];
                tag_setting?: components["schemas"]["ThreadSearchTagSetting"];
                archived?: boolean;
                sort_by?: components["schemas"]["ThreadSortingMode"];
                sort_order?: components["schemas"]["SortingOrder"];
                limit?: number;
                offset?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for thread_search */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadSearchResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    trigger_typing_indicator: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for trigger_typing_indicator */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TypingIndicatorResponse"];
                };
            };
            /** @description 204 response for trigger_typing_indicator */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_my_private_archived_threads: {
        parameters: {
            query?: {
                before?: components["schemas"]["SnowflakeType"];
                limit?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_my_private_archived_threads */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_channel_webhooks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_channel_webhooks */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_webhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    avatar?: string | null;
                };
            };
        };
        responses: {
            /** @description 200 response for create_webhook */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildIncomingWebhookResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_gateway: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_gateway */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GatewayResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_bot_gateway: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_bot_gateway */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GatewayBotResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_guild: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GuildCreateRequest"];
            };
        };
        responses: {
            /** @description 201 response for create_guild */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_template: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_template */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_guild_from_template: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    icon?: string | null;
                };
            };
        };
        responses: {
            /** @description 201 response for create_guild_from_template */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild: {
        parameters: {
            query?: {
                with_counts?: boolean;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildWithCountsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_guild */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GuildPatchRequestPartial"];
            };
        };
        responses: {
            /** @description 200 response for update_guild */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_audit_log_entries: {
        parameters: {
            query?: {
                user_id?: components["schemas"]["SnowflakeType"];
                target_id?: components["schemas"]["SnowflakeType"];
                action_type?: number;
                before?: components["schemas"]["SnowflakeType"];
                after?: components["schemas"]["SnowflakeType"];
                limit?: number;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_audit_log_entries */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildAuditLogResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_auto_moderation_rules: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_auto_moderation_rules */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["DefaultKeywordRuleResponse"] | components["schemas"]["KeywordRuleResponse"] | components["schemas"]["MLSpamRuleResponse"] | components["schemas"]["MentionSpamRuleResponse"] | components["schemas"]["SpamLinkRuleResponse"] | null)[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_auto_moderation_rule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DefaultKeywordListUpsertRequest"] | components["schemas"]["KeywordUpsertRequest"] | components["schemas"]["MLSpamUpsertRequest"] | components["schemas"]["MentionSpamUpsertRequest"];
            };
        };
        responses: {
            /** @description 200 response for create_auto_moderation_rule */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DefaultKeywordRuleResponse"] | components["schemas"]["KeywordRuleResponse"] | components["schemas"]["MLSpamRuleResponse"] | components["schemas"]["MentionSpamRuleResponse"] | components["schemas"]["SpamLinkRuleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_auto_moderation_rule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                rule_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_auto_moderation_rule */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DefaultKeywordRuleResponse"] | components["schemas"]["KeywordRuleResponse"] | components["schemas"]["MLSpamRuleResponse"] | components["schemas"]["MentionSpamRuleResponse"] | components["schemas"]["SpamLinkRuleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_auto_moderation_rule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                rule_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_auto_moderation_rule */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_auto_moderation_rule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                rule_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DefaultKeywordListUpsertRequestPartial"] | components["schemas"]["KeywordUpsertRequestPartial"] | components["schemas"]["MLSpamUpsertRequestPartial"] | components["schemas"]["MentionSpamUpsertRequestPartial"];
            };
        };
        responses: {
            /** @description 200 response for update_auto_moderation_rule */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DefaultKeywordRuleResponse"] | components["schemas"]["KeywordRuleResponse"] | components["schemas"]["MLSpamRuleResponse"] | components["schemas"]["MentionSpamRuleResponse"] | components["schemas"]["SpamLinkRuleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_bans: {
        parameters: {
            query?: {
                limit?: number;
                before?: components["schemas"]["SnowflakeType"];
                after?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_bans */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildBanResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_ban: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_ban */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildBanResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    ban_user_from_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    delete_message_seconds?: number | null;
                    delete_message_days?: number | null;
                };
            };
        };
        responses: {
            /** @description 204 response for ban_user_from_guild */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    unban_user_from_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for unban_user_from_guild */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    bulk_ban_users_from_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    user_ids: components["schemas"]["SnowflakeType"][];
                    delete_message_seconds?: number | null;
                };
            };
        };
        responses: {
            /** @description 200 response for bulk_ban_users_from_guild */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BulkBanUsersResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_channels: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_channels */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["GuildChannelResponse"] | components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"] | components["schemas"]["ThreadResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_guild_channel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateGuildChannelRequest"];
            };
        };
        responses: {
            /** @description 201 response for create_guild_channel */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildChannelResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    bulk_update_guild_channels: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    id?: components["schemas"]["SnowflakeType"];
                    /** Format: int32 */
                    position?: number | null;
                    parent_id?: null | components["schemas"]["SnowflakeType"];
                    lock_permissions?: boolean | null;
                }[];
            };
        };
        responses: {
            /** @description 204 response for bulk_update_guild_channels */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_emojis: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_emojis */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_guild_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    image: string;
                    roles?: (null | components["schemas"]["SnowflakeType"])[] | null;
                };
            };
        };
        responses: {
            /** @description 201 response for create_guild_emoji */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_emoji */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_guild_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_guild_emoji */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_guild_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    roles?: (null | components["schemas"]["SnowflakeType"])[] | null;
                };
            };
        };
        responses: {
            /** @description 200 response for update_guild_emoji */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_integrations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_integrations */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["DiscordIntegrationResponse"] | components["schemas"]["ExternalConnectionIntegrationResponse"] | components["schemas"]["GuildSubscriptionIntegrationResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_guild_integration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                integration_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_guild_integration */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_invites: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_invites */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["FriendInviteResponse"] | components["schemas"]["GroupDMInviteResponse"] | components["schemas"]["GuildInviteResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_members: {
        parameters: {
            query?: {
                limit?: number;
                after?: number;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_members */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildMemberResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_my_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    nick?: string | null;
                };
            };
        };
        responses: {
            /** @description 200 response for update_my_guild_member */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateGuildMemberResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    search_guild_members: {
        parameters: {
            query: {
                limit: number;
                query: string;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for search_guild_members */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildMemberResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_member */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildMemberResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    add_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BotAddGuildMemberRequest"];
            };
        };
        responses: {
            /** @description 201 response for add_guild_member */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildMemberResponse"];
                };
            };
            /** @description 204 response for add_guild_member */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_guild_member */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    nick?: string | null;
                    roles?: (null | components["schemas"]["SnowflakeType"])[] | null;
                    mute?: boolean | null;
                    deaf?: boolean | null;
                    channel_id?: null | components["schemas"]["SnowflakeType"];
                    /** Format: date-time */
                    communication_disabled_until?: string | null;
                    flags?: number | null;
                };
            };
        };
        responses: {
            /** @description 200 response for update_guild_member */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildMemberResponse"];
                };
            };
            /** @description 204 response for update_guild_member */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    add_guild_member_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for add_guild_member_role */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_guild_member_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_guild_member_role */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    set_guild_mfa_level: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    level: components["schemas"]["GuildMFALevel"];
                };
            };
        };
        responses: {
            /** @description 200 response for set_guild_mfa_level */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildMFALevelResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_new_member_welcome: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_new_member_welcome */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildHomeSettingsResponse"];
                };
            };
            /** @description 204 response for get_guild_new_member_welcome */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guilds_onboarding: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guilds_onboarding */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserGuildOnboardingResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    put_guilds_onboarding: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateGuildOnboardingRequest"];
            };
        };
        responses: {
            /** @description 200 response for put_guilds_onboarding */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildOnboardingResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_preview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_preview */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildPreviewResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    preview_prune_guild: {
        parameters: {
            query?: {
                days?: number;
                include_roles?: string | (null | components["schemas"]["SnowflakeType"])[];
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for preview_prune_guild */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildPruneResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    prune_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    days?: number | null;
                    compute_prune_count?: boolean | null;
                    include_roles?: string | (null | components["schemas"]["SnowflakeType"])[] | null;
                };
            };
        };
        responses: {
            /** @description 200 response for prune_guild */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildPruneResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_voice_regions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_voice_regions */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceRegionResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_roles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_roles */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildRoleResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_guild_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string | null;
                    permissions?: number | null;
                    color?: number | null;
                    hoist?: boolean | null;
                    mentionable?: boolean | null;
                    icon?: string | null;
                    unicode_emoji?: string | null;
                };
            };
        };
        responses: {
            /** @description 200 response for create_guild_role */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildRoleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    bulk_update_guild_roles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    id?: null | components["schemas"]["SnowflakeType"];
                    /** Format: int32 */
                    position?: number | null;
                }[];
            };
        };
        responses: {
            /** @description 200 response for bulk_update_guild_roles */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildRoleResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_role */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildRoleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_guild_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_guild_role */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_guild_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string | null;
                    permissions?: number | null;
                    color?: number | null;
                    hoist?: boolean | null;
                    mentionable?: boolean | null;
                    icon?: string | null;
                    unicode_emoji?: string | null;
                };
            };
        };
        responses: {
            /** @description 200 response for update_guild_role */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildRoleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_scheduled_events: {
        parameters: {
            query?: {
                with_user_count?: boolean;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_scheduled_events */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["ExternalScheduledEventResponse"] | components["schemas"]["StageScheduledEventResponse"] | components["schemas"]["VoiceScheduledEventResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_guild_scheduled_event: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExternalScheduledEventCreateRequest"] | components["schemas"]["StageScheduledEventCreateRequest"] | components["schemas"]["VoiceScheduledEventCreateRequest"];
            };
        };
        responses: {
            /** @description 200 response for create_guild_scheduled_event */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExternalScheduledEventResponse"] | components["schemas"]["StageScheduledEventResponse"] | components["schemas"]["VoiceScheduledEventResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_scheduled_event: {
        parameters: {
            query?: {
                with_user_count?: boolean;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_scheduled_event */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExternalScheduledEventResponse"] | components["schemas"]["StageScheduledEventResponse"] | components["schemas"]["VoiceScheduledEventResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_guild_scheduled_event: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_guild_scheduled_event */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_guild_scheduled_event: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExternalScheduledEventPatchRequestPartial"] | components["schemas"]["StageScheduledEventPatchRequestPartial"] | components["schemas"]["VoiceScheduledEventPatchRequestPartial"];
            };
        };
        responses: {
            /** @description 200 response for update_guild_scheduled_event */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExternalScheduledEventResponse"] | components["schemas"]["StageScheduledEventResponse"] | components["schemas"]["VoiceScheduledEventResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_scheduled_event_users: {
        parameters: {
            query?: {
                with_member?: boolean;
                limit?: number;
                before?: components["schemas"]["SnowflakeType"];
                after?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_scheduled_event_users */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScheduledEventUserResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_soundboard_sounds: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_soundboard_sounds */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListGuildSoundboardSoundsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_guild_soundboard_sound: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SoundboardCreateRequest"];
            };
        };
        responses: {
            /** @description 201 response for create_guild_soundboard_sound */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SoundboardSoundResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_soundboard_sound: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sound_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_soundboard_sound */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SoundboardSoundResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_guild_soundboard_sound: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sound_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_guild_soundboard_sound */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_guild_soundboard_sound: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sound_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SoundboardPatchRequestPartial"];
            };
        };
        responses: {
            /** @description 200 response for update_guild_soundboard_sound */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SoundboardSoundResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_stickers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_stickers */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildStickerResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_guild_sticker: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    name: string;
                    tags: string;
                    description?: string | null;
                    file: string;
                };
            };
        };
        responses: {
            /** @description 201 response for create_guild_sticker */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildStickerResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_sticker: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_sticker */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildStickerResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_guild_sticker: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_guild_sticker */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_guild_sticker: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    tags?: string;
                    description?: string | null;
                };
            };
        };
        responses: {
            /** @description 200 response for update_guild_sticker */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildStickerResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_guild_templates: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_guild_templates */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_guild_template: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    description?: string | null;
                };
            };
        };
        responses: {
            /** @description 200 response for create_guild_template */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    sync_guild_template: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for sync_guild_template */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_guild_template: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for delete_guild_template */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_guild_template: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                code: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    description?: string | null;
                };
            };
        };
        responses: {
            /** @description 200 response for update_guild_template */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_active_guild_threads: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_active_guild_threads */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_vanity_url: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_vanity_url */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VanityURLResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_self_voice_state: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_self_voice_state */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceStateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_self_voice_state: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: date-time */
                    request_to_speak_timestamp?: string | null;
                    suppress?: boolean | null;
                    channel_id?: null | components["schemas"]["SnowflakeType"];
                };
            };
        };
        responses: {
            /** @description 204 response for update_self_voice_state */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_voice_state: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_voice_state */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceStateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_voice_state: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    suppress?: boolean | null;
                    channel_id?: null | components["schemas"]["SnowflakeType"];
                };
            };
        };
        responses: {
            /** @description 204 response for update_voice_state */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_webhooks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_webhooks */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_welcome_screen: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_welcome_screen */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildWelcomeScreenResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_guild_welcome_screen: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WelcomeScreenPatchRequestPartial"];
            };
        };
        responses: {
            /** @description 200 response for update_guild_welcome_screen */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildWelcomeScreenResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_widget_settings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_widget_settings */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WidgetSettingsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_guild_widget_settings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    channel_id?: null | components["schemas"]["SnowflakeType"];
                    enabled?: boolean | null;
                };
            };
        };
        responses: {
            /** @description 200 response for update_guild_widget_settings */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WidgetSettingsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_widget: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_widget */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WidgetResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_guild_widget_png: {
        parameters: {
            query?: {
                style?: components["schemas"]["WidgetImageStyles"];
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_guild_widget_png */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "image/png": string;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_interaction_response: {
        parameters: {
            query?: {
                with_response?: boolean;
            };
            header?: never;
            path: {
                interaction_id: components["schemas"]["SnowflakeType"];
                interaction_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandAutocompleteCallbackRequest"] | components["schemas"]["CreateMessageInteractionCallbackRequest"] | components["schemas"]["LaunchActivityInteractionCallbackRequest"] | components["schemas"]["ModalInteractionCallbackRequest"] | components["schemas"]["PongInteractionCallbackRequest"] | components["schemas"]["UpdateMessageInteractionCallbackRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["ApplicationCommandAutocompleteCallbackRequest"] | components["schemas"]["CreateMessageInteractionCallbackRequest"] | components["schemas"]["LaunchActivityInteractionCallbackRequest"] | components["schemas"]["ModalInteractionCallbackRequest"] | components["schemas"]["PongInteractionCallbackRequest"] | components["schemas"]["UpdateMessageInteractionCallbackRequest"];
                "multipart/form-data": components["schemas"]["ApplicationCommandAutocompleteCallbackRequest"] | components["schemas"]["CreateMessageInteractionCallbackRequest"] | components["schemas"]["LaunchActivityInteractionCallbackRequest"] | components["schemas"]["ModalInteractionCallbackRequest"] | components["schemas"]["PongInteractionCallbackRequest"] | components["schemas"]["UpdateMessageInteractionCallbackRequest"];
            };
        };
        responses: {
            /** @description 200 response for create_interaction_response */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InteractionCallbackResponse"];
                };
            };
            /** @description 204 response for create_interaction_response */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    invite_resolve: {
        parameters: {
            query?: {
                with_counts?: boolean;
                guild_scheduled_event_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for invite_resolve */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FriendInviteResponse"] | components["schemas"]["GroupDMInviteResponse"] | components["schemas"]["GuildInviteResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    invite_revoke: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for invite_revoke */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FriendInviteResponse"] | components["schemas"]["GroupDMInviteResponse"] | components["schemas"]["GuildInviteResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_or_join_lobby: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: int32 */
                    idle_timeout_seconds?: number | null;
                    lobby_metadata?: {
                        [key: string]: string;
                    } | null;
                    member_metadata?: {
                        [key: string]: string;
                    } | null;
                    secret: string;
                };
            };
        };
        responses: {
            /** @description 200 response for create_or_join_lobby */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_lobby: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: int32 */
                    idle_timeout_seconds?: number | null;
                    members?: components["schemas"]["LobbyMemberRequest"][] | null;
                    metadata?: {
                        [key: string]: string;
                    } | null;
                };
            };
        };
        responses: {
            /** @description 201 response for create_lobby */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_lobby: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_lobby */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    edit_lobby: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: int32 */
                    idle_timeout_seconds?: number | null;
                    metadata?: {
                        [key: string]: string;
                    } | null;
                    members?: components["schemas"]["LobbyMemberRequest"][] | null;
                };
            };
        };
        responses: {
            /** @description 200 response for edit_lobby */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    edit_lobby_channel_link: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    channel_id?: null | components["schemas"]["SnowflakeType"];
                };
            };
        };
        responses: {
            /** @description 200 response for edit_lobby_channel_link */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    leave_lobby: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for leave_lobby */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_linked_lobby_guild_invite_for_self: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for create_linked_lobby_guild_invite_for_self */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyGuildInviteResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    bulk_update_lobby_members: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkLobbyMemberRequest"][] | null;
            };
        };
        responses: {
            /** @description 200 response for bulk_update_lobby_members */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyMemberResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    add_lobby_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    metadata?: {
                        [key: string]: string;
                    } | null;
                    flags?: null | 1;
                };
            };
        };
        responses: {
            /** @description 200 response for add_lobby_member */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyMemberResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_lobby_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_lobby_member */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_linked_lobby_guild_invite_for_user: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for create_linked_lobby_guild_invite_for_user */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyGuildInviteResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_lobby_messages: {
        parameters: {
            query?: {
                limit?: number;
            };
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_lobby_messages */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyMessageResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_lobby_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SDKMessageRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["SDKMessageRequest"];
                "multipart/form-data": components["schemas"]["SDKMessageRequest"];
            };
        };
        responses: {
            /** @description 201 response for create_lobby_message */
            201: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyMessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_my_oauth2_authorization: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_my_oauth2_authorization */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OAuth2GetAuthorizationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_my_oauth2_application: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_my_oauth2_application */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateApplicationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_public_keys: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_public_keys */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OAuth2GetKeys"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_openid_connect_userinfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_openid_connect_userinfo */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OAuth2GetOpenIDConnectUserInfoResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    partner_sdk_unmerge_provisional_account: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    client_id: components["schemas"]["SnowflakeType"];
                    client_secret?: string | null;
                    external_auth_token: string;
                    external_auth_type: components["schemas"]["ApplicationIdentityProviderAuthType"];
                };
            };
        };
        responses: {
            /** @description 204 response for partner_sdk_unmerge_provisional_account */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    partner_sdk_token: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    client_id: components["schemas"]["SnowflakeType"];
                    client_secret?: string | null;
                    external_auth_token: string;
                    external_auth_type: components["schemas"]["ApplicationIdentityProviderAuthType"];
                };
            };
        };
        responses: {
            /** @description 200 response for partner_sdk_token */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProvisionalTokenResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    bot_partner_sdk_token: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    external_user_id: string;
                    preferred_global_name?: string | null;
                };
            };
        };
        responses: {
            /** @description 200 response for bot_partner_sdk_token */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProvisionalTokenResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_soundboard_default_sounds: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_soundboard_default_sounds */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SoundboardSoundResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_stage_instance: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    topic: string;
                    channel_id: components["schemas"]["SnowflakeType"];
                    privacy_level?: null | components["schemas"]["StageInstancesPrivacyLevels"];
                    guild_scheduled_event_id?: null | components["schemas"]["SnowflakeType"];
                    send_start_notification?: boolean | null;
                };
            };
        };
        responses: {
            /** @description 200 response for create_stage_instance */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StageInstanceResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_stage_instance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_stage_instance */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StageInstanceResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_stage_instance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_stage_instance */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_stage_instance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    topic?: string;
                    privacy_level?: components["schemas"]["StageInstancesPrivacyLevels"];
                };
            };
        };
        responses: {
            /** @description 200 response for update_stage_instance */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StageInstanceResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_sticker_packs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_sticker_packs */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StickerPackCollectionResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_sticker_pack: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                pack_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_sticker_pack */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StickerPackResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_sticker: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_sticker */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildStickerResponse"] | components["schemas"]["StandardStickerResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_my_user: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_my_user */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPIIResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_my_user: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BotAccountPatchRequest"];
            };
        };
        responses: {
            /** @description 200 response for update_my_user */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPIIResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_application_user_role_connection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_application_user_role_connection */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationUserRoleConnectionResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_application_user_role_connection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateApplicationUserRoleConnectionRequest"];
            };
        };
        responses: {
            /** @description 200 response for update_application_user_role_connection */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationUserRoleConnectionResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_application_user_role_connection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_application_user_role_connection */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    create_dm: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreatePrivateChannelRequest"];
            };
        };
        responses: {
            /** @description 200 response for create_dm */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_my_connections: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_my_connections */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConnectedAccountResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_my_guilds: {
        parameters: {
            query?: {
                before?: components["schemas"]["SnowflakeType"];
                after?: components["schemas"]["SnowflakeType"];
                limit?: number;
                with_counts?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_my_guilds */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MyGuildResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    leave_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for leave_guild */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_my_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_my_guild_member */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateGuildMemberResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_user: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_user */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    list_voice_regions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for list_voice_regions */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceRegionResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_webhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_webhook */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_webhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_webhook */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_webhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    avatar?: string | null;
                    channel_id?: null | components["schemas"]["SnowflakeType"];
                };
            };
        };
        responses: {
            /** @description 200 response for update_webhook */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_webhook_by_token: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_webhook_by_token */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    execute_webhook: {
        parameters: {
            query?: {
                wait?: boolean;
                thread_id?: components["schemas"]["SnowflakeType"];
                with_components?: boolean;
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["IncomingWebhookRequestPartial"] | components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "application/x-www-form-urlencoded": components["schemas"]["IncomingWebhookRequestPartial"] | components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "multipart/form-data": components["schemas"]["IncomingWebhookRequestPartial"] | components["schemas"]["IncomingWebhookUpdateRequestPartial"];
            };
        };
        responses: {
            /** @description 200 response for execute_webhook */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            /** @description 204 response for execute_webhook */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_webhook_by_token: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_webhook_by_token */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_webhook_by_token: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    avatar?: string | null;
                };
            };
        };
        responses: {
            /** @description 200 response for update_webhook_by_token */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    execute_github_compatible_webhook: {
        parameters: {
            query?: {
                wait?: boolean;
                thread_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GithubWebhook"];
            };
        };
        responses: {
            /** @description 204 response for execute_github_compatible_webhook */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_original_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_original_webhook_message */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_original_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_original_webhook_message */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_original_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
                with_components?: boolean;
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "application/x-www-form-urlencoded": components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "multipart/form-data": components["schemas"]["IncomingWebhookUpdateRequestPartial"] & {
                    "files[0]"?: string;
                    "files[1]"?: string;
                    "files[2]"?: string;
                    "files[3]"?: string;
                    "files[4]"?: string;
                    "files[5]"?: string;
                    "files[6]"?: string;
                    "files[7]"?: string;
                    "files[8]"?: string;
                    "files[9]"?: string;
                };
            };
        };
        responses: {
            /** @description 200 response for update_original_webhook_message */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    get_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 response for get_webhook_message */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    delete_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 204 response for delete_webhook_message */
            204: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    update_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
                with_components?: boolean;
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "application/x-www-form-urlencoded": components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "multipart/form-data": components["schemas"]["IncomingWebhookUpdateRequestPartial"] & {
                    "files[0]"?: string;
                    "files[1]"?: string;
                    "files[2]"?: string;
                    "files[3]"?: string;
                    "files[4]"?: string;
                    "files[5]"?: string;
                    "files[6]"?: string;
                    "files[7]"?: string;
                    "files[8]"?: string;
                    "files[9]"?: string;
                };
            };
        };
        responses: {
            /** @description 200 response for update_webhook_message */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
    execute_slack_compatible_webhook: {
        parameters: {
            query?: {
                wait?: boolean;
                thread_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SlackWebhook"];
                "application/x-www-form-urlencoded": components["schemas"]["SlackWebhook"];
                "multipart/form-data": components["schemas"]["SlackWebhook"];
            };
        };
        responses: {
            /** @description 200 response for execute_slack_compatible_webhook */
            200: {
                headers: {
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
            "4XX": components["responses"]["ClientErrorResponse"];
        };
    };
}
