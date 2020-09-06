import { User, Issue, Repository } from './models'

export const FETCH_GITHUB_USERS = 'FETCH_GITHUB_USERS'
export const FETCH_GITHUB_ISSUES = 'FETCH_GITHUB_ISSUES'
export const FETCH_GITHUB_REPOSITORIES = 'FETCH_GITHUB_REPOSITORIES'
export const RESET_RESULTS = 'RESET_RESULTS'

export interface FetchGithubUsers {
    type: typeof FETCH_GITHUB_USERS
    payload: []
}

export interface FetchGithubIssues {
    type: typeof FETCH_GITHUB_ISSUES
    payload: []
}

export interface FetchGithubRepositories {
    type: typeof FETCH_GITHUB_REPOSITORIES
    payload: []
}

export interface ResetResults {
    type: typeof RESET_RESULTS
}

export interface ResourceState {
    users: User[]
    issues: Issue[]
    repositories: Repository[]
}

export type ResourceActionTypes =
    | FetchGithubUsers
    | FetchGithubIssues
    | FetchGithubRepositories
    | ResetResults
