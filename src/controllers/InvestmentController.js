const Investment = require("../models/Investment");
const User = require("../models/User");
const Wallet = require("../models/Wallet");

module.exports = {
    async index(req, res) {
        if (!req.params.user_id) {
            const investments = await Investment.find();
            return res.json({ investments });
        } else {
            const investments = await Investment.find();
            return res.json({ investments });
        }
    },

    async store(req, res) {
        const { wallet_id } = req.headers;
        const { name_inv, amount, value } = req.body;

        // Validando a carteira
        const wallets = await Wallet.findById(wallet_id);

        if (!wallets) {
            return res.status(400).json({ error: "A carteita não existe." });
        }

        if (!name_inv) throw "Nome do investimento não informado ou inválido!";
        if (!value) throw "Valor não informado ou inválido!";

        const investment = await Investment.create({
            name_inv: name_inv,
            amount: amount,
            value: value,
            wallet_id: wallet_id,
        });

        /* console.log(user); */
        return res.json({ investment });
    },
};
