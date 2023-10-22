var content_image = document.querySelector(".content-image");

//ver em qual tela tá 
//login = 0
//cadastro = 1
//endereco = 2
//contato = 3
//armazens = 4

var tela_status = 0

// variáveis tela login
var email_login;
var senha_login;

// variáveis tela cadastro
var empresa_cadastro;
var cnpj_cadastro;
var email_cadastro;
var senha_cadastro;

// variáveis tela endereço
var logradouro_endereco;
var numero_endereco;
var bairro_endereco;
var cidade_endereco;
var estado_endereco;
var cep_endereco;

// variáveis tela contato
var telefonep_contato;
var telefones_contato;
var emailp_contato;
var emails_contato;


function changeTela() {
    if (tela_status == 0) {
        telaCad()
    } else if (tela_status == 1) {
        telaLog()
    } else if (tela_status == 2) {
        telaCad()
    } else if (tela_status == 3) {
        telaEnd() 
    } else if (tela_status == 4) {
        telaCont() 
    }
}

var pixel_left = 0;

function avancarCadEnd() {
    // pega valores das inputs
    empresa_cadastro = inputEmpresa.value
    cnpj_cadastro = inputCNPJ.value
    email_cadastro = inputEmailCadastro.value
    senha_cadastro = inputSenhaCadastro.value
    inputEmailCadastro.placeholder = "E-mail"
    clearBorder()

    // Define uma expressão regular para validar endereços de e-mail
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;

    // Verifica se o email inserido corresponde à expressão regular
    if (empresa_cadastro==""||cnpj_cadastro==""||senha_cadastro==""||email_cadastro=="") {
        executarFuncTemporal(move, 8, 30)
        if (empresa_cadastro=="") inputEmpresa.style.border = "2px solid #ffbf00"
        if (cnpj_cadastro=="") {inputCNPJ.style.border = "2px solid #ffbf00"}
        if (senha_cadastro=="") {inputSenhaCadastro.style.border = "2px solid #ffbf00"}
        if (email_cadastro=="") {
            inputEmailCadastro.style.border = "2px solid #ffbf00"
        } else if (!regex.test(email_cadastro)) {
            // Email é inválido
            inputEmailCadastro.value = ""
            inputEmailCadastro.placeholder = "E-mail inválido"
            inputEmailCadastro.style.border = "2px solid red"
        }
    } else if (regex.test(email_cadastro)) {
        // Email é válido
        telaEnd()
    } else {
        // Email é inválido
        executarFuncTemporal(move, 8, 30)
        inputEmailCadastro.value = ""
        inputEmailCadastro.placeholder = "E-mail inválido"
        inputEmailCadastro.style.border = "2px solid red"
    }

}

function avancarCadCont() {
    logradouro_endereco = inputLogradouro.value
    numero_endereco = inputNum.value
    bairro_endereco = inputBairro.value
    cidade_endereco = inputCidade.value
    estado_endereco = inputEstado.value
    cep_endereco = inputCEP.value
    clearBorder()
    if (logradouro_endereco==""||numero_endereco==""||bairro_endereco==""||cidade_endereco==""||estado_endereco==""||cep_endereco=="") {
        executarFuncTemporal(move, 8, 30)
        if (logradouro_endereco=="") inputLogradouro.style.border = "2px solid #ffbf00"
        if (numero_endereco=="") {inputNum.style.border = "2px solid #ffbf00"}
        if (bairro_endereco=="") {inputBairro.style.border = "2px solid #ffbf00"}
        if (cidade_endereco=="") {inputCidade.style.border = "2px solid #ffbf00"}
        if (estado_endereco=="") {inputEstado.style.border = "2px solid #ffbf00"}
        if (cep_endereco=="") {inputCEP.style.border = "2px solid #ffbf00"}
    } else {
        telaCont()
        clearBorder()
    }
}

function avancarCadFazenda() {
    telefonep_contato = inputTelP.value;
    telefones_contato = inputTelS.value;
    emailp_contato = inputEmailP.value;
    emails_contato = inputEmailS.value;
    
    clearBorder()
    if (telefonep_contato==""||telefones_contato==""||emailp_contato==""||emails_contato=="") {
        executarFuncTemporal(move, 8, 30)
        if (telefonep_contato=="") inputTelP.style.border = "2px solid #ffbf00"
        if (telefones_contato=="") {inputTelS.style.border = "2px solid #ffbf00"}
        if (emailp_contato=="") {inputEmailP.style.border = "2px solid #ffbf00"}
        if (emails_contato=="") {inputEmailS.style.border = "2px solid #ffbf00"}
    } else {
        telaFazendas()
        clearBorder()
    }
}

function finalCad() {
    telaLog()
}

function verifyLogin() {
    email_login = inputEmailLogin.value;
    senha_login = inputSenhaLogin.value;

    // Define uma expressão regular para validar endereços de e-mail
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;

    // Verifica se o email inserido corresponde à expressão regular
    if (regex.test(email_login)) {
        // Email é válido
        if (email_login == email_cadastro && senha_login == senha_cadastro) {
            window.location.href = 'dashboard.html';
        } else {
            alert("Cadastro não encontrado")
        }
    } else {
        executarFuncTemporal(move, 8, 30)
        inputEmailLogin.value = ""
        inputEmailLogin.placeholder = "E-mail inválido"
        inputEmailLogin.style.border = "2px solid red"
    }

}

function telaLog() {
    //alterar para campos do login
    frameClear()
    campos_login.style.display = "block"
    //margem botao
    botao_log.style.margin = "13% 0 0 0"
    // diminuindo visualização no cadastro
    content_image.style.width = "55%"
    fields.style.width = "45%"
    //invertendo horizontalmente para tela de login
    frame.style.flexDirection = ""
    //alterando título
    title.innerHTML = "Login"
    title.style.margin = "0 0 17% 0"
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
    content_image.classList.remove("content-logo-active")
    //adcionando o esqueceu a senha e alterando titulo
    title.innerHTML = "LOGIN"
    // limpar campos e borda do cadatro 
    clearCamposCadatro()
    //atualizando posicao tela
    tela_status = 0
}

function telaCad() {
    //alterando imagem do fundo
    content_image.classList.add("content-logo-active")
    //margem botao
    botao_cad.style.margin = "8% 0 0 0"
    // diminuindo visualização no cadastro
    content_image.style.width = "55%"
    fields.style.width = "45%"
    //alterando título
    title.innerHTML = "CADASTRO"
    title.style.margin = "0 0 5% 0"
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
    selector_field.innerHTML = "LOGIN"
    selector_field.style.borderRadius = "20px 0 0 20px"
    selector_field.style.justifyContent = "left"
    selector_field.style.paddingLeft = "4%"
    //mostrando barra de status cadastro
    pointer.style.display = "flex"
    point1.style.backgroundColor = "white"
    //limpando campos login
    cleaCamposLogin()
    //atualizando posicao tela
    tela_status = 1
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
    title.style.margin = "0 0 9% 0"
    botao_end.style.margin = "5% 0 0 0"
    spaceFieldEnd()
    //atualizando posicao tela
    tela_status = 2
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
    title.style.margin = "0 0 5% 0"
    botao_cont.style.margin = "8% 0 0 0"
    //atualizando posicao tela
    tela_status = 3
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
    title.style.margin = "0 0 9% 0"
    botao_faz.style.margin = "12% 0 0 0"
    inputQtdFazenda.style.margin = "0 0 12% 0"
    inputQtdArmazem.style.margin = "0 0 12% 0"
    //atualizando posicao tela
    tela_status = 4
}

function spaceFieldEnd() {
    inputLogradouro.style.width = "48%"
    inputNum.style.width = "48%"
    inputBairro.style.width = "48%"
    inputCidade.style.width = "48%"
    inputEstado.style.width = "48%"
    inputCEP.style.width = "48%"

    inputLogradouro.style.margin = "0 0 9% 0"
    inputBairro.style.margin = "0 0 9% 0"
}

// funções de limpeza de tela

function clearCamposCadatro() {
    inputEmpresa.value = ""
    inputCNPJ.value = ""
    inputEmailCadastro.value = ""
    inputSenhaCadastro.value = ""
    inputLogradouro.value = ""
    inputNum.value = ""
    inputBairro.value = ""
    inputCidade.value = ""
    inputEstado.value = ""
    inputCEP.value = ""

    inputTelP.value = ""
    inputTelS.value = ""
    inputEmailP.value = ""
    inputEmailS.value = ""
    inputEmailCadastro.value = ""
    clearBorder()
}

function cleaCamposLogin() {
    inputEmailLogin.value = ""
    inputSenhaLogin.value = ""
    inputEmailLogin.placeholder = "E-mail"
    clearBorder()
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

function clearBorder() {
    inputEmpresa.style.border = "#a5744c"
    inputCNPJ.style.border = "#a5744c"
    inputSenhaCadastro.style.border = "#a5744c"
    inputEmailCadastro.style.border = "#a5744c"

    inputEmailLogin.style.border = "#a5744c"
    inputSenhaLogin.style.border = "#a5744c"

    inputLogradouro.style.border = "#a5744c"
    inputNum.style.border = "#a5744c"
    inputBairro.style.border = "#a5744c"
    inputCidade.style.border = "#a5744c"
    inputEstado.style.border = "#a5744c"
    inputCEP.style.border = "#a5744c"

    inputTelP.style.border = "#a5744c"
    inputTelS.style.border = "#a5744c"
    inputEmailP.style.border = "#a5744c"
    inputEmailS.style.border = "#a5744c"
}

// função de repetição de outras funções

function executarFuncTemporal(funcao, vezes, intervalo) {
    var contador = 0;

    function executar() {
        if (contador < vezes) {
            funcao();
            contador++;
            setTimeout(executar, intervalo)
        } else {
        }
    }

    executar();
    
}

// função mover frame ao errar algo

function move() {
    if (pixel_left == 0) {
        pixel_left += 5;
        frame.style.marginLeft = `${pixel_left}px`;
    } else if (pixel_left == 5) {
        pixel_left -= 10;
        frame.style.marginLeft = `${pixel_left}px`;
    } else if (pixel_left == -5) {
        pixel_left += 10;
        frame.style.marginLeft = `${pixel_left}px`;
    }
}