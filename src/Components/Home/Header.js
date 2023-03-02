import React from 'react';
import './Home.css';
import Logo from '../assets/logo (1).png';
import { FaSearch, FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <a href="/" className="logo">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <nav>
                        <i className="fas fa-bars toggle-menu"><FaBars /></i>
                        <ul>
                            <li><a className="active" href="/">Home</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Portfolio</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                        <div className="form">
                            <i className="fas fa-search"><FaSearch /></i>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Header;