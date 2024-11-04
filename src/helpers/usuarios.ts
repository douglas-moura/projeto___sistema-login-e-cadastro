import { User } from "./interfaces.js"

export const users = async (id?: string): Promise<User[]> => {
    const endpoint = id ? id : ''
    let resultado: User[] = []
    try {
        const response = await fetch(`http://localhost:3000/users?${endpoint}`)
        const data = await response.json()
        resultado = data
    } catch (err) {
        console.error(err)
    }
    return resultado
}

export const novaID = async (): Promise<string> => {
    const novaID = await users()
    return novaID.length.toString()
}