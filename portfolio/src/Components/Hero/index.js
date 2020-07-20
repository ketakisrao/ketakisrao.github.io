import React from 'react';
import './index.scss';

function Hero(props) {
    const info = props.info;
    let banner;
    if(info.isBanner){
        banner = (
            <div className='hero-abs'>
                <div className="hero-banner">
                    <h1>
                        {info.title}
                    </h1>
                    <p className='hide-on-small'>
                        {info.desc}
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className="hero">
            <img src={info.img} />
            {banner}
        </div>
    );
}

export default Hero;