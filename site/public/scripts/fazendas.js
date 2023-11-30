function cadastrar_fazenda() {
    formulario.style.display = "none"
    load.style.display = "block"
    var empresa_cadast = input_nome.value
    var identificador_emp = input_identificador.value
    fetch("/fazendas/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            empresaServer: empresa_cadast,
            idEmpresaServer: sessionStorage.ID_EMPRESA,
            identificadorServer: identificador_emp
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                buscarIdFazenda(empresa_cadast, identificador_emp)
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;

}

function buscarIdFazenda(empresa_name, identificador_emp) {
    fetch("/fazendas/buscarid", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            empresaServer: empresa_name,
            idEmpresaServer: sessionStorage.ID_EMPRESA,
            identificadorServer: identificador_emp
        }),
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then(function (resposta) {
            console.log(resposta);

            if (resposta.length == 0) {
                console.log("erros")
            } else {
                cadastrarEnderecoFazenda(resposta[0].idFazenda)
            }
        })
        .catch(function (error) {
            console.error('Erro:', error);
        });

}


function cadastrarEnderecoFazenda(idFazenda) {
    var cep = inputCEP.value
    var bairro = inputBairro.value
    var cidade = inputCidade.value
    var estado = inputEstado.value
    var logradouro = inputLogradouro.value
    var numero = input_numero.value

    fetch("/fazendas/cadastrar_endereco", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            cepServer: cep,
            bairroServer: bairro,
            cidadeServer: cidade,
            estadoServer: estado,
            logradouroServer: logradouro,
            numeroServer: numero,
            fk_fazenda: idFazenda
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                listar_fazendas()
                load.style.display = "none"
                cadsatro_fazenda.style.display = "none"
                fazendas_empresa.style.display = "block"

            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

var info_fazendas = null;
function listar_fazendas() {
    fetch(`/fazendas/${sessionStorage.ID_EMPRESA}`, {
        method: "GET",
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then(function (lista_fazendas) {
            console.log(lista_fazendas);

            if (!lista_fazendas || lista_fazendas.length === 0) {
                console.error('Nenhum dado de fazenda encontrado.');
                return;
            }
            info_fazendas = lista_fazendas
            lista_fazendas.forEach(function (empresa) {
                fazendas.innerHTML += `
            <div class="box-fazenda" data-id="${empresa.idFazenda}"><h1>${empresa.nome}</h1></div>
          `
            });
            var boxfazendas = document.querySelectorAll(".box-fazenda")
            for (i = 0; i < boxfazendas.length; i++) {
                boxfazendas[i].addEventListener('click', selectFazenda)
            }
        })
        .catch(function (error) {
            console.error(`#ERRO: ${error}`);
        });
}