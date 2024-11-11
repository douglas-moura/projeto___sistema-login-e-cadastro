export const popup = (tipo, msg) => {
    const mainPage = document.getElementById('popup-box');
    mainPage.innerHTML +=
        `<section id="bloco-alert" class="absolute z-50 top-0 mt-4">
            <div id="alert-content" class="container rounded-lg shadow-md">
                <span class="flex-row items-center text-white">
                    <iconify-icon id="icon-alert" icon="akar-icons:" height="20" class="mr-2"></iconify-icon>
                    <p id="msg-alert" class=""></p>
                </span>
            </div>
        </section>`;
    const alertBox = document.getElementById('bloco-alert');
    const alertContent = document.getElementById('alert-content');
    const alertIcone = document.getElementById('icon-alert');
    const alertMsg = document.getElementById('msg-alert');
    alertBox.classList.remove('hidden');
    if (tipo == 'erro') {
        alertContent.classList.add('bg-red-700');
        alertIcone.attributes[1].value = 'akar-icons:triangle-alert';
        alertMsg.innerText = msg;
    }
    else if (tipo == 'sucesso') {
        alertContent.classList.add('bg-green-700');
        alertIcone.attributes[1].value = 'akar-icons:circle-check';
        alertMsg.innerText = msg;
    }
    else {
        alertContent.classList.add('bg-amber-500');
        alertIcone.attributes[1].value = 'akar-icons:info';
        alertMsg.innerText = msg;
    }
    setTimeout(() => {
        alertBox.classList.add('hidden');
        alertBox.remove();
    }, 3000);
};
