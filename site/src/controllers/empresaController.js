var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.params.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length == 1) {
      console.log(resultado);
      res.json({
        id_empresa: resultado[0].idEmpresa
      });
    } else {
      res.status(403).send("perfil não existe)");
    }

  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    console.log(resultado)
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var nome = req.body.nomeServer
  var email = req.body.emailServer
  var senha = req.body.senhaServer
  var cnpj = req.body.cnpjServer
  var chave_acesso = gerarNumeroSeisDigitos()

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(nome, email, senha, cnpj, chave_acesso).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });

  function gerarNumeroSeisDigitos() {
    const min = 100000; // Menor número de 6 dígitos (100000)
    const max = 999999; // Maior número de 6 dígitos (999999)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

function cadastrarcontato(req, res) {
  var telefonP = req.body.telefonePrincipal
  var telefoneS = req.body.telefoneSecundario
  var emailP = req.body.emailPrincipal
  var emailS = req.body.emailSecundario
  var fkEmpresa = req.body.fkEmpresa

  empresaModel.cadastrarcontato(telefonP, telefoneS, emailP, emailS, fkEmpresa)
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

module.exports = {
  buscarPorCnpj,
  cadastrar,
  listar,
  cadastrarcontato
};
