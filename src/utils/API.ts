import axios from 'axios'

const GITHUB_API = axios.create({
    baseURL: process.env.PUBLIC_URL || 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default GITHUB_API
