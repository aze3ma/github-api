import User from './User'

export class Issue {
    id!: number
    name!: string
    body!: string
    avatarURL!: string
    htmlURL!: string
    user!: User

    constructor(values: object | any = {}) {
        Object.assign(this, values)
        this.name = values.user?.login
        this.avatarURL = values.user?.avatar_url
        this.htmlURL = values.user?.html_url
    }
}
