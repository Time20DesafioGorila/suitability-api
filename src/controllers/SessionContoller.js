const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user) return res.status(400).send({ error: "Usuário não existe" });

        if (!(await bcrypt.compare(password, user.password)))
            return res.status(400).send({ error: "Senha invalida" });

        user.password = undefined;

        return res.json({ user });
    },
};
