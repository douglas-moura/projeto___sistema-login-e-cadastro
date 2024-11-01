
export const verificarUsuario = async (email: string): Promise<boolean> => {
    interface User {
        id: string,
        nome: string,
        email: string,
        senha: string
    }

    let resultado: boolean = false
    
    if (email != '') {
        try {
            const response = await fetch(`http://localhost:3000/users?email=${email}`)
            const data = await response.json()
            console.log(data)
            data.forEach((element: User) => {
                if (element.email == email) {
                    resultado = true
                }
            })
        } catch (err) {
            console.error(err)
        }
    }

    return resultado
}

export const exibirAlerta = (tipo: string, msg: string) => {
    const alertBox = document.getElementById('bloco-alert') as HTMLElement
    const alertContent = document.getElementById('alert-content') as HTMLElement
    const alertIcone = document.getElementById('icon-alert') as HTMLElement
    const alertMsg = document.getElementById('msg-alert') as HTMLElement
    
    alertBox.classList.remove('hidden')
    if (tipo == 'erro') {
        alertContent.classList.add('bg-red-700')
        alertIcone.attributes[1].value = 'akar-icons:triangle-alert'
        alertMsg.innerText = msg
    } else if (tipo == 'sucesso') {
        alertContent.classList.add('bg-green-700')
        alertIcone.attributes[1].value = 'akar-icons:circle-check'
        alertMsg.innerText = msg
    } else {
        alertContent.classList.add('bg-amber-500')
        alertIcone.attributes[1].value = 'akar-icons:info'
        alertMsg.innerText = msg
    }
    setTimeout(() => {
        alertBox.classList.add('hidden')
    }, 3000);
}