var funcionariosModel = require("../models/funcionariosModel");
var empresaModel = require("../models/empresaModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        funcionariosModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id_funcionario: resultadoAutenticar[0].idFuncionario,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            cpf: resultadoAutenticar[0].cpf,
                            id_empresa: resultadoAutenticar[0].idEmpresa,
                            empresa: resultadoAutenticar[0].empresa
                        });
                        // funcionariosModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                        //     .then((resultadoAquarios) => {
                        //         if (resultadoAquarios.length > 0) {
                        //             res.json({
                        //                 id: resultadoAutenticar[0].id,
                        //                 email: resultadoAutenticar[0].email,
                        //                 nome: resultadoAutenticar[0].nome,
                        //                 senha: resultadoAutenticar[0].senha,
                        //                 aquarios: resultadoAquarios
                        //             });
                        //         } else {
                        //             res.status(204).json({ aquarios: [] });
                        //         }
                        //     })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer
    var email = req.body.emailServer
    var senha = req.body.senhaServer
    var cpf = req.body.cpfServer
    var id_empresa = req.body.idempresaVar
    var chave = req.body.chaveVar

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (id_empresa == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (chave == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else {

        empresaModel.buscarPorChaveEmpresa(id_empresa)
         .then((chaveempresa) => {
            if (chaveempresa.length > 0) {
                var chave_empresa = chaveempresa[0].chave_acesso;

                if (Number(chave) == Number(chave_empresa)) {
                    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
                    funcionariosModel.cadastrar(nome, email, senha, cpf, id_empresa)
                        .then(
                            function (resultado) {
                                res.json(resultado);
                            }
                        ).catch(
                            function (erro) {
                                console.log(erro);
                                console.log(
                                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                                    erro.sqlMessage
                                );
                                res.status(500).json(erro.sqlMessage);
                            }
                        );
                } else {
                    res.json({
                        chave: "false" 
                    });
                }

            } else {
                res.status(204).json({ aquarios: [] });
            }
        })



    }
}

module.exports = {
    autenticar,
    cadastrar
}