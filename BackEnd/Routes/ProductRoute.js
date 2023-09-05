const express = require("express");
const { ProductModel } = require("../modules/ProductModule.js");

const Product = express.Router();

Product.get("/",async(req,res)=>{
    let products = await ProductModel.find();
    res.json(products);
});

Product.post("/",async(req,res)=>{
   let newproduct = new ProductModel(req.body);
   await newproduct.save();
   res.json("Product Save successfully!");
});

Product.patch("/:id",async(req,res)=>{
    let ID = req.params.id;
    let payload = req.body;

    await ProductModel.findByIdAndUpdate({_id:ID},payload);
    res.json(`Product having ID ${ID} is updated successfull!`);
});

Product.delete("/:id",async(req,res)=>{
    let ID = req.params.id;

    await ProductModel.findByIdAndDelete({_id:ID});
    res.json(`Product having ID ${ID} is deleted successfull!`);
});

Product.get("/:id",async(req,res)=>{
    let ID = req.params.id;

    let product = await ProductModel.find({_id:ID});
    res.json(product);
});

module.exports={Product};