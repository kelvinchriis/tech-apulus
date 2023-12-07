var express = require("express");
var router = express.Router();

var fazendasController = require("../controllers/fazendasController");

router.get("/:idEmpresa", function (req, res) {
  fazendasController.buscarFazendasPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  fazendasController.cadastrar(req, res);
})

router.post("/cadastrar_endereco", function (req, res) {
  fazendasController.cadastrarEndereco(req, res);
})

router.post("/buscarid", function (req, res) {
  fazendasController.buscarId(req, res);
})

module.exports = router;