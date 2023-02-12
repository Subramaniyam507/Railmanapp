import React from "react"
import {useState} from "react";
import {

    NavLink,
} from 'react-router-dom';

export default function Navbarcomp(){

    const [isOpen,setIsOpen] =useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    function toggle(){
        setIsOpen(!isOpen)
    }

    function toggleDropdown(){
        setDropdownOpen(!dropdownOpen);
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent " style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}} >
            <NavLink className="navbar-brand" to="/">RailManApp</NavLink>
            <button className="navbar-toggler" type="button" onClick={toggle}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/">Home</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" onClick={toggleDropdown}>
                            Dashboard
                        </a>
                        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="/dashboard/profile">Profile</NavLink>
                            <NavLink className="dropdown-item" to="/dashboard/orders">Orders</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/restaurants">Restaurants</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

       </div>

    )
}