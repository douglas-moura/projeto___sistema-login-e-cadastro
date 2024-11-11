import { fazerLogin, mostrarSenha } from "./functions/login.js"
import { cadastrarUsuario, aceitarTermos, alertaSenhas, validaSenha, validarEmail } from "./functions/cadastro.js"
import { novaID } from "./helpers/usuarios.js"
import { popup } from "./helpers/alertaPopup.js"
import { User } from "./helpers/interfaces.js"
import { getUser } from "./helpers/getUser.js"
import { autenticarUsuario } from "./helpers/autenticarUsuario.js"

console.log(window.location.pathname)

// direcionar para login
window.addEventListener('load', () => {
    setTimeout(() => {
        if (window.location.pathname == '/index.html') {
            window.location.href = 'http://127.0.0.1:5500/dist/pages/login.html'
        }
    }, 10);
})

// LOGIN
if (window.location.pathname == '/dist/pages/login.html') {
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

// CADASTRO
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
        
        const novoCadastro: User = {
            id: await novaID(),
            nome: nome.value,
            email: email.value,
            senha: senha.value
        }
        
        const statusCadastro = await autenticarUsuario(novoCadastro.email, novoCadastro.senha, 'cadastro')

        if (validarEmail(novoCadastro.email)) {
            if (!statusCadastro && alertaSenhas(senha, confirm)) {
                popup('sucesso', 'Cadastrado com sucesso!')
                setTimeout(() => {
                    cadastrarUsuario(novoCadastro)            
                    window.location.replace('http://127.0.0.1:5500/index.html')
                }, 2000)
            } else {
                popup('erro', 'E-mail já cadastrado')
                email.classList.add('border-[1px]')
                email.classList.add('border-red-500')
            }
        } else {
            popup('erro', 'Insira um e-mail válido')
            email.classList.add('border-[1px]')
            email.classList.add('border-red-500')
        }
    })
}

// LOGOUT
document.getElementById('log-out')?.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/dist/pages/login.html'
    sessionStorage.removeItem("user")
})

// HOME
if (window.location.pathname == '/dist/pages/inicio.html') {
    window.addEventListener('load', async () => {
        try {
            const userInfos: User[] = await getUser(`?email=${sessionStorage.getItem("user")}`)            
            document.getElementById('saudacao')!.innerText += 'Olá, ' + userInfos[0].nome
        } catch (err) {
            console.error(err)
        }        
    })
}

// PERFIL
if (window.location.pathname == '/dist/pages/perfil.html') {
    window.addEventListener('load', async () => {
        try {
            const userInfos: User[] = await getUser(`?email=${sessionStorage.getItem("user")}`)
            document.getElementById('user-nome')!.innerText = userInfos[0].nome
            document.getElementById('user-email')!.innerText = userInfos[0].email
        } catch (err) {
            console.error(err)
        }        
    })
}