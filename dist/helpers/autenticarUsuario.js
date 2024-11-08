import { getUser } from "../helpers/getUser.js";
export const autenticarUsuario = async (email, senha, tipo) => {
    let resultado = false;
    if (tipo == 'login') {
        if (email != '' && senha != '') {
            try {
                const data = await getUser(`?email=${email}&senha=${senha}`);
                resultado = data.length == 1 ? true : false;
                return resultado;
            }
            catch (err) {
                console.error(err);
            }
        }
    }
    else if (tipo == 'cadastro') {
        if (email != '') {
            try {
                const data = await getUser(`?email=${email}`);
                data.forEach((element) => {
                    if (element.email == email) {
                        resultado = true;
                    }
                });
                return resultado;
            }
            catch (err) {
                console.error(err);
            }
        }
    }
    else {
        return false;
    }
};
