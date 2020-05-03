const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

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
            unique: true,
        },
        password: {
            type: String,
            select: false,
        },
        phone: String,
    },
    {
        timestamps: true,
    }
);

UserSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

module.exports = model("User", UserSchema);
