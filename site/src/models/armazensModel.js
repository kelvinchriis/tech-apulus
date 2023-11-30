var database = require("../database/config");

function buscarArmazemPorFazenda(id_fazenda) {

  instrucao = `select * from Armazem where fkFazenda = ${id_fazenda}`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(nome, area, fk_fazenda) {
  
  instrucao = `insert into Armazem values (null, '${nome}', ${area}, ${fk_fazenda})`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function buscarId(id_armazem) {
  var instrucao = `select * from Armazem where idArmazem = ${id_armazem}`;

  console.log(instrucao)
  return database.executar(instrucao);
}


module.exports = {
  buscarArmazemPorFazenda,
  cadastrar,
  buscarId
}
