import React from 'react';
import './index.scss';

/* Components */
import Hero from '../Components/Hero';
import TLDR from '../Components/TLDR';

/* Assets */
import HeroImg from '../assets/images/PIT/Hero.png';

const hero_info = {
    img: HeroImg,
    title: 'Pittsburgh International Airport',
    desc: 'Reducing traveler anxiety and frustration to improve overall customer experience',
    isBanner: true
};

const summary = {
    overview: "The Pittsburgh International Airport is undertaking a massive transformation and is coming up with a new terminal set to go live in 2023. The airport anticipates the number of travellers to increase significantly in the coming years and is therefore looking into how to reduce wait times in queues such as the TSA, boarding, etc.s",
    role: 'UX Engineer | Product Manager',
    tools: 'Dialogflow, HTML5, CSS3, Figma',
    duration: 'Jan, 2020 - Present (7 months)',
    problem: (
        <h2>
            How might we reduce travelers’ frustration and anxiety in the security line by providing more <span>transparency, control,</span> and <span>efficiency</span>?
            </h2>
            )

};

function PIT() {
    return (
        <div>
            <Hero info={hero_info}></Hero>
            <TLDR info={summary}></TLDR>
            <div className="content-container">
                
            </div>
        </div>
    );
}

export default PIT;
