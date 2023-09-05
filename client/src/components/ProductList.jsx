import React from "react";
import '../App.css';


function ProductList({Data, Loading, Error, Updatefn, Deletefn}){

    function updatefn(id){
        Updatefn(id);
    }
    function deletefn(id){
        Deletefn(id);
    }
    return Loading ? (<h1>Loading.....</h1>)
                   : Error ? (<h1>Error in fetching the data....</h1>)
                   : (<div className="card" style={{width:"80%", display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gridTemplateRows:"auto", gap:"25px", margin:"auto", marginTop:"50px"}} >
                    {Data.map((el,i)=>{
                        return <div style={{borderRadius:"10px",boxShadow:"rgba(239, 106, 175, 0.8) 0px 5px 15px", height:"450px", padding:'5px'}} key={el._id}>
                            <img style={{width:"100%",borderRadius:"10px 10px 0px 0px",height:"40%"}} src={el.Product_Img} alt="Product_Image"/>
                            <h1>{el.Product_Name}</h1>
                            <p>{el.Product_dis}</p>
                            <p>{el.Product_Price}</p>
                            <button style={{backgroundColor:"rgba(239, 106, 175, 0.8)", color:"white", border: "0px", padding:"5px",borderRadius:"5px"}} onClick={()=>updatefn(el._id)}>Update Product</button>
                            <button style={{backgroundColor:"red", color:"white", border: "0px", padding:"5px",borderRadius:"5px"}} onClick={()=>deletefn(el._id)}>Delete Product</button>
                        </div>
                    })}
                   </div>)
}

export default ProductList;