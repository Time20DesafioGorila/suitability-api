require("dotenv").config();
const helmet = require("helmet");
const db = require("./config/database");
const express = require("express");
const routes = require("./routes");
const app = express();

/**
 * Importanção as configurações do banco de dados.
 */
db.init();

/**
 * Helmet para segurança genérica
 */
app.use(helmet());

/**
 * Utilizando o express para converter o json em objeto do JS.
 */
app.use(express.json());

/**
 * Utilizando as rotas da aplicação.
 */
app.use(routes);

/**
 * Rodando o servidor back-end.
 */
app.listen(process.env.APP_PORT || 3333, () => {
    console.log(
        "Servidor backend inicializado com sucesso na porta " +
            process.env.APP_PORT
    );
});
