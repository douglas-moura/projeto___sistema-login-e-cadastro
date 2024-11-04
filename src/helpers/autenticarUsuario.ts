import { User } from "../helpers/interfaces.js";

export const autenticarUsuario = async (email: string, senha: string, tipo: string) => {
    
    let resultado: boolean = false

    if(tipo == 'login') {
        if (email != '' && senha != '') {
            try {
                const response = await fetch(`http://localhost:3000/users?email=${email}&senha=${senha}`)
                const data = await response.json()
                resultado = data.length == 1 ? true : false
                return resultado
            }
            catch (err) {
                console.error(err)
            }
        }
    } else if (tipo == 'cadastro') {        
        if (email != '') {
            try {
                const response = await fetch(`http://localhost:3000/users?email=${email}`)
                const data = await response.json()
                data.forEach((element: User) => {
                    if (element.email == email) {
                        resultado = true
                    }
                })
                return resultado
            } catch (err) {
                console.error(err)
            }
        }
    } else {
        return false;
    }
}