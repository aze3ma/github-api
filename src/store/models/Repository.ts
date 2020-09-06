import User from './User'

export class Repository {
    id!: number
    name!: string
    description!: string
    avatarURL!: string
    htmlURL!: string
    owner!: User

    constructor(values: object | any = {}) {
        Object.assign(this, values)
        this.name = values.owner?.login
        this.avatarURL = values.owner?.avatar_url
        this.htmlURL = values.owner?.html_url
    }
}
