const Wallet = require('../models/Wallet')
module.exports = {
    async index(req, res) {
        let {perfil} = req.query;
        const limit = 10;

        if(!perfil) throw 'Perfil não encontrado.'

        perfil = perfil.toUpperCase();

        const wallets = await Wallet.find({perfil}).sort({points:'desc'}).limit(limit);

        if(!wallets){
            return res.status(404).json({error:'Não há carteiras registradas no perfil.'})
        }

        return res.status(200).json(wallets);
    }
}