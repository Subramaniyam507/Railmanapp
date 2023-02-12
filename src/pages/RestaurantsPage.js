import React from "react";
import RestaurantCard from "../components/RestaurantCards";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import restaurants from "../mocktestdata/RestaurantsData";
import Bootstrapcomp from "../components/Bootstrapcomp";
import Navbarcomp from "../components/Navbarcomp";
import Footercomp from "../components/Footercomp";
export default function RestaurantsPage(){
    const navigate = useNavigate();

    function handleRestaurantClick(id) {

        navigate(`/restaurants/${id}`);
    }
    return  (

        <div className="d-flex flex-column" style={{rowGap:"20px"}}>
            <Bootstrapcomp/>
            <Navbarcomp />

            <div className="d-flex flex-column justify-content-center" >
                {restaurants.map((restaurant)=> (
                        <div key={restaurant.id} className="p-2  d-inline-flex align-items-center justify-content-center"
                             onClick={() => handleRestaurantClick(restaurant.id)}>
                            <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id} style={{ textDecoration: "none", color: "inherit" }}>
                            <RestaurantCard restaurant={restaurant} />
                            </Link>
                        </div>
                    )
                )
                }
            </div>
            <Footercomp />
        </div>

    )
}