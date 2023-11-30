var database = require("../database/config");

function buscarFazendasPorEmpresa(empresaId) {

  instrucao = `select * from Fazenda where fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(nome, fk_empresa) {
  
  instrucao = `insert into Fazenda values (null, '${nome}', ${fk_empresa})`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarEndereco(logradouro, numero, bairro, cidade, estado, cep) {
  var instrucao = `insert into Endereco values (null, '${cep}', '${logradouro}', '${numero}', '${bairro}', '${cidade}', '${estado}', null)`;

  console.log(instrucao)
  return database.executar(instrucao);
}

function buscarId(nome, fkEmpresa) {
  var instrucao = `select idFazenda from Fazenda where nome = '${nome}' and fkEmpresaFaz = ${fkEmpresa}`;

  console.log(instrucao)
  return database.executar(instrucao);
}


module.exports = {
  buscarFazendasPorEmpresa,
  cadastrar,
  cadastrarEndereco,
  buscarId
}
