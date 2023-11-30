var armazensModel = require("../models/armazensModel");

function buscarArmazemPorFazenda(req, res) {
  var id_fazenda = req.params.idFazenda;
  armazensModel.buscarArmazemPorFazenda(id_fazenda).then((resultado) => {
    if (resultado.length > 0) {
      console.log(resultado)
      res.status(201).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function cadastrar(req, res) {
  var nome = req.body.nomeServer
  var area = req.body.tamanhoServer
  var fk_fazenda = req.body.id_fazenda
  
  if (nome == undefined) {
    res.status(400).send("nome está undefined!");
  } else if (area == undefined) {
    res.status(400).send("area está undefined!");
  }else if (fk_fazenda == undefined) {
    res.status(400).send("fk_fazenda está undefined!");
  } else {
    armazensModel.cadastrar(nome, area, fk_fazenda)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function buscarId(req, res) {
  var nome = req.body.empresaServer
  var fk_empresa = req.body.idEmpresaServer
  var identificador = req.body.identificadorServer

  armazensModel.buscarId(nome, fk_empresa, identificador)

    .then((resultado) => {
      console.log(resultado)
      res.status(201).json(resultado);
    }
    ).catch((erro) => {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
  buscarArmazemPorFazenda,
  cadastrar,
  buscarId
}