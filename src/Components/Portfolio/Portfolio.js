import React from 'react';
import './Portfolio.css';
import Shuffle1 from '../assets/shuffle-01.jpg';
import Shuffle2 from '../assets/shuffle-02.jpg';
import Shuffle3 from '../assets/shuffle-03.jpg';
import Shuffle5 from '../assets/shuffle-05.jpg';
import Shuffle6 from '../assets/shuffle-06.jpg';
import Shuffle7 from '../assets/shuffle-07.jpg';
import Shuffle8 from '../assets/shuffle-08.jpg';
import Shuffle4 from '../assets/43616653000000_original.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <div className="main-heading">
                    <h2>Portfolio</h2>
                    <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                        tincidunt.
                    </p>
                </div>
                <ul className="shuffle">
                    <li class="active">All</li>
                    <li>App</li>
                    <li>Photo</li>
                    <li>Web</li>
                    <li>Print</li>
                </ul>
            </div>
            <div className="imgs-container">
                <div className="box">
                    <img src={Shuffle1} alt="" />
                    <div className="caption">
                        <h4>Awesome Image</h4>
                        <p>Photography</p>
                    </div>
                </div>
                <div className="box">
                    <img src={Shuffle2} alt="" />
                    <div className="caption">
                        <h4>Awesome Image</h4>
                        <p>Photography</p>
                    </div>
                </div>
                <div className="box">
                    <img src={Shuffle3} alt="" />
                    <div className="caption">
                        <h4>Awesome Image</h4>
                        <p>Photography</p>
                    </div>
                </div>
                <div className="box">
                    <img src={Shuffle4} alt="" />
                    <div className="caption">
                        <h4>Awesome Image</h4>
                        <p>Photography</p>
                    </div>
                </div>
                <div className="box">
                    <img src={Shuffle5} alt="" />
                    <div className="caption">
                        <h4>Awesome Image</h4>
                        <p>Photography</p>
                    </div>
                </div>
                <div className="box">
                    <img src={Shuffle6} alt="" />
                    <div className="caption">
                        <h4>Awesome Image</h4>
                        <p>Photography</p>
                    </div>
                </div>
                <div className="box">
                    <img src={Shuffle7} alt="" />
                    <div className="caption">
                        <h4>Awesome Image</h4>
                        <p>Photography</p>
                    </div>
                </div>
                <div className="box">
                    <img src={Shuffle8} alt="" />
                    <div class="caption">
                        <h4>Awesome Image</h4>
                        <p>Photography</p>
                    </div>
                </div>
            </div>
            <a href="/" className="more">More</a>
        </div>
    )
}
export default Portfolio;