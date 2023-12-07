var nome_funcionario = ""
var cpf_funcionario = ""
var email_funcionario = ""
var senha_funcionario = ""

function cadastroFuncionario() {
    frameClear()
    campos_cadastro_funcionario.style.display = "block"
    botao_cad_funcionario.style.marginTop = "20px"
    selector_field.innerHTML = "LOGIN"
    tela_status = 4
}

function avancarChave() {
    nome_funcionario = inputNome.value;
    cpf_funcionario = inputCPF.value;
    email_funcionario = inputEmailCadastroFunc.value;
    senha_funcionario = inputSenhaCadastroFunc.value;
    inputEmailCadastroFunc.placeholder = "E-mail"
    clearBorder()

    // Define uma expressão regular para validar endereços de e-mail
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;

    if (nome_funcionario == "" || cpf_funcionario == "" || email_funcionario == "" || senha_funcionario == "") {
        executarFuncTemporal(move, 8, 30)
        if (nome_funcionario == "") inputNome.style.border = "2px solid #ffbf00"
        if (cpf_funcionario == "") { inputCPF.style.border = "2px solid #ffbf00" }
        if (senha_funcionario == "") { 
            inputSenhaCadastroFunc.style.border = "2px solid #ffbf00"
        } else if (!validarSenha(senha_funcionario)) {
            inputSenhaCadastroFunc.style.border = "2px solid red"
            inputSenhaCadastroFunc.value = ""
            inputSenhaCadastroFunc.placeholder = "Senha inválida"
        }
        if (email_funcionario == "") {
            inputEmailCadastroFunc.style.border = "2px solid #ffbf00"
        } else if (!regex.test(email_funcionario)) {
            // Email é inválido
            inputEmailCadastroFunc.value = ""
            inputEmailCadastroFunc.placeholder = "E-mail inválido"
            inputEmailCadastroFunc.style.border = "2px solid red"
        }
    } else if (!regex.test(email_funcionario) && !validarSenha(senha_funcionario)) {
        // Email é inválido
        executarFuncTemporal(move, 8, 30)
        inputEmailCadastroFunc.value = ""
        inputEmailCadastroFunc.placeholder = "E-mail inválido"
        inputEmailCadastroFunc.style.border = "2px solid red"
        inputSenhaCadastroFunc.value = ""
        inputSenhaCadastroFunc.placeholder = "E-mail inválido"
        inputSenhaCadastroFunc.style.border = "2px solid red"
        
    } else if (!regex.test(email_funcionario)) {
        // Email é inválido
        executarFuncTemporal(move, 8, 30)
        inputEmailCadastroFunc.value = ""
        inputEmailCadastroFunc.placeholder = "E-mail inválido"
        inputEmailCadastroFunc.style.border = "2px solid red"
    } else if (!validarSenha(senha_funcionario)) {
        // Email é inválido
        executarFuncTemporal(move, 8, 30)
        inputSenhaCadastroFunc.value = ""
        inputSenhaCadastroFunc.placeholder = "E-mail inválido"
        inputSenhaCadastroFunc.style.border = "2px solid red"
    } else {
        frameClear()
        campo_chave.style.display = "block"
        selector_field.innerHTML = "Voltar"
        tela_status = 5
    }
}

function finalCadFunc() {
    var id_empresa_funcionario = empresa_selecao.value
    var chave = inputChave.value
    clearBorder()
    if(id_empresa_funcionario == "nulo" || chave == "") {
        if (id_empresa_funcionario == "nulo") empresa_selecao.style.border = "2px solid #ffbf00"
        if (chave == "") inputChave.style.border = "2px solid #ffbf00"
    } else {
        fetch("/funcionarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome_funcionario,
                emailServer: email_funcionario,
                senhaServer: senha_funcionario,
                cpfServer: cpf_funcionario,
                idempresaVar: id_empresa_funcionario,
                chaveVar: chave
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    
                    resposta.json().then(json => {
                        if (json.chave == "false") {
                            inputChave.placeholder = "Chave inválida"
                            inputChave.style.border = "2px solid red"
                            inputChave.value = "" 
                        } else {
                            telaLog()
                        }
    
                    });


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
                    empresa_selecao.innerHTML = ""
                    listar()
                    buscarIdEmpresa(cnpj_cadastro)
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

function buscarIdEmpresa(cnpj_cadastro){
    fetch(`/empresas/buscar/${cnpj_cadastro}`)
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                    console.log(JSON.stringify(json));
                    sessionStorage.ID_EMPRESA = json.id_empresa;
                });
                setTimeout(cadastrarEndereco, 1000)
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
    fetch("/empresas/cadastrar_endereco", {
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
    fetch("/empresas/cadastrar_contato", {
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

function listar() {
    fetch("/empresas/listar", {
      method: "GET",
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        return response.json();
      })
      .then(function (empresas) {
        console.log(empresas);
  
        const empresaSelecao = document.getElementById('empresa_selecao');
  
        if (!empresas || empresas.length === 0) {
          console.error('Nenhum dado de empresa encontrado.');
          return;
        }
  
        empresas.forEach(function (empresa) {
          const option = document.createElement('option');
          option.value = empresa.idEmpresa;
          option.textContent = empresa.empresa;
          empresaSelecao.appendChild(option);
        });
      })
      .catch(function (error) {
        console.error(`#ERRO: ${error}`);
      });
}
  
  