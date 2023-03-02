import React from 'react';
import './Subscribe.css';

function Subscribe() {
    return (
        <div className="subscribe">
            <div className="container">
                <form action="">
                    <i className="far fa-envelope fa-lg"></i>
                    <input type="email" name="mail" placeholder="Your Email" />
                    <input type="submit" value="Subscribe" />
                </form>
                <p>
                    Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. Mauris blan dit aliquet elit, eget tincidunt.
                </p>
            </div>
        </div>
    )
}
export default Subscribe;