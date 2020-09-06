import React from 'react'

import './card.css'

interface IProps {
    name: string
    description?: string
    avatarURL?: string
    htmlURL?: string
    user?: object
    body?: string
}

const Card: React.FunctionComponent<IProps> = (
    props: IProps
): React.ReactElement => {
    return (
        <div className="card">
            <div className="card__header">
                <h2 className="card__title">
                    <a href={props.htmlURL}>{props.name}</a>
                </h2>
                <div className="card__avatar">
                    <img src={props.avatarURL} alt={props.name} />
                </div>
            </div>
            {props.description && (
                <p className="card__description">{props.description}</p>
            )}
        </div>
    )
}

export default Card
