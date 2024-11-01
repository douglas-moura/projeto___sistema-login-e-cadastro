"use strict";
document.getElementById('btn-login').addEventListener('click', async (e) => {
    e.preventDefault();
    const userEmail = document.getElementById('input-email');
    const userSenha = document.getElementById('input-senha');
    const status = await autenticarUsuario(userEmail.value, userSenha.value);
    if (status) {
        login(userEmail.value);
    }
    else {
        alert('E-mail Incorreto');
    }
});
document.getElementById('btn-ver-senha').addEventListener('click', function () {
    const userSenha = document.getElementById('input-senha');
    const tipoCampo = userSenha.attributes[0].value;
    console.log(userSenha.attributes[0].value);
    if (tipoCampo == 'password') {
        userSenha.attributes[0].value = 'text';
        this.attributes[0].value = "clarity:eye-show-line";
    }
    else {
        userSenha.attributes[0].value = 'password';
        this.attributes[0].value = "clarity:eye-hide-line";
    }
});
const autenticarUsuario = async (email, senha) => {
    if (email != '' && senha != '') {
        try {
            const response = await fetch(`http://localhost:3000/users?email=${email}&senha=${senha}`);
            const data = await response.json();
            console.log(data);
            return data.length == 1 ? true : false;
        }
        catch (e) {
            console.error(e);
        }
    }
    return false;
};
const login = (e) => {
    setTimeout(() => {
        window.location.replace('http://127.0.0.1:5500/dist/pages/inicio.html');
    }, 1000);
};
