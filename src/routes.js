const express = require("express");
const routes = express.Router();

/**
 * Rota Session
 */
const SessionController = require("./controllers/SessionContoller");
routes.post("/sessions", SessionController.store);

/**
 * Rota Users
 */
const UserController = require("./controllers/UserController");
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

/**
 * Rota Investiment
 */
const InvestmentController = require("./controllers/InvestmentController");
routes.post("/investment", InvestmentController.store);

/**
 * Rota Wallet
 */
const WalletController = require("./controllers/WalletController");
routes.post("/wallet/:idUser", WalletController.store);

/**
 * Rota "/"
 */
routes.get("/", (req, res) => {
    return res.json({
        app: "Base da API do Desafio Gorila - Mega Hack 2",
        author: "Time 20",
        rep_url: "https://github.com/Time20DesafioGorila/suitability-api",
    });
});

module.exports = routes;
