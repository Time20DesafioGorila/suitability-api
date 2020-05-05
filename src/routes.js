require("dotenv").config();
const express = require("express");
const routes = express.Router();
const cors = require("cors");

/**
 * Configuração do CORS
 */
var whitelist = [process.env.WHITELIST1, process.env.WHITELIST2];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
/**
 * Rota Session
 */
const SessionController = require("./controllers/SessionController");
routes.post("/session", SessionController.store);

/**
 * Rota Users
 */
const UserController = require("./controllers/UserController");
routes.get("/users", cors(corsOptions), UserController.index);
routes.post("/users", UserController.store);
routes.put("/users/:idUser", UserController.update);

/**
 * Rota Investiment
 */
const InvestmentController = require("./controllers/InvestmentController");
routes.get("/investment", cors(corsOptions), InvestmentController.index);
routes.post("/investment", InvestmentController.store);
routes.put("/investment/:idInvest", InvestmentController.update);
routes.delete("/investment/:idInvest", InvestmentController.delete);

/**
 * Rota Wallet
 */
const WalletController = require("./controllers/WalletController");
routes.get("/wallet", cors(corsOptions), WalletController.index);
routes.post("/wallet", WalletController.store);
routes.put("/wallet/:idWallet", WalletController.update);
routes.delete("/wallet/:idWallet", WalletController.delete);

const RankingController = require("./controllers/RankingController");
routes.get("/ranking", cors(corsOptions), RankingController.index);

const SuitabilityController = require("./controllers/SuitabilityController");
routes.post("/suitability", SuitabilityController.store);
/**
 * Rota "/"
 */
routes.get("/", cors(corsOptions), (req, res) => {
    return res.json({
        app: "Base da API do Desafio Gorila - Mega Hack 2",
        author: "Time 20",
        rep_url: "https://github.com/Time20DesafioGorila/suitability-api",
    });
});

module.exports = routes;
