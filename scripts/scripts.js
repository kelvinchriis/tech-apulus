var frame = document.querySelector(".frame");
var content_logo = document.querySelector(".content-logo");
var selector_field_position = document.querySelector(".selector-field");
var cadastro_login = document.querySelector(".cadastroLogin");
var title = document.querySelector(".title");

campos_cadastro.style.display = "none"
pointer.style.display = "none"
// variáveis para cadastro e login

var empresa_cadastro;
var cnpj_cadastro;
var email_cadastro;
var senha_cadastro;

var email_login;
var senha_login;

function cadastro() {
    empresa_cadastro = inputEmpresa.value
    cnpj_cadastro = inputCNPJ.value
    email_cadastro = inputEmailCadastro.value
    senha_cadastro = inputSenhaCadastro.value
    point1.style.backgroundColor = ""
    point2.style.backgroundColor = "white"
    endereco()
}

function login() {
    email_login = inputEmailLogin.value;
    senha_login = inputSenhaLogin.value;

    if (email_login == email_cadastro && senha_login == senha_cadastro) {
        alert("Login bem sucedido")
    } else {
        alert("Cadastro não encontrado")
    }
}

function endereco() {
    title.innerHTML = "Endereço"
    campos_cadastro.style.display = "none"
    campos_endereco.style.display = "block"
    cadastro_login.style.display = "none"
}

function cadastroEndereco() {
    changeOption()
    cadastro_login.style.display = "flex"
    campos_endereco.style.display = "none"
    point1.style.backgroundColor = ""
    point2.style.backgroundColor = ""
}

function changeOption() {

    var valorcampo = cadastro_login.innerHTML;
    if (valorcampo == "Cadastrar") {

        //alterar campos
        campos_login.style.display = "none"
        campos_cadastro.style.display = "block"
        //invertendo horizontalmente para tela de cadastro
        frame.style.height = "70%"
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
        title.style.margin = "3% 0 5% 0"
        pointer.style.display = "flex"
        point1.style.backgroundColor = "white"

    } else if(valorcampo == "Login") {

        //alterar campos
        campos_login.style.display = "block"
        campos_cadastro.style.display = "none"
        //invertendo horizontalmente para tela de login
        frame.style.height = "60%"
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
        title.style.margin = "3% 0 15% 0"
        pointer.style.display = "none"

    }
}
