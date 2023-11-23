var database = require("../database/config");

function cadastrar(nome, email, senha, cnpj, chave_acesso) {
  var query = `insert into Empresa values (null, '${nome}', '${email}', '${senha}', '${cnpj}', '${chave_acesso}')`;

  return database.executar(query);
}

function autenticar(email, senha) {
  console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
  var instrucao = `
      SELECT idEmpresa, nome, email, fk_empresa as empresaId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listar() {
  var query = `select idEmpresa, empresa from Empresa`;

  return database.executar(query);
}

function buscarPorCnpj(cnpj) {
  var query = `select idEmpresa from Empresa where cnpj = '${cnpj}'`;

  return database.executar(query);
}

function cadastrarendereco(logradouro, numero, bairro, cidade, estado, cep, fkEmpresa) {
  var query = `insert into Endereco values (null, '${cep}', '${logradouro}', '${numero}', '${bairro}', '${cidade}', '${estado}', ${fkEmpresa})`;

  return database.executar(query);
}

function cadastrarcontato(telefonP, telefoneS, emailP, emailS, fkEmpresa) {
  var query = `insert into Contato values (null, '${telefonP}', '${telefoneS}', '${emailP}', '${emailS}', ${fkEmpresa})`;

  return database.executar(query);
}

function buscarPorChaveEmpresa(id_empresa) {
  var query = `select chave_acesso from Empresa where idEmpresa = '${id_empresa}'`;

  return database.executar(query);
}

module.exports = { buscarPorCnpj, cadastrar, listar, cadastrarendereco, cadastrarcontato, buscarPorChaveEmpresa, autenticar };