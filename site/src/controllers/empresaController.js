var empresaModel = require("../models/empresaModel");

// cadastro dados empresa
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

// buscar id da empresa pelo cnpj
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

// listar empresas no select do cadastro do funcionario
function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    console.log(resultado)
    res.status(200).json(resultado);
  });
}

// cadastrar enderaço da empresa
function cadastrarEndereco(req, res) {
  var logradouro = req.body.logradouroServer
  var numero = req.body.numeroServer
  var bairro = req.body.bairroServer
  var cidade = req.body.cidadeServer
  var estado = req.body.estadoServer
  var cep = req.body.cepServer
  var fkEmpresa = req.body.fkEmpresa

  empresaModel.cadastrarEndereco(logradouro, numero, bairro, cidade, estado, cep, fkEmpresa)
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

// cadastrar contato empresa
function cadastrarContato(req, res) {
  var telefonP = req.body.telefonePrincipal
  var telefoneS = req.body.telefoneSecundario
  var emailP = req.body.emailPrincipal
  var emailS = req.body.emailSecundario
  var fkEmpresa = req.body.fkEmpresa

  empresaModel.cadastrarContato(telefonP, telefoneS, emailP, emailS, fkEmpresa)
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
  cadastrarContato,
  cadastrarEndereco
};
