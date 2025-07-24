export interface Enterprise {
    /** @description A short description of the enterprise. */
    description?: string | null;
    /**
     * Format: uri
     * @example https://github.com/enterprises/octo-business
     */
    html_url: string;
    /**
     * Format: uri
     * @description The enterprise's website URL.
     */
    website_url?: string | null;
    /**
     * @description Unique identifier of the enterprise
     * @example 42
     */
    id: number;
    /** @example MDEwOlJlcG9zaXRvcnkxMjk2MjY5 */
    node_id: string;
    /**
     * @description The name of the enterprise.
     * @example Octo Business
     */
    name: string;
    /**
     * @description The slug url identifier for the enterprise.
     * @example octo-business
     */
    slug: string;
    /**
     * Format: date-time
     * @example 2019-01-26T19:01:12Z
     */
    created_at: string | null;
    /**
     * Format: date-time
     * @example 2019-01-26T19:14:43Z
     */
    updated_at: string | null;
    /** Format: uri */
    avatar_url: string;
}

export interface SimpleInstallation {
    /**
     * @description The ID of the installation.
     * @example 1
     */
    id: number;
    /**
     * @description The global node ID of the installation.
     * @example MDQ6VXNlcjU4MzIzMQ==
     */
    node_id: string;
}

export interface OrganizationSimpleWebhooks {
    /** @example github */
    login: string;
    /** @example 1 */
    id: number;
    /** @example MDEyOk9yZ2FuaXphdGlvbjE= */
    node_id: string;
    /**
     * Format: uri
     * @example https://api.github.com/orgs/github
     */
    url: string;
    /**
     * Format: uri
     * @example https://api.github.com/orgs/github/repos
     */
    repos_url: string;
    /**
     * Format: uri
     * @example https://api.github.com/orgs/github/events
     */
    events_url: string;
    /** @example https://api.github.com/orgs/github/hooks */
    hooks_url: string;
    /** @example https://api.github.com/orgs/github/issues */
    issues_url: string;
    /** @example https://api.github.com/orgs/github/members{/member} */
    members_url: string;
    /** @example https://api.github.com/orgs/github/public_members{/member} */
    public_members_url: string;
    /** @example https://github.com/images/error/octocat_happy.gif */
    avatar_url: string;
    /** @example A great organization */
    description: string | null;
}

export interface RepositoryWebhooks {
    /**
     * Format: int64
     * @description Unique identifier of the repository
     * @example 42
     */
    id: number;
    /** @example MDEwOlJlcG9zaXRvcnkxMjk2MjY5 */
    node_id: string;
    /**
     * @description The name of the repository.
     * @example Team Environment
     */
    name: string;
    /** @example octocat/Hello-World */
    full_name: string;
    license: LicenseSimple | null;
    organization?: SimpleUser | null;
    forks: number;
    permissions?: {
        admin: boolean;
        pull: boolean;
        triage?: boolean;
        push: boolean;
        maintain?: boolean;
    };
    owner: SimpleUser;
    /**
     * @description Whether the repository is private or public.
     * @default false
     */
    private: boolean;
    /**
     * Format: uri
     * @example https://github.com/octocat/Hello-World
     */
    html_url: string;
    /** @example This your first repo! */
    description: string | null;
    fork: boolean;
    /**
     * Format: uri
     * @example https://api.github.com/repos/octocat/Hello-World
     */
    url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref} */
    archive_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/assignees{/user} */
    assignees_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha} */
    blobs_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/branches{/branch} */
    branches_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator} */
    collaborators_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/comments{/number} */
    comments_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/commits{/sha} */
    commits_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head} */
    compare_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/contents/{+path} */
    contents_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/contributors
     */
    contributors_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/deployments
     */
    deployments_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/downloads
     */
    downloads_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/events
     */
    events_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/forks
     */
    forks_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/git/commits{/sha} */
    git_commits_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/git/refs{/sha} */
    git_refs_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/git/tags{/sha} */
    git_tags_url: string;
    /** @example git:github.com/octocat/Hello-World.git */
    git_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/issues/comments{/number} */
    issue_comment_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/issues/events{/number} */
    issue_events_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/issues{/number} */
    issues_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/keys{/key_id} */
    keys_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/labels{/name} */
    labels_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/languages
     */
    languages_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/merges
     */
    merges_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/milestones{/number} */
    milestones_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating} */
    notifications_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/pulls{/number} */
    pulls_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/releases{/id} */
    releases_url: string;
    /** @example git@github.com:octocat/Hello-World.git */
    ssh_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/stargazers
     */
    stargazers_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/statuses/{sha} */
    statuses_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/subscribers
     */
    subscribers_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/subscription
     */
    subscription_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/tags
     */
    tags_url: string;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/teams
     */
    teams_url: string;
    /** @example http://api.github.com/repos/octocat/Hello-World/git/trees{/sha} */
    trees_url: string;
    /** @example https://github.com/octocat/Hello-World.git */
    clone_url: string;
    /**
     * Format: uri
     * @example git:git.example.com/octocat/Hello-World
     */
    mirror_url: string | null;
    /**
     * Format: uri
     * @example http://api.github.com/repos/octocat/Hello-World/hooks
     */
    hooks_url: string;
    /**
     * Format: uri
     * @example https://svn.github.com/octocat/Hello-World
     */
    svn_url: string;
    /**
     * Format: uri
     * @example https://github.com
     */
    homepage: string | null;
    language: string | null;
    /** @example 9 */
    forks_count: number;
    /** @example 80 */
    stargazers_count: number;
    /** @example 80 */
    watchers_count: number;
    /**
     * @description The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.
     * @example 108
     */
    size: number;
    /**
     * @description The default branch of the repository.
     * @example master
     */
    default_branch: string;
    /** @example 0 */
    open_issues_count: number;
    /**
     * @description Whether this repository acts as a template that can be used to generate new repositories.
     * @default false
     * @example true
     */
    is_template: boolean;
    topics?: string[];
    /** @description The custom properties that were defined for the repository. The keys are the custom property names, and the values are the corresponding custom property values. */
    custom_properties?: {
        [key: string]: unknown;
    };
    /**
     * @description Whether issues are enabled.
     * @default true
     * @example true
     */
    has_issues: boolean;
    /**
     * @description Whether projects are enabled.
     * @default true
     * @example true
     */
    has_projects: boolean;
    /**
     * @description Whether the wiki is enabled.
     * @default true
     * @example true
     */
    has_wiki: boolean;
    has_pages: boolean;
    /**
     * @description Whether downloads are enabled.
     * @default true
     * @example true
     */
    has_downloads: boolean;
    /**
     * @description Whether discussions are enabled.
     * @default false
     * @example true
     */
    has_discussions: boolean;
    /**
     * @description Whether the repository is archived.
     * @default false
     */
    archived: boolean;
    /** @description Returns whether or not this repository disabled. */
    disabled: boolean;
    /**
     * @description The repository visibility: public, private, or internal.
     * @default public
     */
    visibility: string;
    /**
     * Format: date-time
     * @example 2011-01-26T19:06:43Z
     */
    pushed_at: string | null;
    /**
     * Format: date-time
     * @example 2011-01-26T19:01:12Z
     */
    created_at: string | null;
    /**
     * Format: date-time
     * @example 2011-01-26T19:14:43Z
     */
    updated_at: string | null;
    /**
     * @description Whether to allow rebase merges for pull requests.
     * @default true
     * @example true
     */
    allow_rebase_merge: boolean;
    template_repository?: {
        id?: number;
        node_id?: string;
        name?: string;
        full_name?: string;
        owner?: {
            login?: string;
            id?: number;
            node_id?: string;
            avatar_url?: string;
            gravatar_id?: string;
            url?: string;
            html_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            starred_url?: string;
            subscriptions_url?: string;
            organizations_url?: string;
            repos_url?: string;
            events_url?: string;
            received_events_url?: string;
            type?: string;
            site_admin?: boolean;
        };
        private?: boolean;
        html_url?: string;
        description?: string;
        fork?: boolean;
        url?: string;
        archive_url?: string;
        assignees_url?: string;
        blobs_url?: string;
        branches_url?: string;
        collaborators_url?: string;
        comments_url?: string;
        commits_url?: string;
        compare_url?: string;
        contents_url?: string;
        contributors_url?: string;
        deployments_url?: string;
        downloads_url?: string;
        events_url?: string;
        forks_url?: string;
        git_commits_url?: string;
        git_refs_url?: string;
        git_tags_url?: string;
        git_url?: string;
        issue_comment_url?: string;
        issue_events_url?: string;
        issues_url?: string;
        keys_url?: string;
        labels_url?: string;
        languages_url?: string;
        merges_url?: string;
        milestones_url?: string;
        notifications_url?: string;
        pulls_url?: string;
        releases_url?: string;
        ssh_url?: string;
        stargazers_url?: string;
        statuses_url?: string;
        subscribers_url?: string;
        subscription_url?: string;
        tags_url?: string;
        teams_url?: string;
        trees_url?: string;
        clone_url?: string;
        mirror_url?: string;
        hooks_url?: string;
        svn_url?: string;
        homepage?: string;
        language?: string;
        forks_count?: number;
        stargazers_count?: number;
        watchers_count?: number;
        size?: number;
        default_branch?: string;
        open_issues_count?: number;
        is_template?: boolean;
        topics?: string[];
        has_issues?: boolean;
        has_projects?: boolean;
        has_wiki?: boolean;
        has_pages?: boolean;
        has_downloads?: boolean;
        archived?: boolean;
        disabled?: boolean;
        visibility?: string;
        pushed_at?: string;
        created_at?: string;
        updated_at?: string;
        permissions?: {
            admin?: boolean;
            maintain?: boolean;
            push?: boolean;
            triage?: boolean;
            pull?: boolean;
        };
        allow_rebase_merge?: boolean;
        temp_clone_token?: string;
        allow_squash_merge?: boolean;
        allow_auto_merge?: boolean;
        delete_branch_on_merge?: boolean;
        allow_update_branch?: boolean;
        use_squash_pr_title_as_default?: boolean;
        /**
         * @description The default value for a squash merge commit title:
         *
         *     - `PR_TITLE` - default to the pull request's title.
         *     - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
         * @enum {string}
         */
        squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE";
        /**
         * @description The default value for a squash merge commit message:
         *
         *     - `PR_BODY` - default to the pull request's body.
         *     - `COMMIT_MESSAGES` - default to the branch's commit messages.
         *     - `BLANK` - default to a blank commit message.
         * @enum {string}
         */
        squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK";
        /**
         * @description The default value for a merge commit title.
         *
         *     - `PR_TITLE` - default to the pull request's title.
         *     - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
         * @enum {string}
         */
        merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE";
        /**
         * @description The default value for a merge commit message.
         *
         *     - `PR_TITLE` - default to the pull request's title.
         *     - `PR_BODY` - default to the pull request's body.
         *     - `BLANK` - default to a blank commit message.
         * @enum {string}
         */
        merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK";
        allow_merge_commit?: boolean;
        subscribers_count?: number;
        network_count?: number;
    } | null;
    temp_clone_token?: string;
    /**
     * @description Whether to allow squash merges for pull requests.
     * @default true
     * @example true
     */
    allow_squash_merge: boolean;
    /**
     * @description Whether to allow Auto-merge to be used on pull requests.
     * @default false
     * @example false
     */
    allow_auto_merge: boolean;
    /**
     * @description Whether to delete head branches when pull requests are merged
     * @default false
     * @example false
     */
    delete_branch_on_merge: boolean;
    /**
     * @description Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.
     * @default false
     * @example false
     */
    allow_update_branch: boolean;
    /**
     * @deprecated
     * @description Whether a squash merge commit can use the pull request title as default. **This property is closing down. Please use `squash_merge_commit_title` instead.
     * @default false
     */
    use_squash_pr_title_as_default: boolean;
    /**
     * @description The default value for a squash merge commit title:
     *
     *     - `PR_TITLE` - default to the pull request's title.
     *     - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     * @enum {string}
     */
    squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE";
    /**
     * @description The default value for a squash merge commit message:
     *
     *     - `PR_BODY` - default to the pull request's body.
     *     - `COMMIT_MESSAGES` - default to the branch's commit messages.
     *     - `BLANK` - default to a blank commit message.
     * @enum {string}
     */
    squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK";
    /**
     * @description The default value for a merge commit title.
     *
     *     - `PR_TITLE` - default to the pull request's title.
     *     - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     * @enum {string}
     */
    merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE";
    /**
     * @description The default value for a merge commit message.
     *
     *     - `PR_TITLE` - default to the pull request's title.
     *     - `PR_BODY` - default to the pull request's body.
     *     - `BLANK` - default to a blank commit message.
     * @enum {string}
     */
    merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK";
    /**
     * @description Whether to allow merge commits for pull requests.
     * @default true
     * @example true
     */
    allow_merge_commit: boolean;
    /** @description Whether to allow forking this repo */
    allow_forking?: boolean;
    /**
     * @description Whether to require contributors to sign off on web-based commits
     * @default false
     */
    web_commit_signoff_required: boolean;
    subscribers_count?: number;
    network_count?: number;
    open_issues: number;
    watchers: number;
    master_branch?: string;
    /** @example "2020-07-09T00:17:42Z" */
    starred_at?: string;
    /** @description Whether anonymous git access is enabled for this repository */
    anonymous_access_enabled?: boolean;
}


export interface LicenseSimple {
    /** @example mit */
    key: string;
    /** @example MIT License */
    name: string;
    /**
     * Format: uri
     * @example https://api.github.com/licenses/mit
     */
    url: string | null;
    /** @example MIT */
    spdx_id: string | null;
    /** @example MDc6TGljZW5zZW1pdA== */
    node_id: string;
    /** Format: uri */
    html_url?: string;
}

export interface SimpleUser {
    name?: string | null;
    email?: string | null;
    /** @example octocat */
    login: string;
    /**
     * Format: int64
     * @example 1
     */
    id: number;
    /** @example MDQ6VXNlcjE= */
    node_id: string;
    /**
     * Format: uri
     * @example https://github.com/images/error/octocat_happy.gif
     */
    avatar_url: string;
    /** @example 41d064eb2195891e12d0413f63227ea7 */
    gravatar_id: string | null;
    /**
     * Format: uri
     * @example https://api.github.com/users/octocat
     */
    url: string;
    /**
     * Format: uri
     * @example https://github.com/octocat
     */
    html_url: string;
    /**
     * Format: uri
     * @example https://api.github.com/users/octocat/followers
     */
    followers_url: string;
    /** @example https://api.github.com/users/octocat/following{/other_user} */
    following_url: string;
    /** @example https://api.github.com/users/octocat/gists{/gist_id} */
    gists_url: string;
    /** @example https://api.github.com/users/octocat/starred{/owner}{/repo} */
    starred_url: string;
    /**
     * Format: uri
     * @example https://api.github.com/users/octocat/subscriptions
     */
    subscriptions_url: string;
    /**
     * Format: uri
     * @example https://api.github.com/users/octocat/orgs
     */
    organizations_url: string;
    /**
     * Format: uri
     * @example https://api.github.com/users/octocat/repos
     */
    repos_url: string;
    /** @example https://api.github.com/users/octocat/events{/privacy} */
    events_url: string;
    /**
     * Format: uri
     * @example https://api.github.com/users/octocat/received_events
     */
    received_events_url: string;
    /** @example User */
    type: string;
    site_admin: boolean;
    /** @example "2020-07-09T00:17:55Z" */
    starred_at?: string;
    /** @example public */
    user_view_type?: string;
}

export interface WebhooksIssue {
    /** @enum {string|null} */
    active_lock_reason: "resolved" | "off-topic" | "too heated" | "spam" | null;
    /** User */
    assignee?: {
        /** Format: uri */
        avatar_url?: string;
        deleted?: boolean;
        email?: string | null;
        /** Format: uri-template */
        events_url?: string;
        /** Format: uri */
        followers_url?: string;
        /** Format: uri-template */
        following_url?: string;
        /** Format: uri-template */
        gists_url?: string;
        gravatar_id?: string;
        /** Format: uri */
        html_url?: string;
        id: number;
        login: string;
        name?: string;
        node_id?: string;
        /** Format: uri */
        organizations_url?: string;
        /** Format: uri */
        received_events_url?: string;
        /** Format: uri */
        repos_url?: string;
        site_admin?: boolean;
        /** Format: uri-template */
        starred_url?: string;
        /** Format: uri */
        subscriptions_url?: string;
        /** @enum {string} */
        type?: "Bot" | "User" | "Organization" | "Mannequin";
        /** Format: uri */
        url?: string;
        user_view_type?: string;
    } | null;
    assignees: ({
        /** Format: uri */
        avatar_url?: string;
        deleted?: boolean;
        email?: string | null;
        /** Format: uri-template */
        events_url?: string;
        /** Format: uri */
        followers_url?: string;
        /** Format: uri-template */
        following_url?: string;
        /** Format: uri-template */
        gists_url?: string;
        gravatar_id?: string;
        /** Format: uri */
        html_url?: string;
        id: number;
        login: string;
        name?: string;
        node_id?: string;
        /** Format: uri */
        organizations_url?: string;
        /** Format: uri */
        received_events_url?: string;
        /** Format: uri */
        repos_url?: string;
        site_admin?: boolean;
        /** Format: uri-template */
        starred_url?: string;
        /** Format: uri */
        subscriptions_url?: string;
        /** @enum {string} */
        type?: "Bot" | "User" | "Organization" | "Mannequin";
        /** Format: uri */
        url?: string;
        user_view_type?: string;
    } | null)[];
    /**
     * AuthorAssociation
     * @description How the author is associated with the repository.
     * @enum {string}
     */
    author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
    /** @description Contents of the issue */
    body: string | null;
    /** Format: date-time */
    closed_at: string | null;
    comments: number;
    /** Format: uri */
    comments_url: string;
    /** Format: date-time */
    created_at: string;
    draft?: boolean;
    /** Format: uri */
    events_url: string;
    /** Format: uri */
    html_url: string;
    /** Format: int64 */
    id: number;
    labels?: {
        /** @description 6-character hex code, without the leading #, identifying the color */
        color: string;
        default: boolean;
        description: string | null;
        id: number;
        /** @description The name of the label. */
        name: string;
        node_id: string;
        /**
         * Format: uri
         * @description URL for the label
         */
        url: string;
    }[];
    /** Format: uri-template */
    labels_url: string;
    locked?: boolean;
    /**
     * Milestone
     * @description A collection of related issues and pull requests.
     */
    milestone: {
        /** Format: date-time */
        closed_at: string | null;
        closed_issues: number;
        /** Format: date-time */
        created_at: string;
        /** User */
        creator: {
            /** Format: uri */
            avatar_url?: string;
            deleted?: boolean;
            email?: string | null;
            /** Format: uri-template */
            events_url?: string;
            /** Format: uri */
            followers_url?: string;
            /** Format: uri-template */
            following_url?: string;
            /** Format: uri-template */
            gists_url?: string;
            gravatar_id?: string;
            /** Format: uri */
            html_url?: string;
            id: number;
            login: string;
            name?: string;
            node_id?: string;
            /** Format: uri */
            organizations_url?: string;
            /** Format: uri */
            received_events_url?: string;
            /** Format: uri */
            repos_url?: string;
            site_admin?: boolean;
            /** Format: uri-template */
            starred_url?: string;
            /** Format: uri */
            subscriptions_url?: string;
            /** @enum {string} */
            type?: "Bot" | "User" | "Organization" | "Mannequin";
            /** Format: uri */
            url?: string;
            user_view_type?: string;
        } | null;
        description: string | null;
        /** Format: date-time */
        due_on: string | null;
        /** Format: uri */
        html_url: string;
        id: number;
        /** Format: uri */
        labels_url: string;
        node_id: string;
        /** @description The number of the milestone. */
        number: number;
        open_issues: number;
        /**
         * @description The state of the milestone.
         * @enum {string}
         */
        state: "open" | "closed";
        /** @description The title of the milestone. */
        title: string;
        /** Format: date-time */
        updated_at: string;
        /** Format: uri */
        url: string;
    } | null;
    node_id: string;
    number: number;
    /**
     * App
     * @description GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performed_via_github_app?: {
        /** Format: date-time */
        created_at: string | null;
        description: string | null;
        /** @description The list of events for the GitHub app */
        events?: ("branch_protection_rule" | "check_run" | "check_suite" | "code_scanning_alert" | "commit_comment" | "content_reference" | "create" | "delete" | "deployment" | "deployment_review" | "deployment_status" | "deploy_key" | "discussion" | "discussion_comment" | "fork" | "gollum" | "issues" | "issue_comment" | "label" | "member" | "membership" | "milestone" | "organization" | "org_block" | "page_build" | "project" | "project_card" | "project_column" | "public" | "pull_request" | "pull_request_review" | "pull_request_review_comment" | "push" | "registry_package" | "release" | "repository" | "repository_dispatch" | "secret_scanning_alert" | "star" | "status" | "team" | "team_add" | "watch" | "workflow_dispatch" | "workflow_run" | "reminder" | "pull_request_review_thread")[];
        /** Format: uri */
        external_url: string | null;
        /** Format: uri */
        html_url: string;
        /** @description Unique identifier of the GitHub app */
        id: number | null;
        /** @description The name of the GitHub app */
        name: string;
        node_id: string;
        /** User */
        owner: {
            /** Format: uri */
            avatar_url?: string;
            deleted?: boolean;
            email?: string | null;
            /** Format: uri-template */
            events_url?: string;
            /** Format: uri */
            followers_url?: string;
            /** Format: uri-template */
            following_url?: string;
            /** Format: uri-template */
            gists_url?: string;
            gravatar_id?: string;
            /** Format: uri */
            html_url?: string;
            id: number;
            login: string;
            name?: string;
            node_id?: string;
            /** Format: uri */
            organizations_url?: string;
            /** Format: uri */
            received_events_url?: string;
            /** Format: uri */
            repos_url?: string;
            site_admin?: boolean;
            /** Format: uri-template */
            starred_url?: string;
            /** Format: uri */
            subscriptions_url?: string;
            /** @enum {string} */
            type?: "Bot" | "User" | "Organization";
            /** Format: uri */
            url?: string;
            user_view_type?: string;
        } | null;
        /** @description The set of permissions for the GitHub app */
        permissions?: {
            /** @enum {string} */
            actions?: "read" | "write";
            /** @enum {string} */
            administration?: "read" | "write";
            /** @enum {string} */
            checks?: "read" | "write";
            /** @enum {string} */
            content_references?: "read" | "write";
            /** @enum {string} */
            contents?: "read" | "write";
            /** @enum {string} */
            deployments?: "read" | "write";
            /** @enum {string} */
            discussions?: "read" | "write";
            /** @enum {string} */
            emails?: "read" | "write";
            /** @enum {string} */
            environments?: "read" | "write";
            /** @enum {string} */
            issues?: "read" | "write";
            /** @enum {string} */
            keys?: "read" | "write";
            /** @enum {string} */
            members?: "read" | "write";
            /** @enum {string} */
            metadata?: "read" | "write";
            /** @enum {string} */
            organization_administration?: "read" | "write";
            /** @enum {string} */
            organization_hooks?: "read" | "write";
            /** @enum {string} */
            organization_packages?: "read" | "write";
            /** @enum {string} */
            organization_plan?: "read" | "write";
            /** @enum {string} */
            organization_projects?: "read" | "write" | "admin";
            /** @enum {string} */
            organization_secrets?: "read" | "write";
            /** @enum {string} */
            organization_self_hosted_runners?: "read" | "write";
            /** @enum {string} */
            organization_user_blocking?: "read" | "write";
            /** @enum {string} */
            packages?: "read" | "write";
            /** @enum {string} */
            pages?: "read" | "write";
            /** @enum {string} */
            pull_requests?: "read" | "write";
            /** @enum {string} */
            repository_hooks?: "read" | "write";
            /** @enum {string} */
            repository_projects?: "read" | "write";
            /** @enum {string} */
            secret_scanning_alerts?: "read" | "write";
            /** @enum {string} */
            secrets?: "read" | "write";
            /** @enum {string} */
            security_events?: "read" | "write";
            /** @enum {string} */
            security_scanning_alert?: "read" | "write";
            /** @enum {string} */
            single_file?: "read" | "write";
            /** @enum {string} */
            statuses?: "read" | "write";
            /** @enum {string} */
            team_discussions?: "read" | "write";
            /** @enum {string} */
            vulnerability_alerts?: "read" | "write";
            /** @enum {string} */
            workflows?: "read" | "write";
        };
        /** @description The slug name of the GitHub app */
        slug?: string;
        /** Format: date-time */
        updated_at: string | null;
    } | null;
    pull_request?: {
        /** Format: uri */
        diff_url?: string;
        /** Format: uri */
        html_url?: string;
        /** Format: date-time */
        merged_at?: string | null;
        /** Format: uri */
        patch_url?: string;
        /** Format: uri */
        url?: string;
    };
    /** Reactions */
    reactions: {
        "+1": number;
        "-1": number;
        confused: number;
        eyes: number;
        heart: number;
        hooray: number;
        laugh: number;
        rocket: number;
        total_count: number;
        /** Format: uri */
        url: string;
    };
    /** Format: uri */
    repository_url: string;
    /** Sub-issues Summary */
    sub_issues_summary?: {
        total: number;
        completed: number;
        percent_completed: number;
    };
    /**
     * @description State of the issue; either 'open' or 'closed'
     * @enum {string}
     */
    state?: "open" | "closed";
    state_reason?: string | null;
    /** Format: uri */
    timeline_url?: string;
    /** @description Title of the issue */
    title: string;
    type?: IssueType;
    /** Format: date-time */
    updated_at: string;
    /**
     * Format: uri
     * @description URL for the issue
     */
    url: string;
    /** User */
    user: {
        /** Format: uri */
        avatar_url?: string;
        deleted?: boolean;
        email?: string | null;
        /** Format: uri-template */
        events_url?: string;
        /** Format: uri */
        followers_url?: string;
        /** Format: uri-template */
        following_url?: string;
        /** Format: uri-template */
        gists_url?: string;
        gravatar_id?: string;
        /** Format: uri */
        html_url?: string;
        /** Format: int64 */
        id: number;
        login: string;
        name?: string;
        node_id?: string;
        /** Format: uri */
        organizations_url?: string;
        /** Format: uri */
        received_events_url?: string;
        /** Format: uri */
        repos_url?: string;
        site_admin?: boolean;
        /** Format: uri-template */
        starred_url?: string;
        /** Format: uri */
        subscriptions_url?: string;
        /** @enum {string} */
        type?: "Bot" | "User" | "Organization" | "Mannequin";
        /** Format: uri */
        url?: string;
        user_view_type?: string;
    } | null;
}


export interface WebhooksUser {
    /** Format: uri */
    avatar_url?: string;
    deleted?: boolean;
    email?: string | null;
    /** Format: uri-template */
    events_url?: string;
    /** Format: uri */
    followers_url?: string;
    /** Format: uri-template */
    following_url?: string;
    /** Format: uri-template */
    gists_url?: string;
    gravatar_id?: string;
    /** Format: uri */
    html_url?: string;
    /** Format: int64 */
    id: number;
    login: string;
    name?: string;
    node_id?: string;
    /** Format: uri */
    organizations_url?: string;
    /** Format: uri */
    received_events_url?: string;
    /** Format: uri */
    repos_url?: string;
    site_admin?: boolean;
    /** Format: uri-template */
    starred_url?: string;
    /** Format: uri */
    subscriptions_url?: string;
    /** @enum {string} */
    type?: "Bot" | "User" | "Organization";
    /** Format: uri */
    url?: string;
    user_view_type?: string;
}

export interface IssueType {
    /** @description The unique identifier of the issue type. */
    id: number;
    /** @description The node identifier of the issue type. */
    node_id: string;
    /** @description The name of the issue type. */
    name: string;
    /** @description The description of the issue type. */
    description: string | null;
    /**
     * @description The color of the issue type.
     * @enum {string|null}
     */
    color?: "gray" | "blue" | "green" | "yellow" | "orange" | "red" | "pink" | "purple" | null;
    /**
     * Format: date-time
     * @description The time the issue type created.
     */
    created_at?: string;
    /**
     * Format: date-time
     * @description The time the issue type last updated.
     */
    updated_at?: string;
    /** @description The enabled state of the issue type. */
    is_enabled?: boolean;
}

export interface WebhooksMilestone {
    /** Format: date-time */
    closed_at: string | null;
    closed_issues: number;
    /** Format: date-time */
    created_at: string;
    /** User */
    creator: {
        /** Format: uri */
        avatar_url?: string;
        deleted?: boolean;
        email?: string | null;
        /** Format: uri-template */
        events_url?: string;
        /** Format: uri */
        followers_url?: string;
        /** Format: uri-template */
        following_url?: string;
        /** Format: uri-template */
        gists_url?: string;
        gravatar_id?: string;
        /** Format: uri */
        html_url?: string;
        id: number;
        login: string;
        name?: string;
        node_id?: string;
        /** Format: uri */
        organizations_url?: string;
        /** Format: uri */
        received_events_url?: string;
        /** Format: uri */
        repos_url?: string;
        site_admin?: boolean;
        /** Format: uri-template */
        starred_url?: string;
        /** Format: uri */
        subscriptions_url?: string;
        /** @enum {string} */
        type?: "Bot" | "User" | "Organization" | "Mannequin";
        /** Format: uri */
        url?: string;
        user_view_type?: string;
    } | null;
    description: string | null;
    /** Format: date-time */
    due_on: string | null;
    /** Format: uri */
    html_url: string;
    id: number;
    /** Format: uri */
    labels_url: string;
    node_id: string;
    /** @description The number of the milestone. */
    number: number;
    open_issues: number;
    /**
     * @description The state of the milestone.
     * @enum {string}
     */
    state: "open" | "closed";
    /** @description The title of the milestone. */
    title: string;
    /** Format: date-time */
    updated_at: string;
    /** Format: uri */
    url: string;
}


export interface WebhooksLabel {
    /** @description 6-character hex code, without the leading #, identifying the color */
    color: string;
    default: boolean;
    description: string | null;
    id: number;
    /** @description The name of the label. */
    name: string;
    node_id: string;
    /**
     * Format: uri
     * @description URL for the label
     */
    url: string;
}

export interface WebhooksUserMannequin {
    /** Format: uri */
    avatar_url?: string;
    deleted?: boolean;
    email?: string | null;
    /** Format: uri-template */
    events_url?: string;
    /** Format: uri */
    followers_url?: string;
    /** Format: uri-template */
    following_url?: string;
    /** Format: uri-template */
    gists_url?: string;
    gravatar_id?: string;
    /** Format: uri */
    html_url?: string;
    id: number;
    login: string;
    name?: string;
    node_id?: string;
    /** Format: uri */
    organizations_url?: string;
    /** Format: uri */
    received_events_url?: string;
    /** Format: uri */
    repos_url?: string;
    site_admin?: boolean;
    /** Format: uri-template */
    starred_url?: string;
    /** Format: uri */
    subscriptions_url?: string;
    /** @enum {string} */
    type?: "Bot" | "User" | "Organization" | "Mannequin";
    /** Format: uri */
    url?: string;
    user_view_type?: string;
}

export interface WebhooksIssueComment {
    /**
     * AuthorAssociation
     * @description How the author is associated with the repository.
     * @enum {string}
     */
    author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
    /** @description Contents of the issue comment */
    body: string;
    /** Format: date-time */
    created_at: string;
    /** Format: uri */
    html_url: string;
    /**
     * Format: int64
     * @description Unique identifier of the issue comment
     */
    id: number;
    /** Format: uri */
    issue_url: string;
    node_id: string;
    performed_via_github_app: Integration | null;
    /** Reactions */
    reactions: {
        "+1": number;
        "-1": number;
        confused: number;
        eyes: number;
        heart: number;
        hooray: number;
        laugh: number;
        rocket: number;
        total_count: number;
        /** Format: uri */
        url: string;
    };
    /** Format: date-time */
    updated_at: string;
    /**
     * Format: uri
     * @description URL for the issue comment
     */
    url: string;
    /** User */
    user: {
        /** Format: uri */
        avatar_url?: string;
        deleted?: boolean;
        email?: string | null;
        /** Format: uri-template */
        events_url?: string;
        /** Format: uri */
        followers_url?: string;
        /** Format: uri-template */
        following_url?: string;
        /** Format: uri-template */
        gists_url?: string;
        gravatar_id?: string;
        /** Format: uri */
        html_url?: string;
        /** Format: int64 */
        id: number;
        login: string;
        name?: string;
        node_id?: string;
        /** Format: uri */
        organizations_url?: string;
        /** Format: uri */
        received_events_url?: string;
        /** Format: uri */
        repos_url?: string;
        site_admin?: boolean;
        /** Format: uri-template */
        starred_url?: string;
        /** Format: uri */
        subscriptions_url?: string;
        /** @enum {string} */
        type?: "Bot" | "User" | "Organization" | "Mannequin";
        /** Format: uri */
        url?: string;
        user_view_type?: string;
    } | null;
}


export interface WebhooksChanges {
    body?: {
        /** @description The previous version of the body. */
        from: string;
    };
}

export interface Integration {
    /**
     * @description Unique identifier of the GitHub app
     * @example 37
     */
    id: number;
    /**
     * @description The slug name of the GitHub app
     * @example probot-owners
     */
    slug?: string;
    /** @example MDExOkludGVncmF0aW9uMQ== */
    node_id: string;
    /** @example "Iv1.25b5d1e65ffc4022" */
    client_id?: string;
    owner: SimpleUser | Enterprise;
    /**
     * @description The name of the GitHub app
     * @example Probot Owners
     */
    name: string;
    /** @example The description of the app. */
    description: string | null;
    /**
     * Format: uri
     * @example https://example.com
     */
    external_url: string;
    /**
     * Format: uri
     * @example https://github.com/apps/super-ci
     */
    html_url: string;
    /**
     * Format: date-time
     * @example 2017-07-08T16:18:44-04:00
     */
    created_at: string;
    /**
     * Format: date-time
     * @example 2017-07-08T16:18:44-04:00
     */
    updated_at: string;
    /**
     * @description The set of permissions for the GitHub app
     * @example {
     *       "issues": "read",
     *       "deployments": "write"
     *     }
     */
    permissions: {
        issues?: string;
        checks?: string;
        metadata?: string;
        contents?: string;
        deployments?: string;
    } & {
        [key: string]: string;
    };
    /**
     * @description The list of events for the GitHub app. Note that the `installation_target`, `security_advisory`, and `meta` events are not included because they are global events and not specific to an installation.
     * @example [
     *       "label",
     *       "deployment"
     *     ]
     */
    events: string[];
    /**
     * @description The number of installations associated with the GitHub app. Only returned when the integration is requesting details about itself.
     * @example 5
     */
    installations_count?: number;
}