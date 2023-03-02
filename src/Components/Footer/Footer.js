import React from 'react';
import './Footer.css';
import Logo from '../assets/logo (1).png';

function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <img src={Logo} alt="Logo" />
                <p>We Are Social</p>
                <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fas fa-home"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <p className="copyright">&copy; 2021 <span>Kasper</span> All Right Reserved</p>
            </div>
        </div >
    )
}
export default Footer;