import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStar as faStarEmpty } from "@fortawesome/free-solid-svg-icons";

export default function RestaurantCard({restaurant}){
    // console.log(restaurant)
    function Star({ filled }) {
        return filled ? (
            <FontAwesomeIcon icon={faStar} style={{ color: "orange", fontSize: "20px" }} />
        ) : (
            <FontAwesomeIcon icon={faStarEmpty} style={{ color: "gray", fontSize: "20px" }} />
        );
    }
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<Star key={i} filled={i <restaurant.number } />);
    }

    return (
        <div className="card d-flex flex-column " style={{borderRadius:"6%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",width:"600px", height:"400px"}}>
           <img  src={restaurant.imgUrl} className="card-img-top" alt="cannot display" style={{maxHeight:"70%"}} />
            <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text"><strong>Ratings:</strong>   {stars}  </p>

            </div>
        </div>
    )
}