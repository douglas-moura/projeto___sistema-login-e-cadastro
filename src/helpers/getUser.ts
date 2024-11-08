import { User } from "./interfaces";

export const getUser = async (end: string): Promise<User[]> => {

    let user: User[] = []

    try {
        const response = await fetch(`http://localhost:3000/users${end}`)
        user = await response.json()
        return user
    } catch (err) {
        console.error(err)
    }

    return user
}