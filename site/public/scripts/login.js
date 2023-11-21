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
// var telefonep_contato;
// var telefones_contato;
// var emailp_contato;
// var emails_contato;


function changeTela() {
    if (tela_status == 0) {
        telaOpcoes()
    } else if (tela_status == 1) {
        telaLog()
    } else if (tela_status == 2) {
        telaCad()
    } else if (tela_status == 3) {
        telaEnd()
    } else if (tela_status == 4) {
        telaLog()
    } else if (tela_status == 5) {
        cadastroFuncionario()
    } else if (tela_status == 6) {
        telaLog()
    }
}

function cadastroEmpresa() {
    frameClear()
    telaCad()
}

function cadastroFuncionario() {
    frameClear()
    campos_cadastro_funcionario.style.display = "block"
    botao_cad_funcionario.style.marginTop = "20px"
    selector_field.innerHTML = "LOGIN"
    tela_status = 4
}

function avancarChave() {
    frameClear()
    campo_chave.style.display = "block"
    selector_field.innerHTML = "Voltar"
    tela_status = 5
}

var pixel_left = 0;

function avancarCadEnd() {
    // pega valores das inputs
    empresa_cadastro = inputEmpresa.value
    cnpj_cadastro = inputCNPJ.value
    email_cadastro = inputEmailCadastro.value
    senha_cadastro = inputSenhaCadastro.value
    inputEmailCadastro.placeholder = "E-mail"
    inputSenhaCadastro.placeholder = "Senha"
    inputCNPJ.placeholder = "CNPJ"
    clearBorder()

    // Define uma expressão regular para validar endereços de e-mail
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;



    // Verifica se o email inserido corresponde à expressão regular
    if (empresa_cadastro == "" || cnpj_cadastro == "" || senha_cadastro == "" || email_cadastro == "") {
        executarFuncTemporal(move, 8, 30)
        if (empresa_cadastro == "") inputEmpresa.style.border = "2px solid #ffbf00"
        if (cnpj_cadastro == "") { inputCNPJ.style.border = "2px solid #ffbf00" }
        if (senha_cadastro == "") {
            inputSenhaCadastro.style.border = "2px solid #ffbf00"
        } else if (!validarSenha(senha_cadastro)) {
            inputSenhaCadastro.style.border = "2px solid red"
            inputSenhaCadastro.value = ""
            inputSenhaCadastro.placeholder = "Senha inválida"
        }
        if (email_cadastro == "") {
            inputEmailCadastro.style.border = "2px solid #ffbf00"
        } else if (!regex.test(email_cadastro)) {
            // Email é inválido
            inputEmailCadastro.value = ""
            inputEmailCadastro.placeholder = "E-mail inválido"
            inputEmailCadastro.style.border = "2px solid red"
        }
    } else if (regex.test(email_cadastro)) {
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
    if (logradouro_endereco == "" || numero_endereco == "" || bairro_endereco == "" || cidade_endereco == "" || estado_endereco == "" || cep_endereco == "") {
        executarFuncTemporal(move, 8, 30)
        if (logradouro_endereco == "") inputLogradouro.style.border = "2px solid #ffbf00"
        if (numero_endereco == "") { inputNum.style.border = "2px solid #ffbf00" }
        if (bairro_endereco == "") { inputBairro.style.border = "2px solid #ffbf00" }
        if (cidade_endereco == "") { inputCidade.style.border = "2px solid #ffbf00" }
        if (estado_endereco == "") { inputEstado.style.border = "2px solid #ffbf00" }
        if (cep_endereco == "") { inputCEP.style.border = "2px solid #ffbf00" }
    } else {
        telaCont()
        clearBorder()
    }
}


function verifyLogin() {
    email_login = inputEmailLogin.value;
    senha_login = inputSenhaLogin.value;
    clearBorder()

    // Define uma expressão regular para validar endereços de e-mail
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;

    // Verifica se o email inserido corresponde à expressão regular
    if (email_login == "" || senha_login == "") {
        executarFuncTemporal(move, 8, 30)
        if (email_login == "") { inputEmailLogin.style.border = "2px solid #ffbf00" }
        else if (!regex.test(email_login)) {
            inputEmailLogin.style.border = "2px solid red"
            inputEmailLogin.placeholder = "E-mail inválido"
            inputEmailLogin.value = ""
        }
        if (senha_login == "") { inputSenhaLogin.style.border = "2px solid #ffbf00" }

    } else if (email_login == email_cadastro && senha_login == senha_cadastro) {
        window.location.href = 'dashboard.html';
    } else {
        executarFuncTemporal(move, 8, 30)
        inputEmailLogin.style.border = "2px solid red"
        inputSenhaLogin.style.border = "2px solid red"
    }

}

function telaOpcoes() {
    frameClear()
    //alterando imagem do fundo
    content_image.classList.add("content-logo-active")
    //margem botao
    botao_cad.style.margin = "3% 0 0 0"
    // diminuindo visualização no cadastro
    content_image.style.width = "55%"
    fields.style.width = "45%"
    //alterando título
    title.innerHTML = "CADASTRO"
    title.style.margin = "0 0 2% 0"
    //alterar para campos do cadastro
    frameClear()
    pointerClear()
    campos_cad.style.display = "block"
    campos_cad.style.marginTop = "80px"
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
    // pointer.style.display = "flex"
    // point1.style.backgroundColor = "white"
    //limpando campos login
    cleaCamposLogin()
    //atualizando posicao tela
    tela_status = 6

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
    botao_cad.style.margin = "3% 0 0 0"
    // diminuindo visualização no cadastro
    content_image.style.width = "55%"
    fields.style.width = "45%"
    //alterando título
    title.innerHTML = "CADASTRO"
    title.style.margin = "0 0 2% 0"
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
    telaCont()
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
    inputSenhaCadastro.placeholder = "Senha"
    inputEmailCadastro.placeholder = "E-mail"
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

}

function frameClear() {
    campos_login.style.display = "none"
    campos_cadastro.style.display = "none"
    campos_endereco.style.display = "none"
    campos_contato.style.display = "none"
    campos_cad.style.display = "none"
    campos_cadastro_funcionario.style.display = "none"
    campo_chave.style.display = "none"
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
    inputEmailP.style.border = "#a5744c"
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

function validarSenha(senha) {
    // Verifica se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        return false;
    }

    // Verifica se a senha contém pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(senha)) {
        return false;
    }

    // Verifica se a senha contém pelo menos um caractere especial (pode ser personalizado)
    if (!/[$&+,:;=?@#|'<>.^*()%!-_]/.test(senha)) {
        return false;
    }

    // Se todas as condições forem atendidas, a senha é válida
    return true;
}

function cepapi() {
    const cep = inputCEP.value;


    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                return false
            } else {
                inputCidade.value = data.localidade
                inputBairro.value = data.bairro
                inputLogradouro.value = data.logradouro
                inputEstado.value = data.uf
            }
        })
        .catch(error => {
            resultadoCEP.innerHTML = "Erro na consulta do CEP.";
            console.error(error);
        });
}