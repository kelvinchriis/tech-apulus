var express = require("express");
var router = express.Router();

var sensoresController = require("../controllers/sensoresController");

router.get("/ultimos/:idArmazem", function (req, res) {
    sensoresController.buscarUltimosSensoress(req, res);
});

router.get("/tempo-real/:idArmazem", function (req, res) {
    sensoresController.buscarSensoresEmTempoReal(req, res);
})

module.exports = router;