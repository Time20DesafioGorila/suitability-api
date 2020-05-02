const { Schema, model } = require("mongoose");

/**
 * Tabela Wallet da API
 */
const WalletSchema = new Schema(
    {
        perfil: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true,
        },
        investment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Investment',
        },
        ranking: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ranking',
        },
    },

    {
        timestamps: true,
    }
);

module.exports = model("Wallet", WalletSchema);
