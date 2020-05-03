const User = require("../models/User");
const bcrypt = require('bcryptjs');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        // Validando se não já existe o email
        /*let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }*/

        const { email, password } = request.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user)
            return res.status(400).send({ error: 'Usuário não existe' });

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Senha invalida' });

        user.password = undefined;

        return res.json({ user });
    },
};
