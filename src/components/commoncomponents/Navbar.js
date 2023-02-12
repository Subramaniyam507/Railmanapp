import React from "react"
import {useState} from "react";

import {Link} from "react-router-dom";
export default function Navbar(){

    const [isOpen,setIsOpen] =useState(false)
    function toggle(){
        setIsOpen(!isOpen)
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">RailManApp</Link>
            <button className="navbar-toggler" type="button" onClick={toggle}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link"  to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/restaurants">Restaurants</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>



    )
}