import React from 'react'
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Cooking</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/branches"} className="nav-link">Branches</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" to={"/items"}>Items</Link>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contactUs'} className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Link to={'/register'}>
                            <button className="btn btn-primary m-1" type="button">Register</button>
                        </Link>
                        <Link to={'/login'}>
                            <button className="btn btn-primary m-1" type="button">Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
