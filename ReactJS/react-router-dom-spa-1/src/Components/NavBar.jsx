import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">React JS content</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/materials"} className="nav-link">Materials</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contactUs"} className="nav-link">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/aboutUs"} className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
