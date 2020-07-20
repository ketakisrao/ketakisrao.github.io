import React from 'react';
import './index.scss';

/* Components */
import Hero from '../Components/Hero';

/* Assets */
import HeroImg from '../assets/images/PIT/Hero.png';

function PIT() {
    return (
        <div>
            <Hero img={HeroImg}></Hero>
            <div className="content-container">
            </div>
        </div>
    );
}

export default PIT;
