var express = require("express");
var router = express.Router();

var funcionariosController = require("../controllers/funcionariosController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    funcionariosController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    funcionariosController.autenticar(req, res);
});

module.exports = router;