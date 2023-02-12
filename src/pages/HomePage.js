import React, { useState, useEffect } from "react";
import Navbarcomp from "../components/Navbarcomp";

import img from "../images/Homes.jpg"
import Footercomp from "../components/Footercomp";



export default function HomePage(){

    return(
        <div className="d-flex flex-column" style={{rowGap:"20px"}}>

            <Navbarcomp id="navbar" />
            <div style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "800px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}>
                <div className="card text-center d-flex flex-column" style={{backgroundColor: "rgba(255, 255, 255, 0.5)", width: "50%",height:"50%", padding: "30px",}}>
                   <div>
                       <h1 className="card-title" style={{color: "black"}}>Welcome to RailManApp</h1>
                    <p className="card-text" style={{color:"black"}}><strong>Discover the world of food and drinks with us!</strong></p>
                       </div>
                       <div className="d-flex justify-content-center"  style={{paddingTop:"200px",columnGap:"10px"}} >
                           <a href="/login" className="btn btn-primary mx-2">Login</a>
                           <a href="/register" className="btn btn-secondary mx-2">Register</a>
                    </div>
                </div>
            </div>
           <Footercomp/>
        </div>
    )

}