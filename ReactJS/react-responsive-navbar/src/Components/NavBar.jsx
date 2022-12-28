import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import "../CSS/NavBar.css"
import { useState } from 'react';
const NavBar = () => {
    const [userToggle,setUserToggle] = useState(false);
    const handleToggle =()=>{
        // console.log("Action triggered");
        document.querySelector(".navbar-menu").style.display = "flex"
        setUserToggle(true);

    }
    const handleToggleTimes =()=>{
        // console.log("cross triggered")
        document.querySelector(".navbar-menu").style.display = "none"
        setUserToggle(false);
    }
    return (
        <div className='header navbar bg-dark'>
            <Link to={"/"}><h1>ECommerce Site</h1></Link>
            <ul className='navbar-menu'>
                <li>About us</li>
                <li>Contact</li>
                <li>Login</li>
                <li>Register</li>
            </ul>
            <div className="toggle">
                {userToggle ? (<FaTimes onClick={handleToggleTimes} style={{ color: "white", fontSize: "1.7rem" }} />) :
                 (<FaBars onClick={handleToggle} style={{ color: "white", fontSize: "1.7rem" }}/>)}
            </div>

            
        </div>
    )
}

export default NavBar
