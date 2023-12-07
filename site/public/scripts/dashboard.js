var status_menu = 0,
	menu = document.querySelector(".menu"),
	items_menu = document.querySelector(".content-items"),
	botao_menu = document.querySelector(".button-menu");

// const telaMetricas = document.querySelector('.telaMetricas'),
// 	btnAbrir = document.querySelector('#btnAbrirMetricas'),
// 	btnFechar = document.querySelector('#btnFecharMetricas');

function menuClick() {
	if (status_menu == 0) {
		menu.classList.add("menu-active");
		items_menu.style.marginWidth = "10px"
		botao_menu.style.backgroundColor = "transparent"
		status_menu = 1;
	} else {
		menu.classList.remove("menu-active");
		items_menu.style.marginWidth = "0px"
		botao_menu.style.backgroundColor = "rgba(0,0,0, 0.2)"
		status_menu = 0;
	}
}

function gerarGraficos() { }

function alertas() {
	var temperatura = 24,
		umidade = 66,
		randTemp = 0,
		randUmid = 0;

	// verificações de temperatura 
	if (temperatura <= 14) {
		msgAlertaTemp.innerHTML = 'Existem armazéns com a temperatura <b style= "color: blue">abaixo de 14°C</b>!'
		cardAlertaTemp.classList.remove('piscarRed');
		cardAlertaTemp.classList.add('piscarBlue');
		cardAlertaTemp.style.borderColor = 'blue';
		cardAlertaTemp.style.background = 'rgba(0, 0, 255, 0.438)'
	} else if (temperatura <= 17) {
		msgAlertaTemp.innerHTML = 'Existem armazéns com a temperatura <b style= "color: dodgerblue">abaixo de 17°C</b>!'
		cardAlertaTemp.classList.remove('piscarBlue');
		cardAlertaTemp.classList.remove('piscarRed');
		cardAlertaTemp.style.background = 'rgba(30, 143, 255, 0.438)'
		cardAlertaTemp.style.borderColor = 'dodgerblue';
	} else if (temperatura >= 20 && temperatura <= 23) {
		msgAlertaTemp.innerHTML = 'Os armazéns estão na temperatura <b style= "color: limegreen">ideal</b>!';
		cardAlertaTemp.classList.remove('piscarBlue');
		cardAlertaTemp.classList.remove('piscarRed');
		cardAlertaTemp.style.background = 'rgba(50, 205, 50, 0.438)'
		cardAlertaTemp.style.borderColor = 'limegreen';
	} else if (temperatura <= 24) {
		msgAlertaTemp.innerHTML = 'A temperatura dos armazéns estão <b style= "color: orangered">ACIMA de 24°C</b>!'
		cardAlertaTemp.classList.remove('piscarBlue');
		cardAlertaTemp.classList.remove('piscarRed');
		cardAlertaTemp.style.background = 'rgba(255, 68, 0, 0.438)'
		cardAlertaTemp.style.borderColor = 'orangered';
	} else {
		msgAlertaTemp.innerHTML = 'A temperatura dos armazéns está <b style= "color: red">CRÍTICA!!</b>'
		cardAlertaTemp.classList.remove('piscarBlue');
		cardAlertaTemp.classList.add('piscarRed');
		cardAlertaTemp.style.background = 'rgba(255, 0, 0, 0.438)'
		cardAlertaTemp.style.borderColor = 'red';
	}

	// verificações de umidade
	if (umidade <= 55) {
		msgAlertaUmid.innerHTML = 'Existem armazéns com a umidade <b style= "color: blue">abaixo de 55%</b>!';
		cardAlertaUmid.style.borderColor = 'blue';
		cardAlertaUmid.style.background = 'rgba(0, 0, 255, 0.438)'
		cardAlertaUmid.classList.remove('piscarRed');
		cardAlertaUmid.classList.add('piscarBlue');
	} else if (umidade <= 58) {
		msgAlertaUmid.innerHTML = 'Existem armazéns com a umidade <b style= "color: dodgerblue">abaixo de 58%</b>!';
		cardAlertaUmid.style.background = 'rgba(30, 143, 255, 0.438)'
		cardAlertaUmid.classList.remove('piscarRed');
		cardAlertaUmid.classList.remove('piscarBlue');
		cardAlertaUmid.style.borderColor = 'dodgerblue';
	} else if (umidade >= 60 && umidade <= 65) {
		msgAlertaUmid.innerHTML = 'Os araménz estão na umidade <b style= "color: limegreen">ideal</b>'
		cardAlertaUmid.style.background = 'rgba(50, 205, 50, 0.438)'
		cardAlertaUmid.classList.remove('piscarRed');
		cardAlertaUmid.classList.remove('piscarBlue');
		cardAlertaUmid.style.borderColor = 'limegreen';
	} else if (umidade <= 67) {
		msgAlertaUmid.innerHTML = 'Os armazéns estão com a umidade <b style= "color: orangered">ACIMA de 67%</b>!'
		cardAlertaUmid.style.background = 'rgba(255, 68, 0, 0.438)'
		cardAlertaUmid.classList.remove('piscarRed');
		cardAlertaUmid.classList.remove('piscarBlue');
		cardAlertaUmid.style.borderColor = 'orangered';
	} else {
		msgAlertaUmid.innerHTML = 'Os armazéns estão com a umidade <b style= "color: red">CRÍTICA!!</b>'
		cardAlertaUmid.style.borderColor = 'red';
		cardAlertaUmid.style.background = 'rgba(255, 0, 0, 0.438)'
		cardAlertaTemp.classList.remove('piscarBlue');
		cardAlertaUmid.classList.add('piscarRed');
	}
}

// btnAbrir.addEventListener('click', () => {
// 	telaMetricas.style.display = 'flex';
// });

// btnFechar.addEventListener('click', () => {
// 	telaMetricas.style.display = 'none';
// });

// Obtenha os elementos do DOM
var modal = document.getElementById('myModal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');

// Quando o botão de abrir modal for clicado, exiba o modal
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Quando o botão de fechar modal for clicado, oculte o modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Quando clicar fora do modal, feche o modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
