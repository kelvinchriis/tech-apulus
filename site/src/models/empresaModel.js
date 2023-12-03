var database = require("../database/config");




// cadastro dados empresa
function cadastrar(nome, email, senha, cnpj, chave_acesso) {
    var instrucao = `
      insert into Empresa values (null, '${nome}', '${email}', '${senha}', '${cnpj}', '${chave_acesso}')
  `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}



// listar empresas no select do cadastro do funcionario
function listar() {
  var instrucao = `select idEmpresa, empresa from Empresa`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// buscar id da empresa pelo cnpj
function buscarPorCnpj(cnpj) {
  var instrucao = `select idEmpresa from Empresa where cnpj = '${cnpj}'`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// cadastrar enderaço da empresa
function cadastrarEndereco(logradouro, numero, bairro, cidade, estado, cep, fkEmpresa) {
  var instrucao = `
      insert into Endereco values (null, '${cep}', '${logradouro}', '${numero}', '${bairro}', '${cidade}', '${estado}', ${fkEmpresa}, null)
    `;

  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

// cadastrar contato empresa
function cadastrarContato(telefonP, telefoneS, emailP, emailS, fkEmpresa) {
  var instrucao = `insert into Contato values (null, '${telefonP}', '${telefoneS}', '${emailP}', '${emailS}', ${fkEmpresa})`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao)
}

// buscar chave de acesso da empresa para cadastrar funcionario
function buscarPorChaveEmpresa(id_empresa) {
  var instrucao = `select chave_acesso from Empresa where idEmpresa = '${id_empresa}'`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function autenticarEmpresa(email, senha) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
  var instrucao = `
      select idEmpresa as id, empresa, email, senha, cnpj, chave_acesso, from empresa 
                  where email = "${email}" and senha = "${senha}";
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


module.exports = { 
  buscarPorCnpj, 
  cadastrar, 
  listar, 
  cadastrarEndereco, 
  cadastrarContato, 
  buscarPorChaveEmpresa, 
  autenticarEmpresa 
};