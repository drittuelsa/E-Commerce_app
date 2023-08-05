import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import './myStyle1.css';


export const NavBar = () => {

return(
    <div >
        
        <Header/>
        <Outlet/>
        <Footer/>
     
    </div>
)
}