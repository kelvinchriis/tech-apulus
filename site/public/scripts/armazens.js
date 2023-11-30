var id_fazenda = null

function cadastrar_armazem() {
    formulario_armazem.style.display = "none"
    load_armazem.style.display = "block"

    var nome_armazem = input_nome_ar.value
    var tamanho = input_tamanho.value
    fetch("/armazens/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nome_armazem,
            tamanhoServer: tamanho,
            id_fazenda: id_fazenda
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                var botao = document.querySelector(".botao_ar")
                cadasatro_armazem.style.display = "none"
                armazens.style.display = "block"
                botao.style.display = "block"
                load_armazem.style.display = "none"
                posicao_tela = 2
                buscar_armazens(id_fazenda)
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}


function selectFazenda() {
    id_fazenda = this.getAttribute('data-id')
    buscar_armazens(id_fazenda)

    listar_armazens.innerHTML = ``
    posicao_tela = 2
    botao_armazen.style.display = "flex"
    botao_faz.style.display = "none"
    fazendas_empresa.style.display = "none"
    armazens.style.display = "block"
}

function buscar_armazens(id_fazenda) {
    listar_armazens.innerHTML = ""
    fetch(`/armazens/${id_fazenda}`, {
        method: "GET",
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then(function (lista_armazens) {
            console.log(lista_armazens);

            if (!lista_armazens || lista_armazens.length === 0) {
                console.error('Nenhum dado de fazenda encontrado.');
                return;
            }

            lista_armazens.forEach(function (armazem) {
                listar_armazens.innerHTML += `
                    <div class="box-armazens" onclick="mostrar_armazens()" data-id="${armazem.idArmazem}"><h1>${armazem.nome}</h1></div>
                `
            });

            var boxarmazens = document.querySelectorAll(".box-armazens")
            for (i = 0; i < boxarmazens.length; i++) {
                boxarmazens[i].addEventListener('click', selectArmazen)
            }
        })
        .catch(function (error) {
            console.error(`#ERRO: ${error}`);
        });
}