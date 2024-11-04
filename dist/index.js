import { fazerLogin, mostrarSenha } from "./functions/login.js";
import { cadastrarUsuario, aceitarTermos, alertaSenhas, validaSenha } from "./functions/cadastro.js";
import { popup } from "./helpers/alertaPopup.js";
import { novaID } from "./helpers/usuarios.js";
console.log(window.location.pathname);
window.addEventListener('load', () => {
    setTimeout(() => {
        if (window.location.pathname == '/') {
            window.location.href = 'http://127.0.0.1:5500/dist/pages/login.html';
        }
    }, 1000);
});
if (window.location.pathname == '/dist/index.html') {
    document.getElementById('btn-login').addEventListener('click', async (e) => {
        e.preventDefault();
        const userEmail = document.getElementById('input-email');
        const userSenha = document.getElementById('input-senha');
        fazerLogin(userEmail.value, userSenha.value);
    });
    document.getElementById('btn-ver-senha').addEventListener('click', function () {
        const userSenha = document.getElementById('input-senha');
        mostrarSenha(userSenha, this);
    });
}
if (window.location.pathname == '/dist/pages/cadastro.html') {
    const nome = document.getElementById('input-nome');
    const email = document.getElementById('input-email');
    const senha = document.getElementById('input-senha');
    const confirm = document.getElementById('input-c-senha');
    senha.addEventListener('input', () => {
        validaSenha(senha.value);
    });
    senha.addEventListener('input', () => {
        alertaSenhas(senha, confirm);
    });
    confirm.addEventListener('input', () => {
        alertaSenhas(senha, confirm);
    });
    aceitarTermos('check-termos', 'btn-cadastrar');
    document.getElementById('btn-cadastrar').addEventListener('click', async (e) => {
        e.preventDefault();
        const novoCadastro = {
            id: await novaID(),
            nome: nome.value,
            email: email.value,
            senha: senha.value
        };
        if (await cadastrarUsuario(novoCadastro) && alertaSenhas(senha, confirm)) {
            popup('sucesso', 'Cadastrado com sucesso!');
            setTimeout(() => {
                window.location.replace('http://127.0.0.1:5500/dist/pages/inicio.html');
            }, 2000);
        }
        else {
            email.classList.add('border-[1px]');
            email.classList.add('border-red-500');
            popup('erro', 'E-mail já cadastrado');
        }
    });
}
