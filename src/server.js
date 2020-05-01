require("dotenv").config();
const db = require("./config/database");
const express = require("express");
const routes = require("./routes");
const app = express();

/**
 * Importanção as configurações do banco de dados.
 */
db.init();

/**
 * Utilizando o express para converter o json em objeto do JS.
 */
app.use(express.json());

app.use(express.json());
app.use(routes);

/**
 * Rodando o servidor back-end.
 */
app.listen(process.env.APP_PORT, () => {
    console.log(
        "Servidor backend inicializado com sucesso na porta " +
            process.env.APP_PORT
    );
});
