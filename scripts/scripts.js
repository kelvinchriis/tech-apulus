var frame = document.querySelector(".frame");
var content_logo = document.querySelector(".content-logo");
var selector_field_position = document.querySelector(".selector-field");
var cadastro_login = document.querySelector(".cadastroLogin");
var title = document.querySelector(".title");
var botao = document.querySelector(".button");

function cadastro() {
    var valorcampo = cadastro_login.innerHTML;
    if (valorcampo == "Cadastrar") {
        //invertendo horizontalmente para tela de cadastro
        frame.style.borderColor = "rgba(102, 157, 158, 0.8)"
        frame.style.flexDirection = "row-reverse"
        //invertento posição do seletor para a direita
        selector_field_position.style.justifyContent = "right"
        //alterando de "cadastrar" para "login" o seletor e mudando a direção da borda
        cadastro_login.innerHTML = "Login"
        cadastro_login.style.borderRadius = "20px 0 0 20px"
        cadastro_login.style.justifyContent = "left"
        cadastro_login.style.backgroundColor = "rgba(102, 157, 158, 0.6)"
        cadastro_login.style.paddingLeft = "4%"
        //alterando cor de fundo da logo e o lado da borda
        content_logo.style.backgroundColor = "rgba(102, 157, 158, 0.6)"
        content_logo.style.borderRadius = "0 56px 56px 0"
        //excluindo o esqueceu a senha e alterando titulo
        //alterando cor do botao e mundando de Entrar para Cadastro
        forget.style.display = "none"
        title.innerHTML = "Cadastro"
        botao.style.backgroundColor = "rgba(102, 157, 158, 0.8)"
    } else if(valorcampo == "Login") {
        //invertendo horizontalmente para tela de login
        frame.style.borderColor = "rgba(241, 189, 158, 0.4)"
        frame.style.flexDirection = ""
        //invertento posição do seletor para a esquerda
        selector_field_position.style.justifyContent = "left"
        //alterando de "login" para "cadastrar" o seletor e mudando a direção da borda
        cadastro_login.innerHTML = "Cadastrar"
        cadastro_login.style.borderRadius = "0 20px 20px 0"
        cadastro_login.style.justifyContent = "right"
        cadastro_login.style.backgroundColor = "rgba(241, 189, 158, 0.6)"
        cadastro_login.style.paddingRight = "3%"
        //alterando cor de fundo da logo e o lado da borda
        content_logo.style.borderRadius = "56px 0 0 56px"
        content_logo.style.backgroundColor = "rgba(241, 189, 158, 0.6)"
        //adcionando o esqueceu a senha e alterando titulo
        //alterando cor do botao e mundando de Cadastro para Entrar
        forget.style.display = "block"
        title.innerHTML = "Login"
        botao.style.backgroundColor = "rgba(241, 189, 158, 0.726)"
    }
}
