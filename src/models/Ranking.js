const { Schema, model } = require("mongoose");

/**
 * Tabela Ranking da API
 */
const RankingSchema = new Schema(
    {
        points: {
            type: String,
            required: true,
        },
        name_rule: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Ranking", RankingSchema);
