function finalCadEmpresa() {

    empresa_cadastro = inputEmpresa.value
    cnpj_cadastro = inputCNPJ.value
    email_cadastro = inputEmailCadastro.value
    senha_cadastro = inputSenhaCadastro.value

    telefone_empresaP = inputTelP.value
    telefone_empresaS = inputTelS.value
    email_empresaP = inputEmailP.value
    email_empresaS = inputEmailS.value

    logradouro_endereco = inputLogradouro.value
    numero_endereco = inputNum.value
    bairro_endereco = inputBairro.value
    cidade_endereco = inputCidade.value
    estado_endereco = inputEstado.value
    cep_endereco = inputCEP.value

    clearBorder()
    if (telefone_empresaP == "" || email_empresaP == "") {
        executarFuncTemporal(move, 8, 30)
        if (telefone_empresaP == "") { inputTelP.style.border = "2px solid #ffbf00" }
        if (email_empresaP == "") { inputEmailP.style.border = "2px solid #ffbf00" }
    } else {
        
        fetch("/empresas/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: empresa_cadastro,
                emailServer: email_cadastro,
                senhaServer: senha_cadastro,
                cnpjServer: cnpj_cadastro
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    buscarIdEmpresa()
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

        return false;
    }
}

function buscarIdEmpresa(){
    fetch(`/empresas/buscar/${cnpj_cadastro}`)
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                    console.log(JSON.stringify(json));
                    sessionStorage.ID_EMPRESA = json.id_empresa;
                });
                setTimeout(() => {
                    // alert("deucerto")
                    // telaLog()
                    cadastrarEndereco()
                }, 2000)             
            } else{
                throw new Error('Erro ao consultar o ID');
            }
        })
        .catch(error => {
            // Lidar com erros aqui
            console.error('Ocorreu um erro:', error);
        });
}

function cadastrarEndereco() {
    fetch("/empresas/cadastrarendereco", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            logradouroServer: logradouro_endereco,
            numeroServer: numero_endereco,
            bairroServer: bairro_endereco,
            cidadeServer: cidade_endereco,
            estadoServer: estado_endereco,
            cepServer: cep_endereco,
            fkEmpresa: sessionStorage.ID_EMPRESA
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                // alert("papu no cu e gritaria")
                cadastrarContato()
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function cadastrarContato() {
    fetch("/empresas/cadastrarcontato", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            telefonePrincipal: telefone_empresaP,
            telefoneSecundario: telefone_empresaS,
            emailPrincipal: email_empresaP,
            emailSecundario: email_empresaS,
            fkEmpresa: sessionStorage.ID_EMPRESA
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                telaLog()
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}