const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");

/**
 * Tabela Investment da API
 */
const InvestmentSchema = new Schema(
    {
        name_inv: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        wallet_id: {
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
