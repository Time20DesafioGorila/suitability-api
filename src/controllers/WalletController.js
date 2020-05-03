const Wallet = require("../models/Wallet");
const User = require("../models/User");

module.exports = {
    async index(req, res) {
        if (!req.headers.user_id) {
            const wallet = await Wallet.find();
            return res.json({ wallet });
        } else {
            console.log(req.headers.user_id);
            const wallet = await Wallet.find({ user_id: req.headers.user_id }).populate(['user_id']);
            return res.json({ wallet });
        }
    },

    async store(req, res) {
        const { user_id } = req.headers;
        const { points, perfil } = req.body;

        // Validando o usuário
        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: "O usuaŕio não existe." });
        }

        if (!perfil) throw "Nome do perfil não informado ou inválido!";

        const wallet = await Wallet.create({
            points: points,
            perfil: perfil,
            user_id: user_id,
        });

        return res.json({ wallet });
    },

    async update(req, res) {
        const { user_id } = req.headers;
        const { idWallet } = req.params;
        const { points, perfil } = req.body;

        // Validando o usuário
        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: "O usuaŕio não existe." });
        }

        if (!perfil) throw "Nome do perfil não informado ou inválido!";

        const wallet = await Wallet.findByIdAndUpdate(idWallet, {
            points: points,
            perfil: perfil,
            user_id: user_id,
        }, { new: true });

        return res.json({ wallet });
    },

    async delete(req, res) {
        const { idWallet } = req.params;
        const wallet = await Wallet.findById(idWallet);

        if (!wallet) {
            return res.status(400).json({ error: "Esse investimento não existe." });
        }

        await Wallet.findByIdAndRemove(idWallet);

        /* console.log(user); */
        return res.send();
    },
};
