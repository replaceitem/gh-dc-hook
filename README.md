[![Available for Docker](https://badges.penpow.dev/badges/supported/docker/cozy.svg)](https://github.com/replaceitem/gh-dc-hook/pkgs/container/gh-dc-hook)
[![Available on GitHub Container Registry](https://badges.penpow.dev/badges/available/github-container-registry/cozy.svg)](https://github.com/replaceitem/gh-dc-hook/pkgs/container/gh-dc-hook)
[![Supports Deno](https://badges.penpow.dev/badges/supported/deno/cozy.svg)](https://deno.com/)
[![Chat with me on Discord](https://badges.penpow.dev/badges/social/discord-singular/cozy.svg)](https://discord.gg/etTDQAVSgt)

Converts GitHub webhooks to nicely formatted Discord webhooks.

### What makes this different to Discords built-in GitHub webhooks?

* Uses nicer formatted messages that is more in line with GitHubs UI style, using [Octicons](https://primer.style/octicons/) as Discord emojis and GitHubs [color scheme](https://primer.style/octicons/usage-guidelines/#color).
* Edits previous Discord messages on updates instead of spamming new ones. (*[example](#workflow_job-and-workflow_run)*)

## Supported events

<details>

<summary>Supported events compared to Discords GitHub compatible webhook endpoint</summary>

| Event                             | Supported by Discord | Supported |
|-----------------------------------|----------------------|-----------|
| `branch_protection_configuration` | ❌                    | ❌         |
| `branch_protection_rule`          | ❌                    | ❌         |
| `check_run`                       | ✅                    | ❌         |
| `check_suite`                     | ✅                    | ❌         |
| `code_scanning_alert`             | ❌                    | ❌         |
| `commit_comment`                  | ✅                    | ✅         |
| `create`                          | ✅                    | ✅         |
| `custom_property`                 | ❌                    | ❌         |
| `custom_property_values`          | ❌                    | ❌         |
| `delete`                          | ✅                    | ❌         |
| `dependabot_alert`                | ❌                    | ❌         |
| `deploy_key`                      | ❌                    | ❌         |
| `deployment`                      | ❌                    | ❌         |
| `deployment_protection_rule`      | ❌                    | ❌         |
| `deployment_review`               | ❌                    | ❌         |
| `deployment_status`               | ❌                    | ❌         |
| `discussion`                      | ✅                    | ✅         |
| `discussion_comment`              | ✅                    | ✅         |
| `fork`                            | ✅                    | ✅         |
| `github_app_authorization`        | ❌                    | ❌         |
| `gollum`                          | ❌                    | ❌         |
| `installation`                    | ❌                    | ❌         |
| `installation_repositories`       | ❌                    | ❌         |
| `installation_target`             | ❌                    | ❌         |
| `issue_comment`                   | ✅                    | ✅         |
| `issues`                          | ✅                    | ✅         |
| `label`                           | ❌                    | ❌         |
| `marketplace_purchase`            | ❌                    | ❌         |
| `member`                          | ✅                    | ❌         |
| `membership`                      | ❌                    | ❌         |
| `merge_group`                     | ❌                    | ❌         |
| `meta`                            | ❌                    | ❌         |
| `milestone`                       | ❌                    | ❌         |
| `org_block`                       | ❌                    | ❌         |
| `organization`                    | ❌                    | ❌         |
| `package`                         | ❌                    | ❌         |
| `page_build`                      | ❌                    | ❌         |
| `personal_access_token_request`   | ❌                    | ❌         |
| `ping`                            | ❌                    | ❌         |
| `project_card`                    | ❌                    | ❌         |
| `project`                         | ❌                    | ❌         |
| `project_column`                  | ❌                    | ❌         |
| `projects_v2`                     | ❌                    | ❌         |
| `projects_v2_item`                | ❌                    | ❌         |
| `projects_v2_status_update`       | ❌                    | ❌         |
| `public`                          | ✅                    | ✅         |
| `pull_request`                    | ✅                    | ✅         |
| `pull_request_review_comment`     | ✅                    | ❌         |
| `pull_request_review`             | ✅                    | ✅         |
| `pull_request_review_thread`      | ❌                    | ❌         |
| `push`                            | ✅                    | ✅         |
| `registry_package`                | ❌                    | ❌         |
| `release`                         | ✅                    | ✅         |
| `repository_advisory`             | ❌                    | ❌         |
| `repository`                      | ❌                    | ❌         |
| `repository_dispatch`             | ❌                    | ❌         |
| `repository_import`               | ❌                    | ❌         |
| `repository_ruleset`              | ❌                    | ❌         |
| `repository_vulnerability_alert`  | ❌                    | ❌         |
| `secret_scanning_alert`           | ❌                    | ❌         |
| `secret_scanning_alert_location`  | ❌                    | ❌         |
| `secret_scanning_scan`            | ❌                    | ❌         |
| `security_advisory`               | ❌                    | ❌         |
| `security_and_analysis`           | ❌                    | ❌         |
| `sponsorship`                     | ❌                    | ❌         |
| `star`                            | ❌                    | ✅         |
| `status`                          | ❌                    | ❌         |
| `sub_issues`                      | ❌                    | ❌         |
| `team_add`                        | ❌                    | ❌         |
| `team`                            | ❌                    | ❌         |
| `watch`                           | ✅                    | ❌         |
| `workflow_dispatch`               | ❌                    | ❌         |
| `workflow_job`                    | ✅                    | ✅         |
| `workflow_run`                    | ✅                    | ✅         |

</details>


### `star`

<img alt="New star added" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241722/star-created_a2pugj.webp" width="280"/>
<img alt="Star removed" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241722/star-deleted_isa6zo.webp" width="280"/>

### `fork`

<img alt="Fork created" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241697/fork-fork_ohgrfd.webp" width="280"/>

### `public`

<img alt="Repository published" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241703/public-public_ufn0pu.webp" width="280"/>

### `push`

<img alt="Pushed 1 commit to test/main" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241718/push-single_ha6f0u.webp" width="280"/>
<img alt="Pushed 10 commits to test/main" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241715/push-multiple_iwqqgp.webp" width="280"/>
<img alt="img.png" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241713/push-force_ejmvte.webp" width="280"/>

### `create`

<img alt="Branch feature-1 created" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241690/create-branch_m8jobz.webp" width="280"/>
<img alt="Tag v1.2.34 created" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241690/create-tag_u6dwk1.webp" width="280"/>

### `release`

<img alt="Release v1.0.0 published" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241719/release-publish_m0z7v7.webp" width="280"/>
<img alt="Pre-release v1.1.0-beta.1 published" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241718/release-pre-release_nrujul.webp" width="280"/>

### `workflow_job` and `workflow_run`

<img alt="Workflow run with several jobs" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756242505/out-smaller_y4rf5z.webp" width="280"/>
<img alt="Workflow run with several different conclusions" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756242469/out_wim4ia.webp" width="280"/>


### `commit_comment`

<img alt="New comment on commit 3f4ea57" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241726/commit-comment-created_qt46zj.webp" width="280"/>

### `discussion`

<img alt="Discussion #10 created" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241692/discussion-created_rbcpxe.webp" width="280"/>
<img alt="Discussion #10 answered" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241690/discussion-answered_cwkaom.webp" width="280"/>
<img alt="Discussion #12 closed as duplicate" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241691/discussion-closed-duplicate_kfgur7.webp" width="280"/>
<img alt="Discussion #12 closed as outdated" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241692/discussion-closed-outdated_rfvcz7.webp" width="280"/>
<img alt="Discussion #12 closed as resolved" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241694/discussion-closed-resolved_z3gias.webp" width="280"/>
<img alt="Discussion #12 reopened" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241696/discussion-reopened_yed5om.webp" width="280"/>

### `discussion_comment`

<img alt="New comment on discussion #10" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241695/discussion-comment-created_q1zbt4.webp" width="280"/>

### `issues`

<img alt="Issue opened" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241701/issues-opened_enjtw9.webp" width="280"/>
<img alt="Issue closed" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241699/issues-closed-completed_rtsfqj.webp" width="280"/>
<img alt="Issue closed as duplicate" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241699/issues-closed-duplicate_uozhmm.webp" width="280"/>
<img alt="Issue reopened" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241702/issues-reopened_fsbj3v.webp" width="280"/>

### `issue_comment`

<img alt="New comment on issue #2" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241693/issue-comment-created_s3vr9m.webp" width="280"/>
<img alt="New comment on pull request #6" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241699/issue-comment-created-pr_p6naqj.webp" width="280"/>

### `pull_request`

<img alt="Pull request opened" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241706/pull-request-opened_v8j6uc.webp" width="280"/>
<img alt="Draft pull request opened" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241709/pull-request-opened-draft_x8528s.webp" width="280"/>
<img alt="Pull request merged" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241705/pull-request-closed-merged_hxovpt.webp" width="280"/>
<img alt="Pull request converted to draft" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241705/pull-request-converted-to-draft_uskoxq.webp" width="280"/>
<img alt="Pull request marked as ready for review" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241709/pull-request-ready-for-review_mwh5aq.webp" width="280"/>

### `pull_request_review`

<img alt="Approved these changes" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241710/pull-request-review-submitted-approved_xkw3vp.webp" width="280"/>
<img alt="Requested changes" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241712/pull-request-review-submitted-changes-requested_kvwfva.webp" width="280"/>
<img alt="Reviewed" src="https://res.cloudinary.com/dhohea0g5/image/upload/v1756241713/pull-request-review-submitted-commented_m1crgc.webp" width="280"/>


## Usage

All you need to do to use this yourself is to host the docker image.

Either start a container with a docker command:
```shell
docker run -d -p 3000:3000 ghcr.io/replaceitem/gh-dc-hook:latest
```

or use `docker-compose.yml`:
```yaml
services:
  backend:
    image: "ghcr.io/replaceitem/gh-dc-hook:latest"
    ports:
      - "3000:3000"
```

The used emojis are from a private Discord server,
but they will work with webhooks across Discord,
without having access to the Discord server or creating the emojis yourself.

### Deployment

Docker images are provided through the [GitHub container registry](https://github.com/replaceitem/gh-dc-hook/pkgs/container/gh-dc-hook).
They don't need any configuration through environment variables.
You only need to map the exposed port 3000 to a host port.

### Webhook setup

Set up a discord webhook as usual and copy the webhook URL. It will look like this:

```
https://discord.com/api/webhooks/1234567890987654321/s0Me-s3CReT_t0k3n-y0U-Sh0uLd_n3v3R-r3Ve4L_uNd3R-4nY_c1RCuM5t4NC3s
```

Usually when setting this up with discord, you would need to append `/github`
to let Discord convert the GitHub webhook payload to the discord message content format.

To let gh-dc-hook handle the payload, you need to replace the `discord.com`
part of the URL with the domain where you deployed it:

```
https://example.org/api/webhooks/1234567890987654321/s0Me-s3CReT_t0k3n-y0U-Sh0uLd_n3v3R-r3Ve4L_uNd3R-4nY_c1RCuM5t4NC3s
```

This will send the event to gh-dc-hook instead, which will convert the payload to a Discord message first.
It will then be sent to the Discord API with the same Webhook ID and token.

## Development

### Helpful resources

* [GitHub Webhook Payloads Documentation](https://docs.github.com/en/webhooks/webhook-events-and-payloads)
* [GitHub icons](https://primer.style/octicons/)
* [GitHub Compatible Webhook Docs](https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook)
* [GitHub icons color scheme](https://primer.style/octicons/usage-guidelines/#specific-use-cases)
