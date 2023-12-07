var medidaModel = require("../models/sensoresModel");

function buscarUltimosSensores(req, res) {

    const limite_linhas = 7;

    var idArmazem = req.params.idArmazem;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    sensoresModel.buscarUltimosSensores(idArmazem, limite_linhas)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    })
    .catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarSensoresEmTempoReal(req, res) {

    var idArmazem = req.params.idArmazem;

    console.log(`Recuperando medidas em tempo real`);

    sensoresModel.buscarSensoresEmTempoReal(idArmazem)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    })
    .catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos sensores.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimosSensores,
    buscarSensoresEmTempoReal

}