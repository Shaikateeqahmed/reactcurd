import React from "react";
import {Routes,Route} from "react-router-dom"
import Products from "../Pages/Product";

function MainRouter(){
    return(
    <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/Products"element={<Products/>}/>
    </Routes>
    )
}

export default MainRouter;