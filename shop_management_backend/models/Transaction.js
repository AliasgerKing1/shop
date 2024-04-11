require("../config/Database")

const mongoose = require("mongoose")

let transactionSchema = mongoose.Schema({
    date : String,
    price : Number,
    qty : Number,
    action : Number,
    products : Array,
})

module.exports = mongoose.model("transaction", transactionSchema)