import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store/reducers/rootReducer'
import { User, Issue, Repository } from '../../store/models'

import Card from '../Card'

import './results.css'

const Results: React.FunctionComponent = (): React.ReactElement => {
    const resources = useSelector((state: RootState) => state.Resource)

    const renderUsersList = (resourceList: User[]): React.ReactElement => (
        <>
            {resourceList.map((item: User) => (
                <Card key={item.id} {...item} />
            ))}
        </>
    )

    const renderIssuesList = (resourceList: Issue[]): React.ReactElement => (
        <>
            {resourceList.map((item: User) => (
                <Card key={item.id} {...item} />
            ))}
        </>
    )
    const renderRepositoriesList = (
        resourceList: Repository[]
    ): React.ReactElement => (
        <>
            {resourceList.map((item: Repository) => (
                <Card key={item.id} {...item} />
            ))}
        </>
    )

    const render = () => {
        if (resources.users.length > 0) return renderUsersList(resources.users)
        if (resources.issues.length > 0)
            return renderIssuesList(resources.issues)
        if (resources.repositories.length > 0)
            return renderRepositoriesList(resources.repositories)
    }

    return <div className="grid">{render()}</div>
}

export default Results
