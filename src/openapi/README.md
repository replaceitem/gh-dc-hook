## Note

When running the `gen-api` task, the Discord and GitHub OpenAPI schemas will be generated here.

The generated `github-schema.ts` file is HUGE and brings my TS autocompletion to a crawl in WebStorm.
That's why all relevant schemas for the webhooks were extracted from this to src/schemas.
The generated `github-schema.ts` is only for reference (copy/pasting) and not required for building/running, so it has been added to `.gitignore`.

The `discord-schema.ts` is directly used for sending the webhooks to discord.
It may improve your editor performance if you also exclude it from indexing.