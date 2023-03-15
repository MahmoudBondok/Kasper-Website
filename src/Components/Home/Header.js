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
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/contact">Contact</a></li>
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
