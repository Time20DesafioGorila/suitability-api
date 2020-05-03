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
        const { email } = req.body;

        if (await User.findOne({ email }))
            return res
                .status(400)
                .send({ error: "Email já cadastrado" });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.json(user);
    },
};
