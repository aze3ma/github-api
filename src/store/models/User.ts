export class User {
    id!: number
    name!: string
    avatarURL!: string
    htmlURL!: string

    constructor(values: object | any = {}) {
        Object.assign(this, values)
        this.name = values?.login
        this.avatarURL = values?.avatar_url
        this.htmlURL = values?.html_url
    }
}

export default User
