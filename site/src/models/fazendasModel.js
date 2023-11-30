var database = require("../database/config");

function buscarFazendasPorEmpresa(id_empresa) {

  instrucao = `select * from Fazenda join Endereco on idFazenda = fkEnderocoFazenda where fkEmpresa = ${id_empresa}`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(nome, fk_empresa, identificador) {
  
  instrucao = `insert into Fazenda values (null, '${nome}', ${identificador}, ${fk_empresa})`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarEndereco(logradouro, numero, bairro, cidade, estado, cep, fk_fazenda) {
  var instrucao = `insert into Endereco values (null, '${cep}', '${logradouro}', '${numero}', '${bairro}', '${cidade}', '${estado}', null, ${fk_fazenda})`;

  console.log(instrucao)
  return database.executar(instrucao);
}

function buscarId(nome, fkEmpresa, identificador) {
  var instrucao = `select idFazenda from Fazenda where nome = '${nome}' and fkEmpresa = ${fkEmpresa} and identificador = ${identificador}`;

  console.log(instrucao)
  return database.executar(instrucao);
}


module.exports = {
  buscarFazendasPorEmpresa,
  cadastrar,
  cadastrarEndereco,
  buscarId
}
