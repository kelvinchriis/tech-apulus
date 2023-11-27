var fazendasModel = require("../models/fazendasModel");

function buscarAquariosPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
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
  var cep = req.body.cepServer
  var bairro = req.body.bairroServer
  var cidade = req.body.cidadeServer
  var estado = req.body.estadoVar
  var logradouro = req.body.logradouroVar
  var numero = req.body.numeroVar

  if (nome == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (cep == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (bairro == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (cidade == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (estado == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (logradouro == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (numero == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    fazendasModel.cadastrar(nome, cep, bairro, cidade, estado, logradouro, numero)
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

function cadastrarendfazenda(req, res) {
  var logradouro = req.body.logradouroServer
  var numero = req.body.numeroServer
  var bairro = req.body.bairroServer
  var cidade = req.body.cidadeServer
  var estado = req.body.estadoServer
  var cep = req.body.cepServer
  fazendasModel.cadastrarendfazenda(logradouro, numero, bairro, cidade, estado, cep)
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

function buscarid(req, res) {
  var logradouro = req.body.logradouroServer
  var numero = req.body.numeroServer
  var cep = req.body.cepServer
  fazendasModel.buscarid(logradouro, numero, cep)

    .then((resultado) => {
      console.log(resultado)
      res.status(200).json(resultado);
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
  buscarAquariosPorEmpresa,
  cadastrar,
  cadastrarendfazenda,
  buscarid
}