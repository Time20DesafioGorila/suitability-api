const Wallet = require("../models/Wallet");
const User = require("../models/User");

module.exports = {
    async index(req, res) {
        if (!req.params.id) {
            const user = await User.find();

            return res.json({ user });
        } else {
            const user = await User.findOne();

            return res.json({ user });
        }
    },

    async store(req, res) {
        const { idUser } = req.params;
        const { points, perfil } = req.body;

        // Validando o usuário
        const user = await User.findById(idUser);

        if (!user) {
            return res.status(400).json({ error: "O usuaŕio não existe." });
        }

        if (!perfil) throw "Nome do perfil não informado ou inválido!";

        const wallet = await Wallet.create({
            points: points,
            perfil: perfil,
            user_id: idUser,
        });

        return res.json({ wallet });
    },
};
