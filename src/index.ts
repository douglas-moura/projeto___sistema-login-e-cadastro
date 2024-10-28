document.getElementById('btn-login')!.addEventListener('click', async (e) => {
    e.preventDefault()

    const userEmail = document.getElementById('input-email') as HTMLInputElement
    const userSenha = document.getElementById('input-senha') as HTMLInputElement
    const status = await autenticarUsuario(userEmail.value, userSenha.value)

    if (status) {
        login(userEmail.value)
    } else {
        alert('E-mail Incorreto')
    }
})

const autenticarUsuario = async (email: string, senha: string): Promise<boolean> => {
    if (email != '' && senha != '') {
        try {
            const response = await fetch(`http://localhost:3000/users?email=${email}&senha=${senha}`)
            const data = await response.json()
            console.log(data)
            return data.length == 1 ? true : false
        } catch (e) {
            console.error(e)
        }
    }
    return false
}

const login = (e: string): void => {
    setTimeout(() => {
        window.location.replace('http://127.0.0.1:5500/dist/pages/inicio')
    }, 1000)
}

document.getElementById('btn-ver-senha')!.addEventListener('click', function(this: HTMLElement): void {
    const userSenha = document.getElementById('input-senha') as HTMLInputElement
    const tipoCampo = userSenha.attributes[0].value
    console.log(userSenha.attributes[0].value)
    if (tipoCampo == 'password') {
        userSenha.attributes[0].value = 'text'
        // o this não funciona com funcões com () => apenas com function()
        this.attributes[0].value = "clarity:eye-show-line"
    } else {
        userSenha.attributes[0].value = 'password'
        // o this não funciona com funcões com () => apenas com function()
        this.attributes[0].value = "clarity:eye-hide-line"
    }
})