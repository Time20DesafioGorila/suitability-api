require("dotenv").config();
const express = require("express");

const server = express();

/**
 * Utilizando o express para converter o json em objeto do JS.
 */
server.use(express.json());

server.get("/", (req, res) => {
    return res.json({
        app: "Base da API do Desafio Gorila - Mega Hack 2",
        author: "Time 20",
        rep_url: "https://github.com/Time20DesafioGorila/suitability-api",
    });
});

/**
 * Rodando o servidor back-end.
 */
server.listen(process.env.APP_PORT, () => {
    console.log(
        "Servidor backend inicializado com sucesso na porta " +
            process.env.APP_PORT
    );
});
