var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})

router.post("/cadastrar_endereco", function (req, res) {
  empresaController.cadastrarEndereco(req, res);
})

router.post("/cadastrar_contato", function (req, res) {
  empresaController.cadastrarContato(req, res);
})

router.get("/buscar/:cnpj", function (req, res) {
  empresaController.buscarPorCnpj(req, res);
});

router.get("/listar", function (req, res) {
  empresaController.listar(req, res);
});

module.exports = router;