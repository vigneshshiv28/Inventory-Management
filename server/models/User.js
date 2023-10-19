const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
},{timestamps:true});

const User = mongoose.model("User",userSchema);
module.exports = User;