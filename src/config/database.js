require("dotenv").config();
const db = require("mongoose");

// Conexão com o banco de dados
module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            autoIndex: false,
            // reconnectTries: Number.MAX_VALUE,
            // reconnectInteral: 500,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4,
            useUnifiedTopology: true,
            useFindAndModify: false,
        };

        const {DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_URL } = process.env;
        const url = DB_URL || `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`; 
        db.connect(
            url,
            dbOptions
        );

        db.connection.on("connected", () => {
            console.log(`MONGODB conectado com sucesso!\nurl: ${url}`);
        });

        db.connection.on("err", (err) => {
            console.log(`Erro de conexão com o MONGODB, erro: \n ${err.stack}`);
        });

        db.connection.on("disconnected", () => {
            console.log("MONGODB desconectado!");
        });
    },
};
