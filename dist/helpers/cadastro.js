import { verificarUsuario, exibirAlerta } from "./_functions.js";
const checkTermosSeguranca = document.getElementById('check-termos');
const formNome = document.getElementById('input-nome');
const formEmail = document.getElementById('input-email');
const formSenha = document.getElementById('input-senha');
const formConfSenha = document.getElementById('input-c-senha');
formSenha.addEventListener('input', () => {
    alertaSenhas();
});
formConfSenha.addEventListener('input', () => {
    alertaSenhas();
});
document.getElementById('check-termos').addEventListener('click', () => {
    if (checkTermosSeguranca.value == 'on') {
        checkTermosSeguranca.value = 'off';
        document.getElementById('btn-cadastrar').classList.remove('btn-desativado');
        document.getElementById('btn-cadastrar').classList.add('btn-primario');
    }
    else {
        checkTermosSeguranca.value = 'on';
        document.getElementById('btn-cadastrar').classList.remove('btn-primario');
        document.getElementById('btn-cadastrar').classList.add('btn-desativado');
    }
});
document.getElementById('btn-cadastrar').addEventListener('click', async (e) => {
    e.preventDefault();
    if (await verificarUsuario(formEmail.value) == false) {
        const novoCadastro = {
            id: '1',
            nome: formNome.value,
            email: formEmail.value,
            senha: formSenha.value
        };
        exibirAlerta('sucesso', 'Cadastrado com sucesso!');
        setTimeout(() => {
            cadastrar(novoCadastro);
        }, 3000);
    }
    else {
        formEmail.classList.add('border-[1px]');
        formEmail.classList.add('border-red-500');
        exibirAlerta('erro', 'E-mail já cadastrado');
    }
});
const cadastrar = async (data) => {
    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        window.location.replace('http://127.0.0.1:5500/dist/pages/inicio.html');
    }
    catch (err) {
        console.error('Erro ao fazer POST:', err);
    }
};
const alertaSenhas = () => {
    if (formConfSenha.value != formSenha.value) {
        formConfSenha.classList.add('border-[1px]');
        formConfSenha.classList.add('border-red-500');
        document.getElementById('alert-senha').classList.remove('hidden');
    }
    else {
        formConfSenha.classList.remove('border-[1px]');
        formConfSenha.classList.remove('border-red-500');
        document.getElementById('alert-senha').classList.add('hidden');
    }
};
