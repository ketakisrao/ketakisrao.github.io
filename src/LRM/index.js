import React from 'react';
import './index.scss';

/* Components */
import Hero from '../Components/Hero';
import TLDR from '../Components/TLDR';

/* Assets */
import HeroImg from '../assets/images/LRM/Hero.png';

const hero_info = {
    img: HeroImg,
    title: 'LiveReach Media',
    desc: 'An analytics based solution to out of home digital advertising',
    isBanner: true
};

const summary = {
    overview: "In the world of out of home advertising, there are two main stakeholders, Advertisers - who want to run ad campaigns and Publishers - who maintain the digital inventory on which ads can run (ex: billboards, tv displays, etc). LiveReach media has a platform to connect these two entities and provide them with analytics on their ad campaigns. Before I joined the team, the onboarding process for Publishers was lengthy and complicated which is why a lot of LRM’s time & effort was being spent into helping customers get onto the system instead of helping them with the analytics data of their ad campaigns.",
    role: 'UX Engineer | Product Manager',
    tools: 'Dialogflow, HTML5, CSS3, Figma',
    duration: 'Jan, 2020 - Present (7 months)',
    problem: (<h2>
        How might we reduce travelers’ frustration and anxiety in the security line by providing more <span>transparency, control,</span> and <span>efficiency?</span>
    </h2>)

};

function LRM() {
    return (
        <div>
            <Hero info={hero_info}></Hero>
            <TLDR info={summary}></TLDR>
            <div className="content-container">

            </div>
        </div>
    );
}

export default LRM;
