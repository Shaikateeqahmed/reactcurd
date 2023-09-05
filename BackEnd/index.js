const express = require("express");
const { connection } = require("./connection/connection.js");
const {Product} = require("./Routes/ProductRoute.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/products",Product);


let port = 3000;
app.listen(3000,async()=>{
    await connection
   console.log(`Server is running on a ${port}`);
})