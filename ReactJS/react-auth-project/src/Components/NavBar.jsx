import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuths } from './MyAuth'

const NavBar = () => {
    const { user, logout } = useAuths();
    // console.log(user)
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/")
    }
    const handleClick = () =>{
        console.log("called...!!!");
        document.querySelector("#ProductMsg").innerHTML = "Please login to view the products"
    }
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <Link className="navbar-brand" to={"/"}>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        {user ? <li className="nav-link" onClick={handleLogout}>Logout</li> :
                        <Link className="nav-link" to={"/"}>Login</Link>
                    }
                        <Link className="nav-link"  onClick={handleClick} to={"/products"}>Products</Link>
                       
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
