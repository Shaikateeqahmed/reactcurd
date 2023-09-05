import React from "react";
import { NavLink } from "react-router-dom";

const Links = [
    {path:"/", title:"Home"},
    {path:"/Products", title:"Products"}
];

function stylefn({isActive}){
    return  isActive ? {textDecoration:"none", color:"red"} : {textDecoration:"none", color:"blue"};
}

function Navbar(){
    return (<div style={{backgroundColor:"lightblue",padding:"10px",display:"flex",justifyContent:"space-around"}}>
        {Links.map((el, i)=>{
          return  <NavLink style={stylefn} to={el.path} key={i} >{el.title}</NavLink>
        })}
    </div>)
}

export default Navbar;
