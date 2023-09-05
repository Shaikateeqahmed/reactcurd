const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    Product_Img : String,
    Product_Name : String,
    Product_dis : String,
    Product_Price : Number
})

const ProductModel = mongoose.model("product",ProductSchema);

module.exports={ProductModel};