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


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
