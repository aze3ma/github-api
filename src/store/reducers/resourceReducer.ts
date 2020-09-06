import {
    ResourceState,
    ResourceActionTypes,
    FETCH_GITHUB_USERS,
    FETCH_GITHUB_ISSUES,
    FETCH_GITHUB_REPOSITORIES,
    RESET_RESULTS,
} from '../types'
import { User, Issue, Repository } from '../models'

const intialState: ResourceState = {
    users: [],
    issues: [],
    repositories: [],
}

const resourceReducer = (
    state = intialState,
    action: ResourceActionTypes
): ResourceState => {
    switch (action.type) {
        case FETCH_GITHUB_USERS:
            return {
                ...intialState,
                users: action.payload.map((user) => new User(user)),
            }
        case FETCH_GITHUB_ISSUES:
            return {
                ...intialState,
                issues: action.payload.map((issue) => new Issue(issue)),
            }
        case FETCH_GITHUB_REPOSITORIES:
            return {
                ...intialState,
                repositories: action.payload.map(
                    (repository) => new Repository(repository)
                ),
            }
        case RESET_RESULTS:
            return { ...intialState }

        default:
            return state
    }
}

export default resourceReducer
