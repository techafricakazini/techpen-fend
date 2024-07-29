import axios from "axios"

const USER_URL = ""

export default axios.create(
    {
        baseURL: USER_URL,
        headers: {
            "Content-type": "application/json"
        },
        withCredentials: true

    }

)
export const accountsAPI = axios.create(
    {
        baseURL: USER_URL,
        headers: {
            "Content-type": "application/json"
        },
        withCredentials: true
    }
)