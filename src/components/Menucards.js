import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarEmpty, faStar} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import menudatasource from "../mocktestdata/Menudata";
import imgets from"../images/3.jpg"

export default function MenuCards({item}){
    const [count, setCount] = useState(0);
    console.log(item.name)


    function Star({ filled }) {
        return filled ? (
            <FontAwesomeIcon icon={faStar} style={{ color: "orange", fontSize: "20px" }} />
        ) : (
            <FontAwesomeIcon icon={faStarEmpty} style={{ color: "gray", fontSize: "20px" }} />
        );
    }
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<Star key={i} filled={i <item.rating} />);
    }

    return (
        <div className="card d-flex flex-column " style={{borderRadius:"6%",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",width:"400px", height:"200px"}}>

            <div className="card-body">
                <div className="d-flex flex-row " style={{justifyContent:"space-between"}}>
                    <div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><strong>Ratings:</strong>   {stars}  </p>
                <p>Price:{item.price}</p>
                        {count === 0 ? (
                            <button
                                onClick={() => setCount(1)}
                                className="btn btn-primary">Add</button>
                        ) : (
                            <div className="d-flex " >
                                <button onClick={() => setCount(count - 1)}
                                        className="btn btn-primary"
                                        style={{  cursor: "pointer" }}>-</button>
                                <p className="m-2">{count}</p>
                                <button
                                    onClick={() => setCount(count + 1)}
                                    className="btn btn-primary">+</button>
                            </div>
                        )}
                    </div>
                <img  src={item.image} className="card-img-top" alt="cannot display" style={{height:"100px",width:"100px"}} />
                </div>
            </div>

        </div>



    )
}