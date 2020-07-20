import React from 'react';
import './index.scss';

function Hero(props) {
    return (
        <div className="hero">
            <img src={props.img} />
            <div className='hero-abs'>
                <div className="hero-banner">
                    <h1>
                        Pittsburgh International Airport
                    </h1>
                    <p className='hide-on-small'>
                        Reducing traveler anxiety and frustration to improve overall customer experience
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;