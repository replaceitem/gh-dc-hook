import {WebhookHandler} from "../handler.ts";
import {IncomingWebhookData} from "../../github-webooks.ts";
import {DiscordWebhookClient, DiscordWebhookCredentials, WebhookContent} from "../../discord-webhook-client.ts";
import {EmbedTransformer} from "../embed-transformer.ts";
import {RepositoryWebhooks, SimpleUser, WebhooksWorkflowJob, WebhooksWorkflowRun} from "../../schemas/common.ts";
import {cutLengthEllipsis, mdLink, mdTimestamp, TimestampStyle} from "../../util/markdown-util.ts";
import {COLORS, EMOJIS} from "../../util/constants.ts";
import {Debouncer, formatDuration, joinLines, tryParseDate} from "../../util/util.ts";

type WorkflowId = number;


interface WorkflowJobData {
    name: string;
    id: number;
    status: WebhooksWorkflowJob['status'];
    conclusion?: WebhooksWorkflowJob['conclusion'];
    startedAt?: Date;
    completedAt?: Date;
}

class WorkflowData {
    name?: string;
    url?: string;
    displayTitle?: string;
    runAttempt?: number;
    startDate?: Date;
    lastCompletedAt?: Date;
    conclusion?: WebhooksWorkflowRun['conclusion'];
    status: WebhooksWorkflowRun['status'] = 'requested';
    jobs: WorkflowJobData[] = [];
    jobsById: Map<number, WorkflowJobData> = new Map();

    constructor(
        private sender: SimpleUser,
        private repository: RepositoryWebhooks,
    ) {}

    public appendEvent(webhook: IncomingWebhookData<"workflow_run" | "workflow_job">) {
        if(webhook.event === 'workflow_run') {
            const run = webhook.data.workflow_run;
            this.name = run.name ?? undefined;
            this.status = run.status;
            this.displayTitle = run.display_title;
            this.conclusion = run.conclusion ?? undefined;
            this.url = run.html_url;
            this.runAttempt = run.run_attempt;
            if(!this.startDate) {
                this.startDate = tryParseDate(run.run_started_at);
            }
            if(!this.lastCompletedAt && this.startDate) {
                this.lastCompletedAt = this.startDate;
            }
        } else {
            const job = webhook.data.workflow_job;
            let jobData = this.jobsById.get(job.id);
            if(!jobData) {
                jobData = {
                    name: job.name,
                    id: job.id,
                    status: job.status,
                    conclusion: job.conclusion ?? undefined,
                }
                this.jobsById.set(job.id, jobData);
                this.jobs.push(jobData);
                this.jobs.sort((a, b) => a.id - b.id);
            }
            jobData.status = job.status;
            jobData.conclusion = job.conclusion ?? undefined;
            jobData.startedAt = jobData.startedAt ?? tryParseDate(job.started_at);
            jobData.completedAt = jobData.completedAt ?? tryParseDate(job.completed_at);
            if(jobData.completedAt && (!this.lastCompletedAt || jobData.completedAt > this.lastCompletedAt)) {
                this.lastCompletedAt = jobData.completedAt;
            }
        }
        // the workflow_run in_progress update may arrive later than the workflow_run in_progress updates, so if any job started, the run did too
        if ((this.status === 'requested' || this.status === 'queued') && this.jobs.some(job => job.status && job.status !== 'queued')) {
            this.status = 'in_progress';
        }
    }

    public transform(): WebhookContent | undefined {
        const workflowDisplayName = (this.runAttempt ?? 1) > 1 ? `${this.displayTitle ?? this.name} (#${this.runAttempt})` : this.displayTitle ?? this.name ?? 'Run';
        const workflowLink = mdLink(workflowDisplayName, this.url);

        const timeDifferenceString = (start?: Date, end?: Date) => {
            const startTimestampString = () => start ? `Started ${mdTimestamp(start, TimestampStyle.RELATIVE_TIME)}` : undefined;
            const durationString = () => start && end ? formatDuration(Math.max(end.getTime() - start.getTime(), 0)) : undefined;
            return end ? durationString() : startTimestampString();
        }
        const conclusionLine = timeDifferenceString(this.startDate, this.conclusion === undefined ? undefined : this.lastCompletedAt);
        const description = joinLines([
            `${this.convertRunStatus(this.status, this.conclusion)} \u00A0${workflowLink}`,
            this.name !== this.displayTitle ? this.name : undefined,
            conclusionLine ? `-# ${conclusionLine}` : undefined,
        ]);
        return EmbedTransformer.ofEmbed({
            ...EmbedTransformer.transformRepository(this.repository),
            author: EmbedTransformer.transformAuthor(this.sender),
            description,
            color: this.status === 'completed' ? (this.conclusion === 'success' ? COLORS.success.int : COLORS.danger.int) : COLORS.muted.int,
            fields: this.jobs.slice(0, 25).map((job, i) => {
                const conclusionLine = timeDifferenceString(job.startedAt, job.completedAt);
                const fieldValue = joinLines([
                    `${this.convertJobStatus(job.status, job.conclusion)} \u00A0${cutLengthEllipsis(job.name, 30)}`,
                    conclusionLine ? `-# ${conclusionLine}` : undefined,
                ]);
                return {
                    name: i === 0 ? (this.jobs.length === 1 ? 'Job' : 'Jobs') : '',
                    value: fieldValue,
                };
            }),
        })
    }

    public convertRunStatus(status: WebhooksWorkflowRun['status'], conclusion?: WebhooksWorkflowRun['conclusion']) {
        if(status === 'in_progress') return EMOJIS.wf_running;
        if(status === 'completed') {
            if(conclusion === 'success') return EMOJIS.wf_success;
            if(conclusion === 'cancelled') return EMOJIS.wf_stopped;
            if(conclusion === 'timed_out') return EMOJIS.wf_stopped;
            if(conclusion === 'skipped') return EMOJIS.issue_skip;
            if(conclusion === 'failure') return EMOJIS.wf_failure;
            if(conclusion === 'startup_failure') return EMOJIS.wf_failure;
            if(conclusion === 'stale') return EMOJIS.wf_stopped;
            return EMOJIS.issue_skip;
        }
        return EMOJIS.wf_queued;
    }

    public convertJobStatus(status: WebhooksWorkflowJob['status'], conclusion?: WebhooksWorkflowJob['conclusion']) {
        if(status === 'in_progress') return EMOJIS.wf_running;
        if(status === 'completed') {
            if(conclusion === 'success') return EMOJIS.wf_success;
            if(conclusion === 'cancelled') return EMOJIS.wf_stopped;
            if(conclusion === 'timed_out') return EMOJIS.wf_stopped;
            if(conclusion === 'skipped') return EMOJIS.issue_skip;
            if(conclusion === 'failure') return EMOJIS.wf_failure;
            return EMOJIS.issue_skip;
        }
        return EMOJIS.wf_queued;
    }
}


interface WorkflowRun {
    runId: WorkflowId;
    lastActivity: Date;
    webookMessageId?: Promise<string | undefined>;
    data: WorkflowData;
    sender: Debouncer;
}

export class WorkflowRunHandler extends WebhookHandler<'workflow_run' | 'workflow_job'> {
    private workflowRuns: Map<WorkflowId, WorkflowRun> = new Map();

    constructor(
        private readonly discordWebhook: DiscordWebhookClient
    ) {
        super();
    }

    private cleanRuns() {
        const keys = Array.from(this.workflowRuns.entries());
        const removeBefore = new Date().getTime() - 1000*60*30;
        for (const [id, workflow] of keys) {
            if(workflow.lastActivity.getTime() < removeBefore) {
                this.workflowRuns.delete(id);
            }
        }
    }

    private async sendRetrieveId(content: WebhookContent, credentials: DiscordWebhookCredentials) {
        const res = await this.discordWebhook.send(content, credentials, true);
        return res.data?.id;
    }

    private async editRetrieveId(content: WebhookContent, credentials: DiscordWebhookCredentials, messageId: string) {
        const res = await this.discordWebhook.edit(content, credentials, messageId);
        return res.data?.id ?? messageId;
    }

    public handle(webhook: IncomingWebhookData<"workflow_run" | "workflow_job">, credentials: DiscordWebhookCredentials): Promise<Response> {
        const runId = webhook.event === 'workflow_run' ? webhook.data.workflow_run.id : webhook.data.workflow_job.run_id;
        let workflowRun = this.workflowRuns.get(runId);
        if(!workflowRun) {
            workflowRun = {
                runId,
                lastActivity: new Date(),
                data: new WorkflowData(webhook.data.sender, webhook.data.repository),
                sender: new Debouncer(1000),
            };
            this.workflowRuns.set(runId, workflowRun);
        }
        workflowRun.lastActivity = new Date();

        workflowRun.data.appendEvent(webhook);

        workflowRun.sender.emit(() => {
            const content = workflowRun.data.transform();
            if(content) {
                if(workflowRun.webookMessageId) {
                    workflowRun.webookMessageId = workflowRun.webookMessageId.then((messageId) => {
                        if(messageId === undefined) return this.sendRetrieveId(content, credentials);
                        return this.editRetrieveId(content, credentials, messageId);
                    });
                    workflowRun.webookMessageId.then();
                } else {
                    workflowRun.webookMessageId = this.sendRetrieveId(content, credentials);
                    workflowRun.webookMessageId.then();
                }
            }
        });

        this.cleanRuns();

        return Promise.resolve(new Response(null, {
            status: 200,
        }));
    }
}