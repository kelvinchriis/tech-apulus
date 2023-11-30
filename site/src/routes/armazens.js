var express = require("express");
var router = express.Router();

var armazensController = require("../controllers/armazensController");

router.get("/:idFazenda", function (req, res) {
  armazensController.buscarArmazemPorFazenda(req, res);
});

router.post("/cadastrar", function (req, res) {
  armazensController.cadastrar(req, res);
})

router.post("/cadastrar_endereco", function (req, res) {
  armazensController.cadastrarEndereco(req, res);
})

router.post("/buscarid", function (req, res) {
  armazensController.buscarId(req, res);
})

module.exports = router;