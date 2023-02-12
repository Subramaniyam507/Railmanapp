import React from "react"
import Navbarcomp from "../components/Navbarcomp";
import Footercomp from "../components/Footercomp";
import Bootstrapcomp from "../components/Bootstrapcomp";

import MenuCards from "../components/Menucards";
import menudatasource from "../mocktestdata/Menudata";
import { useParams } from "react-router-dom";

export default function MenuPage(){
    const  {id}  = useParams();
    let count = 0

    const menuitems = menudatasource[id-1]
    console.log(menuitems)


    return(
        <div className="d-flex flex-column" style={{rowGap:"20px"}}>
            <Bootstrapcomp/>
            <Navbarcomp />

            <div className="d-flex flex-column justify-content-center" >
                {menuitems.map( (item)=>(

                    <div key={count++} className="p-2  d-inline-flex align-items-center justify-content-center">
                    <MenuCards  item = {item}/>
                    </div>
                    )


                )

                }

            </div>
            <Footercomp />
        </div>

    )
}