const Investment = require("../models/Investment");

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
        const id = req.params;
        const { name_inv, amount, value } = req.body;

        if (!name_inv) throw "Nome do investimento não informado ou inválido!";
        if (!value) throw "Valor não informado ou inválido!";

        const investment = await Investment.create({
            name_inv: name_inv,
            amount: amount,
            value: value,
            wallet: id,
        });

        /* console.log(user); */
        return res.json({ investment });
    },
};
