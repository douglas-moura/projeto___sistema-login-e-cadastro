import { fazerLogin, mostrarSenha } from "./functions/login.js"
import { cadastrarUsuario, aceitarTermos, alertaSenhas, validaSenha } from "./functions/cadastro.js"
import { popup } from "./helpers/alertaPopup.js"
import { Cadastro } from "./helpers/interfaces.js"
import { novaID } from "./helpers/usuarios.js"

console.log(window.location.pathname)

// direcionar para login
window.addEventListener('load', () => {
    setTimeout(() => {
        if (window.location.pathname == '/') {
            window.location.href = 'http://127.0.0.1:5500/dist/pages/login.html'
        }
    }, 1000);
})

// Página de Login
if (window.location.pathname == '/dist/index.html') {
    // fazer login
    document.getElementById('btn-login')!.addEventListener('click', async (e) => {
        e.preventDefault()
        
        const userEmail = document.getElementById('input-email') as HTMLInputElement
        const userSenha = document.getElementById('input-senha') as HTMLInputElement

        fazerLogin(userEmail.value, userSenha.value)
    })
    
    // mostrar senha
    document.getElementById('btn-ver-senha')!.addEventListener('click', function(this: HTMLElement): void {
        
        const userSenha = document.getElementById('input-senha') as HTMLInputElement
        mostrarSenha(userSenha, this)
        
    })
}

// Página de Cadastro
if (window.location.pathname == '/dist/pages/cadastro.html') {
    // inputs do form de cadastro
    const nome = document.getElementById('input-nome') as HTMLInputElement
    const email = document.getElementById('input-email') as HTMLInputElement
    const senha = document.getElementById('input-senha') as HTMLInputElement
    const confirm = document.getElementById('input-c-senha') as HTMLInputElement

    // checar caracteres senhas
    senha.addEventListener('input', () => {
        validaSenha(senha.value)
    })
    // alerta de senhas
    senha.addEventListener('input', () => {
        alertaSenhas(senha, confirm)
    })
    // alerta de senhas
    confirm.addEventListener('input', () => {
        alertaSenhas(senha, confirm)
    })

    // aceita termos e habilita botão
    aceitarTermos('check-termos', 'btn-cadastrar')

    // cadastrar usuario
    document.getElementById('btn-cadastrar')!.addEventListener('click', async (e) => {
        e.preventDefault()     

        const novoCadastro: Cadastro = {
            id: await novaID(),
            nome: nome.value,
            email: email.value,
            senha: senha.value
        }

        if (await cadastrarUsuario(novoCadastro) && alertaSenhas(senha, confirm)) {
            popup('sucesso', 'Cadastrado com sucesso!')
            setTimeout(() => {
                window.location.replace('http://127.0.0.1:5500/dist/pages/inicio.html')
            }, 2000)
        } else {
            email.classList.add('border-[1px]')
            email.classList.add('border-red-500')
            popup('erro', 'E-mail já cadastrado')
        }
    })
}