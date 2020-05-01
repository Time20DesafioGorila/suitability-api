const db = require("mongoose");

/**
 * Tabela User da API
 */
const UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phone: String,
        password: String,
    },
    {
        timestamps: true,
    }
);

module.exports = db.model("User", UserSchema);
