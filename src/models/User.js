const { Schema, model } = require("mongoose");

/**
 * Tabela User da API
 */
const UserSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
    },
    {
        timestamps: true,
    }
);

module.exports = model("User", UserSchema);
