import axios from "axios"
import type { AuthorizeUserDTO, User, UserDTO } from "../types/user"

const url = "/api"

export const authorizeUser = (user: AuthorizeUserDTO): Promise<User[]> => {
    return axios.post(`${url}/user`, {
        email: user.email,
        password: user.password
    },{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const addUser = (user: UserDTO): Promise<User> => {
    return axios.post(`${url}/users`, {
        name: user.name,
        email: user.email,
        password: user.password
    },
    {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}