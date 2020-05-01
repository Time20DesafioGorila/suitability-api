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
        };

        db.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@hackershawee-ws5ib.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
            dbOptions
        );

        db.connection.on("connected", () => {
            console.log("MONGODB conectado com sucesso!");
        });

        db.connection.on("err", (err) => {
            console.log(`Erro de conexão com o MONGODB, erro: \n ${err.stack}`);
        });

        db.connection.on("disconnected", () => {
            console.log("MONGODB desconectado!");
        });
    },
};
