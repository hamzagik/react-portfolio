import React from "react";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'black' }}>
            <div className="container">
                <a href="/" className="navbar-brand"><h1>HAZ</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about-section">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about-experience">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about-projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about-contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
