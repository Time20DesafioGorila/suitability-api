const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
    async index(req, res) {
        if (!req.params.idUser) {
            const user = await User.find();
            return res.json({ user });
        } else {
            const user = await User.findOne(req.params.idUser);
            return res.json({ user });
        }
    },

    async store(req, res) {
        const { email } = req.body;

        if (await User.findOne({ email }))
            return res
                .status(400)
                .send({ error: "Email já cadastrado" });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.json(user);
    },

    async update(req, res) {
        const { name, email, phone, password } = req.body;

        const hash = await bcrypt.hash(password, 10);

        const { idUser } = req.params;
        const user = await User.findByIdAndUpdate(idUser,
            {
                name,
                email,
                phone,
                password: hash
            }, { new: true });

        user.password = undefined;

        return res.json(user);
    },
};
