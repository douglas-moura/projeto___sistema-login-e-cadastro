import { autenticarUsuario } from "../helpers/autenticarUsuario.js";
import { popup } from "../helpers/alertaPopup.js"

export const fazerLogin = async (e: string, s: string): Promise<void> => {
    
    const status = await autenticarUsuario(e, s, 'login')
    
    if (status) {
        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5500/dist/pages/inicio.html'
        }, 1000)
    } else {
        popup('erro', 'E-mail não encontrado')
    }
}

export const mostrarSenha = (inputSenha: HTMLInputElement, icon: HTMLElement): void => {    
    if (inputSenha.attributes[0].value == 'password') {
        inputSenha.attributes[0].value = 'text'
        // o this não funciona com funcões com () => apenas com function()
        icon.attributes[0].value = "clarity:eye-show-line"
    } else {
        inputSenha.attributes[0].value = 'password'
        // o this não funciona com funcões com () => apenas com function()
        icon.attributes[0].value = "clarity:eye-hide-line"
    }
}