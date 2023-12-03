function verifyLogin() {
    var email_login = inputEmailLoginFunc.value
    var senha_login = inputSenhaLoginFunc.value

    inputEmailLoginFunc.placeholder = "E-mail"
    clearBorder()

    // Define uma expressão regular para validar endereços de e-mail
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;

    // Verifica se o email inserido corresponde à expressão regular
    if (email_login == "" || senha_login == "") {
        executarFuncTemporal(move, 8, 30)
        if (email_login == "") { inputEmailLogin.style.border = "2px solid #ffbf00" }
        else if (!regex.test(email_login)) {
            inputEmailLoginFunc.style.border = "2px solid red"
            inputEmailLoginFunc.placeholder = "E-mail inválido"
            inputEmailLoginFunc.value = ""
        }
        if (senha_login == "") { inputSenhaLoginFunc.style.border = "2px solid #ffbf00" }

    } else {
        autenticar(email_login, senha_login)
    }


}

function verifyLogin2() {
    var email_empresa = inputEmailLoginEmpresa.value
    var senha_empresa = inputSenhaLoginEmpresa.value
    inputEmailLoginFunc.placeholder = "E-mail"
    clearBorder()

    // Define uma expressão regular para validar endereços de e-mail
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;

    // Verifica se o email inserido corresponde à expressão regular
    if (email_empresa == "" || senha_empresa == "") {
        executarFuncTemporal(move, 8, 30)
        if (email_empresa == "") { inputEmailLogin.style.border = "2px solid #ffbf00" }
        else if (!regex.test(email_login)) {
            inputEmailLoginFunc.style.border = "2px solid red"
            inputEmailLoginFunc.placeholder = "E-mail inválido"
            inputEmailLoginFunc.value = ""
        }
        if (senha_empresa == "") { inputSenhaLoginFunc.style.border = "2px solid #ffbf00" }

    } else {
        autenticar(email_empresa, senha_empresa)
    }
}

function balancar() {
    executarFuncTemporal(move, 8, 30)
    inputEmailLoginFunc.style.border = "2px solid red"
    inputSenhaLoginFunc.style.border = "2px solid red"
}

function autenticar(email_login, senha_login) {
    fetch("/funcionarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            emailServer: email_login,
            senhaServer: senha_login
        }),
    })
    .then(function (response) {
        if (!response.ok) {
            balancar()
            throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then(function (perfil) {
            console.log(perfil);

            if (perfil.length == 0) {
                balancar()
            } else {
                sessionStorage.ID_FUNCIONARIO = perfil[0].idFuncionario
                sessionStorage.EMAIL = perfil[0].email
                sessionStorage.NOME = perfil[0].nome
                sessionStorage.CPF = perfil[0].cpf
                sessionStorage.ID_EMPRESA = perfil[0].idEmpresa
                sessionStorage.EMPRESA = perfil[0].empresa
                sessionStorage.SENHA = perfil[0].senha
                window.location = "dashboard.html" 
            }
        })
        .catch(function (error) {
            console.error('Erro:', error);
        });

}




// function autenticarEmpresa(email_empresa, senha_empresa) {
//     fetch("/empresa/autenticar", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             // crie um atributo que recebe o valor recuperado aqui
//             // Agora vá para o arquivo routes/usuario.js
//             emailServer: email_empresa,
//             senhaServer: senha_empresa
//         }),
//     })
//     .then(function (response) {
//         if (!response.ok) {
//             balancar()
//             throw new Error('Erro ao carregar os dados');
//             }
//             return response.json();
//         })
//         .then(function (perfil) {
//             console.log(perfil);

//             if (perfil.length == 0) {
//                 balancar()
//             } else {
//                 sessionStorage.ID_EMPRESA = perfil[0].idEmpresa
//                 sessionStorage.EMAIL = perfil[0].email
//                 sessionStorage.NOME = perfil[0].nome
//                 sessionStorage.CNPJ = perfil[0].cnpj
//                 sessionStorage.SENHA = perfil[0].senha
//                 window.location = "dashboard.html" 
//             }
//         })
//         .catch(function (error) {
//             console.error('Erro:', error);
//         });

// }


