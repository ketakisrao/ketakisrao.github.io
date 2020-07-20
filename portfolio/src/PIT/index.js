import React from 'react';
import './index.scss';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


/* Components */
import Hero from '../Components/Hero';
import TLDR from '../Components/TLDR';
import Feature from '../Components/Feature';

/* Assets */
import HeroImg from '../assets/images/PIT/Hero.png';
import ttlIcon from '../assets/images/PIT/ttl.svg';
import updatesIcon from '../assets/images/PIT/updates.svg';
import walkIcon from '../assets/images/PIT/walk.svg';
import itiIcon from '../assets/images/PIT/iti.svg';
import sol from '../assets/images/PIT/mock.gif';

import chatbot from '../assets/images/PIT/chatbot.png';
import fb from '../assets/images/PIT/fb.png';
import contactless from '../assets/images/PIT/contactless.png';

import research from '../assets/images/PIT/research.svg';
import userNeeds from '../assets/images/PIT/userNeeds.png';
import userNeedsMap from '../assets/images/PIT/userNeedsMap.png';
import clientGoals from '../assets/images/PIT/clientGoals.png';
import clientGoalsMap from '../assets/images/PIT/clientGoalsMap.png';

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

const features = [
    {
        title: 'Time To Leave Home',
        img: ttlIcon,
        desc: 'Accounting for security wait time, parking, traffic, etc, to decide when to leave for the airport is a mentally taxing process. The bot does this for you as well as tracks if you’re on schedule or not.'
    },
    {
        title: 'Live Flight Updates',
        img: updatesIcon,
        desc: 'Last minute changes in gate or flight schedules can lead to missed flights or anxious users crowding at the info board. Once subscribed to a flight, the bot will send you all it’s updates.'
    },
    {
        title: 'Estimated Walk Times',
        img: walkIcon,
        desc: 'Each airport is different and it is difficult to know how much to walk and what to expect. The bot breaks down each step of your airport journey and gives you the the time it takes to get past them.'
    },
    {
        title: 'Itinerary & Past Trips',
        img: itiIcon,
        desc: 'The  bot allows you to build a custom itinerary that suits your needs and include items such as: a visit to the washroom, grabbing coffee from Dunkin or spending time at the kids area, etc.'
    }

];


const useStyles = makeStyles({
    root: {
        padding: '2rem 0',
    },
    designDecs: {
        padding: '6rem 0'
    }
});


function PIT() {
    const classes = useStyles();
    let featureArray = [];
    let i = 0;
    for (i = 0; i < features.length; i++) {
        featureArray.push(<Feature info={features[i]}></Feature>);
    }
    return (
        <div>
            <Hero info={hero_info}></Hero>
            <TLDR info={summary}></TLDR>
            <div className="content-container">
                <section>
                    <h3>Solution</h3>
                    <p>An application to provide users transparency into the airport process
                    &amp; security line wait times so that they can better plan their airport journey.</p>
                </section>
                <section>
                    <h3>Features</h3>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Grid container spacing={5}>
                                {featureArray}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="mock">
                                <img src={sol} />
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section>
                    <h3>Design Decisions</h3>
                    <Grid container spacing={2} className={classes.designDecs}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.root}>
                            <img src={chatbot} className="design-dec-img" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="centered-item">
                                <div>
                                    <b>Why a chatbot?</b>
                                    <p>
                                        A chat bot has a lower barrier to entry than a full fledged app in the sense:
                                    </p>
                                    <ol>
                                        <li>No need to <b>download</b> an additional app.</li>
                                        <li>Natural language based and doesn't require <b>prior learning</b>.</li>
                                        <li>Could easily be downscaled to <b>SMS/MMS</b> and therefore might not necessarily require a smartphone.</li>
                                    </ol>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.designDecs}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.root}>
                            <img src={fb} className="design-dec-img" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="centered-item">
                                <div>
                                    <b>Why Facebook messenger?</b>
                                    <ol>
                                        <li>PIT already has <b>marketing presence</b> on Facebook</li>
                                        <li>Is <b>platform independent</b> (iOS or Android or others)</li>
                                        <li>Reaches out to a <b>larger &amp; diverse</b> audience</li>
                                    </ol>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.designDecs}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.root}>
                            <img src={contactless} className="design-dec-img" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="centered-item">
                                <div>
                                    <b>Why Contactless Technology?</b>
                                    <ol>
                                        <li>Because of the pandemic we needed to make use of a technology that needed to be contactless so as to <b>restrict the spread of the virus</b>.</li>
                                        <li>Contactless technology can also help you remain <b>handsfree</b> especially when you’re traveling with excess luggage or kids.</li>
                                    </ol>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section>
                    <h3>Research Process</h3>
                    <p>We modified the double diamond design process slightly to follow the research through design approach. In this approach we build artifacts/prototypes
                        and gather qualitative data while we observe the user interact with it. Here is a short video showcasing the highlights of our end-to-end UX Research process.</p>
                    <Grid container spacing={5} className={classes.root}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.root}>
                            <div className="centered-item">
                                <img src={research} className="full-wdith" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.root}>
                            <div className="centered-item">
                                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/okGAJCU3UB4"
                                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                                </iframe>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section>
                    <h3>User Needs uncovered from Research</h3>
                    <p>We gathered mounds of qualitative user data from all of the research and upon synthesis, found that these were the top three needs of an average air traveler.</p>
                    <img className="full-width" src={userNeeds}/>

                    
                    <h3>How the Bot meets user needs</h3>
                    <div className="centered-item">
                        <img src={clientGoalsMap} className="design-dec-img" />
                    </div>
                </section>
                <section>
                    <h3>Goals set by the client</h3>
                    <p>We gathered mounds of qualitative user data from all of the research and upon synthesis, found that these were the top three needs of an average air traveler.</p>
                    <img className="full-width" src={clientGoals} />


                    <h3>How the solution Achieves client goals</h3>
                    <div className="centered-item">
                        <img src={clientGoalsMap} className="design-dec-img" />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PIT;
