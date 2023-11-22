var database = require("../database/config");

function listar() {
  var query = `select idEmpresa, empresa from Empresa`;

  return database.executar(query);
}

function buscarPorCnpj(cnpj) {
  var query = `select idEmpresa from Empresa where cnpj = '${cnpj}'`;

  return database.executar(query);
}

function cadastrar(nome, email, senha, cnpj, chave_acesso) {
  var query = `insert into Empresa values (null, '${nome}', '${email}', '${senha}', '${cnpj}', '${chave_acesso}')`;

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


module.exports = { buscarPorCnpj, cadastrar, listar, cadastrarendereco, cadastrarcontato, buscarPorChaveEmpresa };
