const { Schema, model } = require("mongoose");
const schema = new Schema({
    u_login: {
        type: String,
        required: true,
        unique: true
    },
    u_pass: {
        type: String,
        required: true
    },
    u_fio: {
        type: String,
        required: true
    },
    u_birthday: {
        type: String,
    },
    u_site: {
        type: String,
    },
    u_address: {
        type: String,
    },
    u_status: {
        type: String,
    }
});

module.exports = model("User", schema);