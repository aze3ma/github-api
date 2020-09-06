import GITHUB_API from '../../utils/API'
import { Dispatch, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import {
    RESET_RESULTS,
    FETCH_GITHUB_USERS,
    FETCH_GITHUB_ISSUES,
    FETCH_GITHUB_REPOSITORIES,
    ResourceActionTypes,
    ResourceState,
} from '../types'

interface SearchOption {
    searchTerm: string
    searchTarget: string
}

enum SearchTypes {
    users = 'users',
    issues = 'issues',
    repositories = 'repositories',
}

export const getGithubResourse = (
    options: SearchOption
): ThunkAction<void, ResourceState, unknown, Action<ResourceActionTypes>> => {
    return (dispatch: Dispatch) => {
        GITHUB_API.get(
            `/search/${options.searchTarget}?q=${options.searchTerm}`
        )
            .then((response) => {
                switch (options.searchTarget) {
                    case SearchTypes.issues:
                        dispatch({
                            type: FETCH_GITHUB_ISSUES,
                            payload: response.data.items,
                        })
                        break
                    case SearchTypes.repositories:
                        dispatch({
                            type: FETCH_GITHUB_REPOSITORIES,
                            payload: response.data.items,
                        })
                        break
                    default:
                        dispatch({
                            type: FETCH_GITHUB_USERS,
                            payload: response.data.items,
                        })
                        break
                }
            })
            .catch((error) => {
                return new Error(error)
            })
    }
}

export const resetResults = (): ThunkAction<
    void,
    ResourceState,
    unknown,
    Action<ResourceActionTypes>
> => {
    console.log('hena')
    return (dispatch: Dispatch) => dispatch({ type: RESET_RESULTS })
}
