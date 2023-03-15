import React from 'react'
import Phones from '../assets/about.png'
import { FaMugHot, FaFolder, FaEnvelope, FaTrophy } from 'react-icons/fa'

const About = () => {
    return (
        <div>
            <div class="about" id="about">
                <div class="container">
                    <div class="main-heading">
                        <h2>About Us</h2>
                        <p>
                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Mauris blandit aliquet elit, eget
                            tincidunt.
                        </p>
                    </div>
                    <img src={Phones} alt="" />
                </div>
            </div>
            <div className="stats">
                <div className="container">
                    <div className="box">
                        <i><FaMugHot className="i" /></i>
                        <div className="number">1.236</div>
                        <p>Coffee Drinks</p>
                    </div>
                    <div className="box">
                        <i><FaFolder className="i" /></i>
                        <div className="number">256</div>
                        <p>Completed Projects</p>
                    </div>
                    <div className="box">
                        <i><FaEnvelope className="i" /></i>
                        <div className="number">1,743</div>
                        <p>Mail Sent</p>
                    </div>
                    <div className="box">
                        <i><FaTrophy className="i" /></i>
                        <div className="number">17</div>
                        <p>Awards Received</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
<div class="stats">
    <div class="container">
        <div class="box">
            <FaMugHot className="i" />
            <div class="number">1.236</div>
            <p>Coffee Drinks</p>
        </div>
        <div class="box">
            <FaFolder className="i" />
            <div class="number">256</div>
            <p>Completed Projects</p>
        </div>
        <div class="box">
            <FaEnvelope className="i" />
            <div class="number">1,743</div>
            <p>Mail Sent</p>
        </div>
        <div class="box">
            <FaTrophy className="i" />
            <div class="number">17</div>
            <p>Awards Received</p>
        </div>
    </div>
</div>
