import React from 'react';
import './index.scss';
import {
    Link
} from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';



/* Components */
import Hero from '../Components/Hero';
import Project from '../Components/Project';
import Sides from "../Components/Sides";

/* Assets */
import HeroImg from '../assets/images/OverviewAssets/Hero.png';
import PITImg from '../assets/images/OverviewAssets/PIT.png';
import PITLogo from '../assets/images/OverviewAssets/PIT_logo.png';

import EDUImg from '../assets/images/OverviewAssets/EDU.png';
import EDULogo from '../assets/images/OverviewAssets/EDU_logo.svg';

import LRMImg from '../assets/images/OverviewAssets/LRM.png';
import LRMLogo from '../assets/images/OverviewAssets/LRM_logo.png';

import Met from '../assets/images/OverviewAssets/Met.png';
import VUI from '../assets/images/OverviewAssets/Vui.png';
import Slanguage from '../assets/images/OverviewAssets/Slanguage.png';
import Cheese from '../assets/images/OverviewAssets/Cheese.png';


const info = {
    PIT: {
        projectName: "Pittsburgh International Airport",
        img: PITImg,
        logo: PITLogo,
        title: "Product Designer • PRODUCT MANAGER",
        tags: "Qualitative Interviews | Data Analysis | Product Design",
        desc: "See how we are helping the Pittsburgh International Airport with their Terminal Modernization Plan scheduled to go live in 2023.",
        link: '/PIT'
    },
    EDU: {
        projectName: "Edusense",
        img: EDUImg,
        logo: EDULogo,
        title: "Product Designer • UX DESIGNER",
        tags: "Data Analysis | Data Visualization | UI Development",
        desc: "Leveraging sensing technologies to motivate teachers to develop professionally by showing them insights backed by data from their own classes.",
        link: '/EDU'
    },
    LRM: {
        projectName: "LiveReach Media",
        img: LRMImg,
        logo: LRMLogo,
        title: "SENIOR SOFTWARE DEVELOPER",
        tags: "UI Development | Data Visualization | Product Design",
        desc: "Facilitating  out-of-home advertising bidding process and visualizing analyzed metrics to empower advertisers with unprecedented insights about their ad campaigns.",
        link: '/LRM'
    }
}

const hero_info = {
    img: HeroImg
};

const sides_info = [
    {
        img: Met,
        title: 'The Met Visualizations',
        desc: 'A series of visualizations displaying the distribution of the Metropolitan Museum of Art\'s collection by location, time, medium and artist. Extracted data using python scripts to ping the Met\'s API.',
        link: "https://ketakisrao.github.io/Met/"

    },
    {
        img: Slanguage,
        title: 'Slanguage',
        desc: 'Slanguage is a chrome extension that saves you from the embarassment of not knowing the meaning of a slang word or phrase in a group setting by sending a push notification privately to your phone.',
        link: "http://www.youtube.com/watch_popup?v=ZNG0qsx961s"

    },
    {
        img: VUI,
        title: 'Voice input for Data Viz',
        desc: 'Voice based inputs are not particularly intuitive but are an important way of communication for all humans. This is why I’ve made an application that uses voice commands to interact with a data visualisation.',
        link: "https://ketakisrao.github.io/VUI_DataViz/"

    },
    {
        img: Cheese,
        title: 'Say Cheese!',
        desc: 'I made this dataset of cheeses myself using ScraPy to crawl the web and extract information about them and used it to make these stunning vizs. Awarded first place in a national level data viz design challenge.',
        link: "https://www.youtube.com/watch_popup?v=JPQtHmmuZLE"

    }
];

const useStyles = makeStyles({
    root: {
        padding: '2rem 0',
    }
});

function Portfolio() {
    let sidesArray = [], i = 0;
    for(i=0; i<sides_info.length; i++){
        sidesArray.push(<Sides info={sides_info[i]}></Sides>);
    }
    const classes = useStyles();
    return (
        <div>
            <Hero info={hero_info}></Hero>
            <div className="content-container">
                <h1>Projects</h1>
                <Project info={info.PIT}></Project>
                <Project info={info.EDU}></Project>
                <Project info={info.LRM}></Project>

                <h1>Sides</h1>
                <section id="cards">
                    <Grid container spacing={2}>
                        {sidesArray}
                    </Grid>
                </section>
            </div>
        </div>
    );
}

export default Portfolio;
