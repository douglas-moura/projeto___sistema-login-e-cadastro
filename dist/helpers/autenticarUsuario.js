export const autenticarUsuario2 = async (email, senha) => {
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
