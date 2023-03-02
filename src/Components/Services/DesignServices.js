import React from 'react';
import './Services.css';
import Mobile from '../assets/mobile.png';
import { FaDesktop } from 'react-icons/fa';

const DesignServices = () => {
    return (
        <div className="design">
            <div className="image">
                <img src={Mobile} alt="Mobile" />
            </div>
            <div className="text">
                <h2>Our Design Comes With...</h2>
                <ul>
                    <div className='res'>
                        <FaDesktop />
                        <li>Responsive Design</li>
                    </div>
                    <div className='res'>
                        <FaDesktop />
                        <li>Modern And Clean Design</li>
                    </div>
                    <div className='res'>
                        <FaDesktop />
                        <li>Clean Code</li>
                    </div>
                    <div className='res'>
                        <FaDesktop />
                        <li>Browser Friendly</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default DesignServices;