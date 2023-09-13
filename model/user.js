const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlenght: 3,
        require: "Name is required"
    }
});

const Users = mongoose.model("user", userSchema )
module.exports = Users