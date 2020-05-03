const { Schema, model } = require("mongoose");

/**
 * Tabela Wallet da API
 */
const WalletSchema = new Schema(
    {
        points: Number,
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
    },

    {
        timestamps: true,
    }
);

module.exports = model("Wallet", WalletSchema);
