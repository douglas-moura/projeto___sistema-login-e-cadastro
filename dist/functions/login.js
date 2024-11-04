import { autenticarUsuario } from "../helpers/autenticarUsuario.js";
import { popup } from "../helpers/alertaPopup.js";
export const fazerLogin = async (e, s) => {
    const status = await autenticarUsuario(e, s, 'login');
    if (status) {
        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5500/dist/pages/inicio.html';
        }, 1000);
    }
    else {
        popup('erro', 'E-mail não encontrado');
    }
};
export const mostrarSenha = (inputSenha, icon) => {
    if (inputSenha.attributes[0].value == 'password') {
        inputSenha.attributes[0].value = 'text';
        icon.attributes[0].value = "clarity:eye-show-line";
    }
    else {
        inputSenha.attributes[0].value = 'password';
        icon.attributes[0].value = "clarity:eye-hide-line";
    }
};
