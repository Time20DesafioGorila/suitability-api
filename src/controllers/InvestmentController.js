const Investment = require("../models/Investment");
const User = require("../models/User");
const Wallet = require("../models/Wallet");

module.exports = {
    async index(req, res) {
        if (!req.headers.wallet_id) {
            const investments = await Investment.find();
            return res.json({ investments });
        } else {
            const investments = await Investment.findById(req.headers.wallet_id);
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

    async update(req, res) {
        const { idInvest } = req.params;
        const { name_inv, amount, value } = req.body;


        if (!name_inv) throw "Nome do investimento não informado ou inválido!";
        if (!value) throw "Valor não informado ou inválido!";

        const investment = await Investment.findByIdAndUpdate(idInvest,
            {
                name_inv: name_inv,
                amount: amount,
                value: value,
            }, { new: true });

        /* console.log(user); */
        return res.json({ investment });
    },

    async delete(req, res) {
        const { idInvest } = req.params;

        const investment = await Investment.findById(idInvest);

        if (!investment) {
            return res.status(400).json({ error: "Esse investimento não existe." });
        }

        await Investment.findByIdAndRemove(idInvest);

        /* console.log(user); */
        return res.send();
    },
};
