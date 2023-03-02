import React from 'react';
import './About.css';
import Video from '../assets/awesome-video.mp4';

function AboutT() {
    return (
        <div class="video">
            <video autoplay muted loop>
                <source src={Video} type="video/mp4" />
            </video>
            <div class="text">
                <h2>Super Awesome Video Here</h2>
                <p>Its All You Need</p>
                <button>See More</button>
            </div>
        </div>
    )
}
export default AboutT