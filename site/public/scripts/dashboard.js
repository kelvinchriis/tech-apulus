var status_menu = 0;
var menu = document.querySelector(".menu");
var items_menu = document.querySelector(".content-items")
var botao_menu = document.querySelector(".button-menu")

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
	var temperatura = 21,
		umidade = 0,
		randTemp = 0,
		randUmid = 0;

	if (temperatura <= 14) {
		// cardAlertaTemp.style.display = 'flex';
		msgAlertaTemp.innerHTML = 'Existem armazéns com a temperatura <b>abaixo de 14°C</b>!'
		cardAlertaTemp.style.borderColor = 'blue';
	} else if (temperatura <= 17) {
		// cardAlertaTemp.style.display = 'flex';
		msgAlertaTemp.innerHTML = 'Existem armazéns com a temperatura <b>abaixo de 17°C</b>!'
		cardAlertaTemp.style.borderColor = 'dodgerblue';
	} else if (temperatura >= 20 && temperatura <= 23) {
		msgAlertaTemp.innerHTML = 'Os armazéns estão na temperatura <b>ideal</b>!';
		cardAlertaTemp.style.borderColor = 'limegreen';
	} else if (temperatura <= 24) {
		msgAlertaTemp.innerHTML = 'A temperatura dos armazéns estão <b>ACIMA de 24°C</b>!'
		cardAlertaTemp.style.borderColor = 'orangered';
	} else {
		msgAlertaTemp.innerHTML = 'A temperatura dos armazéns está <b>CRÍTICA!!</b>'
		cardAlertaTemp.style.borderColor = 'red';
	}

	if (umidade <= 55) {
		msgAlertaUmid.innerHTML = 'Existem armazéns com a umidade <b>abaixo de 55%</b>!';
		cardAlertaUmid.style.borderColor = 'blue';
	} else if (umidade <= 58) {
		msgAlertaUmid.innerHTML = 'Existem armazéns com a umidade <b>abaixo de 58%</b>!';
		cardAlertaUmid.style.borderColor = 'dodgerblue';
	}
}