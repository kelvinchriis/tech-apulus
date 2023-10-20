var frame = document.querySelector(".frame");
var content_image = document.querySelector(".content-image");
var selector_field_position = document.querySelector(".selector-field");
var selector_field = document.querySelector(".cadastro-login");
var content_image_active = document.querySelector(".content-logo")
var fields = document.querySelector(".fields")
var campos = document.querySelector(".campos")

pointer.style.display = "none"

// variáveis tela cadastro
var empresa_cadastro;
var cnpj_cadastro;
var email_cadastro;
var senha_cadastro;

// variáveis tela login
var email_login;
var senha_login;


function changeOption() {
    var valorcampo = selector_field.innerHTML;
    if (valorcampo == "Cadastrar" || valorcampo == "Voltar") {
        telaCad()
    } else if(valorcampo == "Login") {
        telaLog()
    }
}

function avancarCadEnd() {
    // pega valores das inputs
    empresa_cadastro = inputEmpresa.value
    cnpj_cadastro = inputCNPJ.value
    email_cadastro = inputEmailCadastro.value
    senha_cadastro = inputSenhaCadastro.value
    telaEnd()
}

function avancarCadCont() {
    telaCont()
}

function avancarCadFazenda() {
    telaFazendas()
}

function finalCad() {
    frameClear()
    telaLog()
}

function verifyLogin() {
    email_login = inputEmailLogin.value;
    senha_login = inputSenhaLogin.value;

    // Define uma expressão regular para validar endereços de e-mail
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Verifica se o email inserido corresponde à expressão regular
    if (regex.test(email_login)) {
        // Email é válido
        if (email_login == email_cadastro && senha_login == senha_cadastro) {
            window.location.href = 'dashboard.html';
        } else {
            alert("Cadastro não encontrado")
        }
    } else {
        alert("Email invalido")

    }

}

function telaLog() {
    //alterar para campos do login
    frameClear()
    campos_login.style.display = "block"
    //invertendo horizontalmente para tela de login
    frame.style.flexDirection = ""
    //alterando título
    title.innerHTML = "Login"
    title.style.margin = "0 0 15% 0"
    //invertendo borda do bloco image
    content_image.style.borderRadius = "60px 0 0 60px"
    //invertento posição do seletor para a esquerda
    selector_field_position.style.justifyContent = "left"
    //alterando de "login" para "cadastrar" o seletor e mudando a direção da borda
    selector_field.innerHTML = "Cadastrar"
    selector_field.style.borderRadius = "0 20px 20px 0"
    selector_field.style.justifyContent = "right"
    selector_field.style.paddingRight = "3%"
    //escondendo barra de status cadastro
    pointer.style.display = "none"
    //alterando imagem do fundo
    content_image_active.classList.remove("content-logo-active")
    //adcionando o esqueceu a senha e alterando titulo
    forget.style.display = "block"
    title.innerHTML = "Login"
    title.style.margin = "3% 0 15% 0"
    campos_contato.style.display = "none"
}

function telaCad() {
    // diminuindo visualização no cadastro
    content_image.style.width = "55%"
    fields.style.width = "45%"
    //alterando título
    title.innerHTML = "Cadastro"
    title.style.margin = "0 0 3% 0"
    //alterar para campos do cadastro
    frameClear()
    pointerClear()
    campos_cadastro.style.display = "block"
    //invertendo horizontalmente para tela de cadastro
    frame.style.flexDirection = "row-reverse"
    //invertendo borda do bloco image
    content_image.style.borderRadius = "0 60px 60px 0"
    //invertento posição do seletor para a direita
    selector_field_position.style.justifyContent = "right"
    //alterando de "cadastrar" para "login" o seletor e mudando a direção da borda
    selector_field.innerHTML = "Login"
    selector_field.style.borderRadius = "20px 0 0 20px"
    selector_field.style.justifyContent = "left"
    selector_field.style.paddingLeft = "4%"
    //mostrando barra de status cadastro
    pointer.style.display = "flex"
    point1.style.backgroundColor = "white"
    //alterando imagem do fundo
    content_image_active.classList.add("content-logo-active")
    //excluindo o esqueceu a senha e alterando titulo
    forget.style.display = "none"
    //margem do botao
}

function telaEnd() {
    // aumenta visualização no endereço
    content_image.style.width = "45%"
    fields.style.width = "55%"
    // muda o status na barra de navegarção e limpa tela
    pointerClear()
    point2.style.backgroundColor = "white"
    frameClear()
    // mostra a tela de endereço
    title.innerHTML = "Endereço"
    campos_endereco.style.display = "block"
    selector_field.innerHTML = "Voltar"
    spaceField()
}

function telaCont() {
    // diminuindo visualização no contato
    content_image.style.width = "55%"
    fields.style.width = "45%"
    // muda o status na barra de navegarção e limpa tela
    pointerClear()
    point3.style.backgroundColor = "white"
    frameClear()
    // mostra a tela de contato
    title.innerHTML = "Contato"
    campos_contato.style.display = "block"
    selector_field.innerHTML = "Voltar"
}

function telaFazendas() {
    // muda o status na barra de navegarção e limpa tela
    pointerClear()
    point4.style.backgroundColor = "white"
    frameClear()
    // mostra a tela de contato
    title.innerHTML = "Armazéns"
    campos_fazenda.style.display = "block"
    selector_field.innerHTML = "Voltar"
}

function pointerClear() {
    point1.style.backgroundColor = ""
    point2.style.backgroundColor = ""
    point3.style.backgroundColor = ""
    point4.style.backgroundColor = ""
    
}

function frameClear() {
    campos_login.style.display = "none"
    campos_cadastro.style.display = "none"
    campos_endereco.style.display = "none"
    campos_contato.style.display = "none"
    campos_fazenda.style.display = "none"
}

function spaceField() {
    inputLogradouro.style.width = "40%"
    inputCidade.style.width = "40%"
    inputEstado.style.width = "40%"
    inputCEP.style.width = "40%"
    inputBairro.style.width = "40%"
    inputNum.style.width = "40%"
}