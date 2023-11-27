var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  instrucaoSql = `select * from aquario a where fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nome, cep, bairro, cidade, estado, logradouro, numero) {
  
  instrucaoSql = `insert into Fazenda aquario values (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarendfazenda(logradouro, numero, bairro, cidade, estado, cep) {
  var query = `insert into Endereco values (null, '${cep}', '${logradouro}', '${numero}', '${bairro}', '${cidade}', '${estado}', null)`;
  console.log(query)
  return database.executar(query);
}

function buscarid(logradouro, numero, cep) {
  var query = `select idEndereco from endereco where cep = ${cep} and logradouro = '${logradouro}' and numero = '${numero}'`;
  console.log(query)
  return database.executar(query);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,
  cadastrarendfazenda,
  buscarid
}
