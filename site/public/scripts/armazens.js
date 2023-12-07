// var id_fazenda = null

// function cadastrar_armazem() {
//     formulario_armazem.style.display = "none"
//     load_armazem.style.display = "block"

//     var nome_armazem = input_nome_ar.value
//     var tamanho = input_tamanho.value
//     fetch("/armazens/cadastrar", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             nomeServer: nome_armazem,
//             tamanhoServer: tamanho,
//             id_fazenda: id_fazenda
//         }),
//     })
//         .then(function (resposta) {
//             console.log("resposta: ", resposta);

//             if (resposta.ok) {
//                 var botao = document.querySelector(".botao_ar")
//                 cadasatro_armazem.style.display = "none"
//                 armazens.style.display = "block"
//                 botao.style.display = "block"
//                 load_armazem.style.display = "none"
//                 posicao_tela = 2
//                 buscar_armazens(id_fazenda)
//             } else {
//                 throw "Houve um erro ao tentar realizar o cadastro!";
//             }
//         })
//         .catch(function (resposta) {
//             console.log(`#ERRO: ${resposta}`);
//         });

//     return false;
// }


// function selectFazenda() {
//     id_fazenda = this.getAttribute('data-id')
//     buscar_armazens(id_fazenda)

//     listar_armazens.innerHTML = ``
//     posicao_tela = 2
//     botao_armazen.style.display = "flex"
//     botao_faz.style.display = "none"
//     fazendas_empresa.style.display = "none"
//     armazens.style.display = "block"
// }

// function buscar_armazens(id_fazenda) {
//     listar_armazens.innerHTML = ""
//     fetch(`/armazens/${id_fazenda}`, {
//         method: "GET",
//     })
//         .then(function (response) {
//             if (!response.ok) {
//                 throw new Error('Erro ao carregar os dados');
//             }
//             return response.json();
//         })
//         .then(function (lista_armazens) {
//             console.log(lista_armazens);

//             if (!lista_armazens || lista_armazens.length === 0) {
//                 console.error('Nenhum dado de fazenda encontrado.');
//                 return;
//             }

//             lista_armazens.forEach(function (armazem) {
//                 listar_armazens.innerHTML += `
//                     <div class="box-armazens" onclick="mostrar_armazens()" data-id="${armazem.idArmazem}"><h1>${armazem.nome}</h1> <img src="img/desenhoArmazem.png" alt="">
//                     </div>
//                 `
//             });
//             var boxarmazens = document.querySelectorAll(".box-armazens")
//             for (i = 0; i < boxarmazens.length; i++) {
//                 boxarmazens[i].addEventListener('click', selectArmazem)
//             }
//         })
//         .catch(function (error) {
//             console.error(`#ERRO: ${error}`);
//         });
// }

// function selectArmazem() {
//     idArmazem = this.getAttribute('data-id')
//     buscar_sensores(idSensores)

//     listar_graficos.innerHTML = ``
//     posicao_tela = 3
//     botao_armazen.style.display = "flex"
//     botao_faz.style.display = "none"
//     fazendas_empresa.style.display = "none"
//     armazens.style.display = "block"
// }

// substituir o código no arquivo 'armazens.js'

// var id_fazenda = req.body.idFazenda;
// var id_armazem = req.body.idArmazem;

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
            id_fazenda: id_fazenda,
            id_armazem: id_armazem
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

var id_armazem = ``;

var id_armazem2 = ``;

var contador = 0;

function buscar_armazens(id_fazenda) {
    listar_armazens.innerHTML = ""
    fetch(`/armazens/${id_fazenda}`, {
        method: "GET",
    })
        .then(function (lista_armazens) {
            if (!lista_armazens.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            // return lista_armazens.json();
            // })
            // .then(function (lista_armazens) {
            // if (!lista_armazens || lista_armazens.length === 0) {
            //     console.error('Nenhum dado de fazenda encontrado.');
            //     return;
            // }

            lista_armazens.json().then(lista_armazens => {
                lista_armazens.forEach(function (armazem) {

                    listar_armazens.innerHTML += `
                        <div class="box-armazens" style= "display: flex; text-align: center; justify-content: center;" onclick="mostrar_armazens()" data-id="${armazem.idArmazem}"><h1>${armazem.nome}</h1></div>
                        `
                        if (contadorArmazem == 0){
                            armazem1 = armazem.nome;
                            contador++;
                        } else {
                            armazem2 = armazem.nome;
                        }
                        id_armazem = armazem.idArmazem;
          

                    // listar_graficos.innerHTML += `
                    //     <div class="box-graficos>"<h2 class="h1-faz">Gráficos do ${armazem.nome}</h2> <br> <canvas id="dht11umidade100"></canvas> <br> <canvas id="lm35Temperatura100"></canvas></div>
                    //     `
                });



                // document.getElementById('listar_graficos').innerHTML += `<div class="box-graficos>"<h1>Gráficos do armazém ${armazem.idArmazem}</h1><canvas id='myChart${idArmazem}'></canvas></div>`

                var boxarmazens = document.querySelectorAll(".box-armazens")
                for (i = 0; i < boxarmazens.length; i++) {
                    boxarmazens[i].addEventListener('click', selectArmazem)
                }
            })
        })

        .catch(function (error) {
            console.error(`#ERRO: ${error}`);
        });
}