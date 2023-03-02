import React from 'react';
import './Services.css';
import { FaDesktop, FaCog, FaPencilAlt, FaCamera } from 'react-icons/fa';

const Services = () => {
    return (
        <div>
            <div className="services">
                <div className="container">
                    <div className="main-heading">
                        <h2>Services</h2>
                        <p>
                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Mauris blandit aliquet elit, eget
                            tincidunt.
                        </p>
                    </div>
                    <div className="services-container">
                        <div className="srv-box">
                            <div className="text">
                                <div className='h3'>
                                    <FaDesktop className="i" />
                                    <h3>Vorem amet intuitive</h3>
                                </div>
                                <p>
                                    Curabitur arcu erat, accumsan id imperdiet et,
                                    porttitor at sem. Mauris blandit aliquet elit, eget
                                    tincidunt nibh pulvinar a. Curabitur aliquet quam.
                                </p>
                            </div>
                        </div>
                        <div className="srv-box">
                            <div className="text">
                                <div className='h3'>
                                    <FaCog className="i" />
                                    <h3>Vorem amet intuitive</h3>
                                </div>
                                <p>
                                    Curabitur arcu erat, accumsan id imperdiet et, porttitor
                                    at sem. Mauris blandit aliquet elit, eget
                                    tincidunt nibh pulvinar a. Curabitur aliquet quam.
                                </p>
                            </div>
                        </div>
                        <div className="srv-box">
                            <div className="text">
                                <div className='h3'>
                                    <FaPencilAlt className="i" />
                                    <h3>Vorem amet intuitive</h3>
                                </div>
                                <p>
                                    Curabitur arcu erat, accumsan id imperdiet et,
                                    porttitor at sem. Mauris blandit aliquet elit, eget
                                    tincidunt nibh pulvinar a. Curabitur aliquet quam.
                                </p>
                            </div>
                        </div>
                        <div className="srv-box">
                            <div className="text">
                                <div className='h3'>
                                    <FaCamera className="i" />
                                    <h3>Vorem amet intuitive</h3>
                                </div>
                                <p>
                                    Curabitur arcu erat, accumsan id imperdiet et,
                                    porttitor at sem. Mauris blandit aliquet elit, eget
                                    tincidunt nibh pulvinar a. Curabitur aliquet quam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;