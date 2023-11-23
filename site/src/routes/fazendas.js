var express = require("express");
var router = express.Router();

var fazendasController = require("../controllers/fazendasController");

router.get("/:empresaId", function (req, res) {
  fazendasController.buscarAquariosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  fazendasController.cadastrar(req, res);
})

module.exports = router;