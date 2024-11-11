export const cadastrarUsuario = async (data) => {
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
    }
    catch (err) {
        console.error('Erro ao fazer POST:', err);
    }
};
export const validaSenha = (senha) => {
    const contemNumero = /[0-9]/.test(senha);
    const contemLetraMaiuscula = /[A-Z]/.test(senha);
    const contemSimbolo = /[^a-zA-Z0-9]/.test(senha);
    const tamanhoSenha = senha.length > 8;
    if (contemNumero) {
        document.getElementById('valid-senha-num').classList.add('text-green-500');
        document.getElementById('valid-senha-num').classList.remove('text-neutral-400');
        document.getElementById('valid-senha-num-icon').attributes[1].value = 'akar-icons:check';
    }
    else {
        document.getElementById('valid-senha-num').classList.remove('text-green-500');
        document.getElementById('valid-senha-num').classList.add('text-neutral-400');
        document.getElementById('valid-senha-num-icon').attributes[1].value = 'akar-icons:x-small';
    }
    if (contemLetraMaiuscula) {
        document.getElementById('valid-senha-mai').classList.add('text-green-500');
        document.getElementById('valid-senha-mai').classList.remove('text-neutral-400');
        document.getElementById('valid-senha-mai-icon').attributes[1].value = 'akar-icons:check';
    }
    else {
        document.getElementById('valid-senha-mai').classList.remove('text-green-500');
        document.getElementById('valid-senha-mai').classList.add('text-neutral-400');
        document.getElementById('valid-senha-mai-icon').attributes[1].value = 'akar-icons:x-small';
    }
    if (contemSimbolo) {
        document.getElementById('valid-senha-sim').classList.add('text-green-500');
        document.getElementById('valid-senha-sim').classList.remove('text-neutral-400');
        document.getElementById('valid-senha-sim-icon').attributes[1].value = 'akar-icons:check';
    }
    else {
        document.getElementById('valid-senha-sim').classList.remove('text-green-500');
        document.getElementById('valid-senha-sim').classList.add('text-neutral-400');
        document.getElementById('valid-senha-sim-icon').attributes[1].value = 'akar-icons:x-small';
    }
    if (tamanhoSenha) {
        document.getElementById('valid-senha-tam').classList.add('text-green-500');
        document.getElementById('valid-senha-tam').classList.remove('text-neutral-400');
        document.getElementById('valid-senha-tam-icon').attributes[1].value = 'akar-icons:check';
    }
    else {
        document.getElementById('valid-senha-tam').classList.remove('text-green-500');
        document.getElementById('valid-senha-tam').classList.add('text-neutral-400');
        document.getElementById('valid-senha-tam-icon').attributes[1].value = 'akar-icons:x-small';
    }
    return contemNumero && contemLetraMaiuscula && contemSimbolo && tamanhoSenha;
};
export const alertaSenhas = (senha, confSenha) => {
    if (confSenha.value != senha.value) {
        confSenha.classList.add('border-[1px]');
        confSenha.classList.add('border-red-500');
        document.getElementById('alert-senha').classList.remove('hidden');
        return false;
    }
    else {
        confSenha.classList.remove('border-[1px]');
        confSenha.classList.remove('border-red-500');
        document.getElementById('alert-senha').classList.add('hidden');
        return true;
    }
};
export const aceitarTermos = (inputId, btnId) => {
    const checkTermosSeguranca = document.getElementById(inputId);
    checkTermosSeguranca.addEventListener('click', function () {
        if (this.value == 'on' && document.getElementById(btnId).classList.contains('btn-desativado')) {
            this.value = 'off';
            document.getElementById(btnId).classList.remove('btn-desativado');
            document.getElementById(btnId).classList.add('btn-primario');
        }
        else {
            this.value = 'on';
            document.getElementById(btnId).classList.remove('btn-primario');
            document.getElementById(btnId).classList.add('btn-desativado');
        }
    });
};
export const validarEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
};
