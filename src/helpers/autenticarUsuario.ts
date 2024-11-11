import { getUser } from "../helpers/getUser.js"

export const autenticarUsuario = async (email: string, senha: string, tipo: string) => {
    
    let endpoint = tipo == 'login' ? `?email=${email}&senha=${senha}` : `?email=${email}`
    let resultado: boolean = false

    if (email != '' && senha != '') {
        try {
            const data = await getUser(endpoint)
            console.log(data);
            
            resultado = data.length >= 1 ? true : false
            return resultado
        }
        catch (err) {
            console.error(err)
        }
    } else {
        return resultado
    }
}