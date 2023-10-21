var status_menu = 0;
var menu = document.querySelector(".menu");
var items_menu = document.querySelector(".content-items")
var botao_menu = document.querySelector(".button-menu")

function menuClick() {
	if (status_menu == 0) {
		menu.classList.add("menu-active");
		items_menu.style.marginRight = "20px"
		botao_menu.style.backgroundColor = "transparent"
		status_menu = 1;
	} else {
		menu.classList.remove("menu-active");
		items_menu.style.marginRight = "7px"
		botao_menu.style.backgroundColor = "rgba(0,0,0, 0.2)"
		status_menu = 0;
	}
}

var status_card = 0
var cardP = document.querySelector('.armazem1')
function mostrarDetalhes(){
	if (status_card == 0){
		cardP.classList.add('armazem-active');
		status_card = 1;
	}
	else{
		cardP.classList.remove('armazem-active');
		status_card = 0;
	}
}