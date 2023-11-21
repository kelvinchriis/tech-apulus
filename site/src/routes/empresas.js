var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})

router.post("/cadastrarendereco", function (req, res) {
  empresaController.cadastrarendereco(req, res);
})

router.post("/cadastrarcontato", function (req, res) {
  empresaController.cadastrarcontato(req, res);
})


router.get("/buscar/:cnpj", function (req, res) {
  empresaController.buscarPorCnpj(req, res);
});

router.get("/listar", function (req, res) {
  empresaController.listar(req, res);
});

module.exports = router;