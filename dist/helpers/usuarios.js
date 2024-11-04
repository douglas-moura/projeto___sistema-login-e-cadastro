export const users = async (id) => {
    const endpoint = id ? id : '';
    let resultado = [];
    try {
        const response = await fetch(`http://localhost:3000/users?${endpoint}`);
        const data = await response.json();
        resultado = data;
    }
    catch (err) {
        console.error(err);
    }
    return resultado;
};
export const novaID = async () => {
    const novaID = await users();
    return novaID.length.toString();
};
