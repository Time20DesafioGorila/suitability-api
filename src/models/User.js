const { Schema, model } = require("mongoose");

/**
 * Tabela User da API
 */
const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: String,
        phone: String,
    },
    {
        timestamps: true,
    }
);

module.exports = model("User", UserSchema);
