require("../config/Database")

const mongoose = require("mongoose")

let adminSchema = mongoose.Schema({
    username : String,
    password : String
})

module.exports = mongoose.model("admin", adminSchema)