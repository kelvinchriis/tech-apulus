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

    } else if (autenticar(email_login, senha_login)) {
        window.location = "dashboard.html"
    } else {
        executarFuncTemporal(move, 8, 30)
        inputEmailLoginFunc.style.border = "2px solid red"
        inputSenhaLoginFunc.style.border = "2px solid red"
    }
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
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            
            if(resposta.status === 403) {
                return false;
            } else if (resposta.ok) {
                resposta.json().then(json => {
                    sessionStorage.CHAVE = json.chave
                    sessionStorage.ID_FUNCIONARIO = json.id_funcionario
                    sessionStorage.EMAIL = json.email
                    sessionStorage.NOME = json.nome
                    sessionStorage.CPF = json.cpf
                    sessionStorage.ID_EMPRESA = json.id_empresa
                    sessionStorage.EMPRESA = json.empresa
                });
                return true;
            } else {
                return false;
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
   
}