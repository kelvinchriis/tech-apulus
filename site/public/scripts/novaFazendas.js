const listaFazendas = document.querySelector('.listar_fazendas'),
    listaArmazens = document.querySelectorAll('.listar_armazens'),
    voltar = document.querySelector('#btnVoltar'),
    caixasArmaem = document.querySelector('#box-armazens'),
    caixasFazenda = document.querySelectorAll('#box-fazendas'),
    telaMetricas = document.querySelector('.telaMetricas'),
	btnAbrir = document.querySelector('#btnAbrirMetricas'),
	btnFechar = document.querySelector('#btnFecharMetricas'),
    tela = document.querySelectorAll('.telaMain');

voltar.addEventListener('click', (e) => {
    if(e.target.classList.contains('listar_fazendas'))
    tela[0].classList.add('deslizarCima')
});

caixasFazenda.addEventListener('click', () => {
    listaFazendas.style.display = 'none';
    listaArmazens.style.display = 'flex';
});

btnAbrir.addEventListener('click', () => {
	telaMetricas.style.display = 'flex';
});

btnFechar.addEventListener('click', () => {
	telaMetricas.style.display = 'none';
});