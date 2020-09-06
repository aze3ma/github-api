import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'

import {
    getGithubResourse,
    resetResults,
} from '../../store/actions/resourceActions'

import './search-bar.css'

interface IState {
    searchTerm: string
    searchTarget: string
}

const SearchBar: React.FunctionComponent<{}> = (): React.ReactElement => {
    const [search, setSearch] = useState({
        searchTerm: '',
        searchTarget: 'users',
    } as IState)

    const dispatch = useDispatch()
    const deouncedSearch = useCallback(
        debounce((value) => dispatch(getGithubResourse(value)), 1000),
        []
    )

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ): void => {
        const { name, value } = event.target
        setSearch(
            (prevState) =>
                ({
                    ...prevState,
                    [name]: value,
                } as Pick<IState, keyof IState>)
        )
        if (name === 'searchTerm') {
            if (value.length >= 3) {
                deouncedSearch({ ...search, [name]: value })
            } else {
                console.log('dd')
                dispatch(resetResults())
            }
        }
    }

    return (
        <div className="search-bar">
            <div className="search-bar__input">
                <label className="hidden" htmlFor="searchTerm">
                    Search
                </label>
                <input
                    type="text"
                    id="searchTerm"
                    name="searchTerm"
                    defaultValue={search.searchTerm}
                    onChange={handleChange}
                    placeholder="Start typing to search.."
                />
            </div>
            <div className="search-bar__search-target">
                <label className="hidden" htmlFor="searchTarget">
                    Search Target
                </label>
                <select
                    id="searchTarget"
                    name="searchTarget"
                    value={search.searchTarget}
                    onChange={handleChange}
                >
                    <option value="users">Users</option>
                    <option value="issues">Issues</option>
                    <option value="repositories">Repositories</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBar
