
function selectArmazen() {
    listar_armazens.innerHTML = ``
    posicao_tela = 2
    botao_armazen.style.display = "flex"
    botao_faz.style.display = "none"
    fazendas_empresa.style.display = "none"
    armazens.style.display = "block"
    var id = this.getAttribute('data-id')
    // alert(id)
    info_fazendas.forEach(function (empresa) {
        listar_armazens.innerHTML += `
              <div class="box-armazens" onclick="mostrar_armazens()" data-id="${empresa.idFazenda}"><h1>${empresa.cidade}</h1></div>
            `
    });
}