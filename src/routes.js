const express = require("express");
const routes = express.Router();

/**
 * Rota Users
 */
const UserController = require("./controllers/UserController");
const InvestmentController = require("./controllers/InvestmentController");
const WalletController = require("./controllers/WalletController");

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.post("/investment/:id", InvestmentController.store);

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
