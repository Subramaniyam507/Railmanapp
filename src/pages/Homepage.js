import React from "react";
import Navbar from "../components/commoncomponents/Navbar";
import BootstrapLink from "../components/commoncomponents/Bootsrap";
import FooterComp from "../components/commoncomponents/FooterComp";


export default function Homepage(){
    const welcome = "Welcome to the app"
    return(
       <div>
        <BootstrapLink/>
        <Navbar/>
        <FooterComp/>
       </div>
    )

}

