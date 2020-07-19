import React from 'react';
import './index.scss';
import {
    Link
} from "react-router-dom";


/* Components */
import Hero from '../Components/Hero';
import Project from '../Components/Project';

/* Assets */
import HeroImg from '../assets/images/OverviewAssets/Hero.svg';
import PITImg from '../assets/images/OverviewAssets/PIT.svg';
import PITLogo from '../assets/images/OverviewAssets/PIT_logo.png';

import EDUImg from '../assets/images/OverviewAssets/EDU.svg';
import EDULogo from '../assets/images/OverviewAssets/EDU_logo.svg';

import LRMImg from '../assets/images/OverviewAssets/LRM.svg';
import LRMLogo from '../assets/images/OverviewAssets/LRM_logo.png';


const info = {
    PIT: {
        img: PITImg,
        logo: PITLogo,
        title: "UX ENGINEER • PRODUCT MANAGER",
        tags: "Qualitative Interviews | Data Analysis | Product Design",
        desc: "See how we are helping the Pittsburgh International Airport with their Terminal Modernization Plan scheduled to go live in 2023."
    },
    EDU: {
        img: EDUImg,
        logo: EDULogo,
        title: "UX ENGINEER • UX DESIGNER",
        tags: "Data Analysis | Data Visualization | UI Development",
        desc: "Leveraging sensing technologies to motivate teachers to develop professionally by showing them insights backed by data from their own classes."
    },
    LRM: {
        img: LRMImg,
        logo: LRMLogo,
        title: "SENIOR SOFTWARE DEVELOPER",
        tags: "UI Development | Data Visualization | Product Design",
        desc: "Facilitating  out-of-home advertising bidding process and visualizing analyzed metrics to empower advertisers with unprecedented insights about their ad campaigns."
    }
}

function Portfolio() {
    return (
        <div className="">
            <Hero img={HeroImg}></Hero>
            <div className="content-container">
                <h1>Projects</h1>
                <Project info={info.PIT}></Project>
                <Project info={info.EDU}></Project>
                <Project info={info.LRM}></Project>
            </div>
        </div>
    );
}

export default Portfolio;
