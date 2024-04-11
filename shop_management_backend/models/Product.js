require("../config/Database")

const mongoose = require("mongoose")

let productSchema = mongoose.Schema({
    name : String,
    bprice : Number,
    price : Number,
    quantity : Number,
    category : String,
    root_category : String,
    size : Number,
    image : String,
    date : String
})

module.exports = mongoose.model("product", productSchema)