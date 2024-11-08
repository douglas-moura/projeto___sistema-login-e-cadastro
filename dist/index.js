import { fazerLogin, mostrarSenha } from "./functions/login.js";
import { cadastrarUsuario, aceitarTermos, alertaSenhas, validaSenha } from "./functions/cadastro.js";
import { popup } from "./helpers/alertaPopup.js";
import { novaID } from "./helpers/usuarios.js";
import { getUser } from "./helpers/getUser.js";
console.log(window.location.pathname);
window.addEventListener('load', () => {
    setTimeout(() => {
        if (window.location.pathname == '/') {
            window.location.href = 'http://127.0.0.1:5500/dist/pages/login.html';
        }
    }, 1000);
});
if (window.location.pathname == '/dist/pages/login.html') {
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
    document.getElementById('form-cadastro').addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log("Formulário submetido sem recarregar a página.");
        const novoCadastro = {
            id: await novaID(),
            nome: nome.value,
            email: email.value,
            senha: senha.value
        };
        const statusCadastro = await cadastrarUsuario(novoCadastro);
        if (statusCadastro && alertaSenhas(senha, confirm)) {
            console.log('cadastrado');
            popup('sucesso', 'Cadastrado com sucesso!');
            setTimeout(() => {
                window.location.replace('http://127.0.0.1:5500/dist/inicio.html');
            }, 3000);
        }
        else {
            email.classList.add('border-[1px]');
            email.classList.add('border-red-500');
            popup('erro', 'E-mail já cadastrado');
        }
    });
}
if (window.location.pathname == '/dist/pages/perfil.html') {
    window.addEventListener('load', async () => {
        try {
            const userInfos = await getUser(`?email=${sessionStorage.getItem("user")}`);
            console.log(userInfos);
            document.getElementById('user-nome').innerText = userInfos[0].nome;
            document.getElementById('user-email').innerText = userInfos[0].email;
        }
        catch (err) {
            console.error(err);
        }
    });
}
