import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function Products() {

    const [i, setI] = useState("");
    const [n, setN] = useState("");
    const [d, setD] = useState("");
    const [p, setP] = useState("");
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data,setData] = useState([]);
    const [add,setAdd] = useState(true);
    const [ID, setID] = useState("");
    useEffect(()=>{getData()},[]);

    function PImage(e) {
        setI(e.target.value);
    }
    function PName(e) {
        setN(e.target.value);
    }
    function PDis(e) {
        setD(e.target.value);
    }
    function PPrice(e) {
        setP(e.target.value);
    }
    async function Addproduct(){
        let obj={
            Product_Img : i,
            Product_Name : n,
            Product_dis : d,
            Product_Price : p 
        }
        console.log(obj);
        let res = await fetch("http://localhost:3000/products",{
            method : "POST",
            body : JSON.stringify(obj),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        res = await res.json();
        alert(res);
        getData();
    }

    async function getData(){
        setLoading(true);
        try {
            let res = await fetch("http://localhost:3000/products");
            res = await res.json();
            console.log(res);
            setData(res);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }
    function updatefn(id){
        console.log(id);
        setID(id);
        setAdd(false);
    }
    async function deletefn(id){
        console.log(id);
        let res = await fetch(`http://localhost:3000/products/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type" : "application/json"
            }
        });
        res = await res.json();
        alert(res);
        getData();
    }
    async function Updateproduct(){
        let obj={
            Product_Img : i,
            Product_Name : n,
            Product_dis : d,
            Product_Price : p 
        }
        console.log(obj);
        let res = await fetch(`http://localhost:3000/products/${ID}`,{
            method : "PATCH",
            body : JSON.stringify(obj),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        res = await res.json();
        alert(res);
        setAdd(true);
        getData();
        
    }

    return add ? (<>
        <h1>Products Page</h1>
        <input onChange={PImage} type="text" placeholder="Enter A Product Image Link" />
        <input onChange={PName} type="text" placeholder="Enter Product Name" />
        <input onChange={PDis} type="text" placeholder="Ente A Discription About Product" />
        <input onChange={PPrice} type="text" placeholder="Enter A Price Of Product" />
        <button onClick={Addproduct}>Add Product</button>
        <ProductList Data = {data} Loading = {loading} Error = {error} Updatefn={updatefn} Deletefn={deletefn}/>
    </>) : (<>
        <h1>Update Your Product </h1>
        <input onChange={PImage} type="text" placeholder="Enter A Updated Product Image Link" />
        <input onChange={PName} type="text" placeholder="Enter Updated Product Name" />
        <input onChange={PDis} type="text" placeholder="Ente A Updated Discription About Product" />
        <input onChange={PPrice} type="text" placeholder="Enter A Updated Price Of Product" />
        <button onClick={Updateproduct}>Update Product</button>
    </>)
}

export default Products;