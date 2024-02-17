import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark mt-5" >
                <div className="collapse navbar-collapse">
                    <a href="#" className="navbar-brand">Simple Navbar</a>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li className="nav-item"><Link to="/profile" className="nav-link">profile</Link></li>
                        <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
                        {/* <li><Link to="/search" >search</Link></li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation;