const User = require("../models/User");

module.exports = {
    async index(req, res) {

        // const { email } = req.body;

        if (!req.params.id) {

            const user = await User.find();

            return res.json({ user });
        } else {

            const user = await User.findOne();

            return res.json({ user });
        }



        //return await User.find({ email }, (err, valor) => { });
        /*
        const users = await User.find({ email });
        console.log(users);
 */
        /* return res.json(users); */


    },

    async store(req, res) {
        const { name, email, phone, password } = req.body;

        if (!name) throw "Nome não informado ou inválido!";
        if (!email) throw "E-mail não informado ou inválido!";

        const user = await User.create({
            name: name,
            email: email,
            phone: phone,
            password: password,
        });

        /* console.log(user); */
        return res.json(user);
    },
};
