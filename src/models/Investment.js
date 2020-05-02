const { Schema, model } = require("mongoose");

/**
 * Tabela Investment da API
 */
const InvestmentSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        wallet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Wallet",
            require: true,
        },
    },

    {
        timestamps: true,
    }
);

module.exports = model("Investment", InvestmentSchema);
