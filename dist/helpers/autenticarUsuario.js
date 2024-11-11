import { getUser } from "../helpers/getUser.js";
export const autenticarUsuario = async (email, senha, tipo) => {
    let endpoint = tipo == 'login' ? `?email=${email}&senha=${senha}` : `?email=${email}`;
    let resultado = false;
    if (email != '' && senha != '') {
        try {
            const data = await getUser(endpoint);
            console.log(data);
            resultado = data.length >= 1 ? true : false;
            return resultado;
        }
        catch (err) {
            console.error(err);
        }
    }
    else {
        return resultado;
    }
};
