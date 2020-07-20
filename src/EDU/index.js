import React from 'react';
import './index.scss';

/* Components */
import Hero from '../Components/Hero';
import TLDR from '../Components/TLDR';

/* Assets */
import HeroImg from '../assets/images/EDU/Hero.png';

const hero_info = {
    img: HeroImg,
    title: 'EduSense',
    desc: 'Class level Insights for university level professors for their professional development',
    isBanner: true
};

const summary = {
    overview: "The only way for a university professor to get direct & personalised feedback on their teaching, to help them develop professionally, involves observation by an expert who sits in their class, analyses their behaviour and provides feedback on their performance. But, finding such experts might be difficult and not the least, costly.",
    role: 'UX Engineer | Research Assistant',
    tools: 'React, Node, Expresss, eCharts, Canvas, MongoDB.',
    duration: 'Jan, 2020 - Present (7 months)',
    problem: (
        <h2>
            How might we leverage <span>sensing technologies</span> to better aid professors with insights
            backed by data from their own classes and what is the best way to <span>represent</span> such information
            to <span>motivate</span> them become better teachers?
        </h2>
    )

};

function EDU() {
    return (
        <div>
            <Hero info={hero_info}></Hero>
            <TLDR info={summary}></TLDR>
            <div className="content-container">
                <section>
                    <h3>Solution</h3>
                    <p>EduSense – a comprehensive sensing system to produce theoretically motivated class insights
                        correlated with effective step-by-step instructions to motivate professors to improve student engagement
                        and their efficacy.</p>
                </section>
            </div>
        </div>
    );
}

export default EDU;
