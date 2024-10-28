"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.getElementById('btn-login').addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const userEmail = document.getElementById('input-email');
    const userSenha = document.getElementById('input-senha');
    const status = yield autenticarUsuario(userEmail.value, userSenha.value);
    if (status) {
        login(userEmail.value);
    }
    else {
        alert('E-mail Incorreto');
    }
}));
const autenticarUsuario = (email, senha) => __awaiter(void 0, void 0, void 0, function* () {
    if (email != '' && senha != '') {
        try {
            const response = yield fetch(`http://localhost:3000/users?email=${email}&senha=${senha}`);
            const data = yield response.json();
            console.log(data);
            return data.length == 1 ? true : false;
        }
        catch (e) {
            console.error(e);
        }
    }
    return false;
});
const login = (e) => {
    setTimeout(() => {
        window.location.replace('http://127.0.0.1:5500/dist/pages/inicio');
    }, 1000);
};
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
