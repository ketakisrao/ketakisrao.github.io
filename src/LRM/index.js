import React from 'react';
import './index.scss';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* Components */
import Hero from '../Components/Hero';
import TLDR from '../Components/TLDR';

/* Assets */
import HeroImg from '../assets/images/LRM/Hero.png';
import extSearch from "../assets/images/LRM/AddGMapSearch.mp4";
import imgTools from "../assets/images/LRM/ImageEditTools.mp4";
import multiDevice from "../assets/images/LRM/AddingMultipleDevices.mp4";
import analytics from "../assets/images/LRM/Analytics.png";
import heatmap from "../assets/images/LRM/Heatmap.png";
import path from "../assets/images/LRM/PathVis.png";

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
    problem: (
        <h2>
            How might we make the oboarding process for LRM’s users <span>smoother</span> and <span>more efficient</span> in order to convert initial pilots into full time clients?
        </h2>
    )

};
const useStyles = makeStyles({
    root: {
        padding: '2rem 0',
    }
});

const spacing = 5;

function LRM() {
    const classes = useStyles();
    return (
        <div>
            <Hero info={hero_info}></Hero>
            <TLDR info={summary}></TLDR>
            <div className="content-container">
                <section>
                    <h3>Solution</h3>
                    <p>Redesigning the existing interface by adding additional features such that fewer users
                    abandon the onboarding process. The design changes reduced the average onboarding time
                    by 33% and resulted in the conversion of two major clients to paid customers after
                        successful pilots.</p>
                </section>
                <section>
                    <h3>Design Decisions</h3>
                    <div className={classes.root}>
                        <h4>External Search Integration</h4>
                    </div>
                    <Grid container spacing={spacing}>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className={classes.root}>
                            <video muted autoPlay loop className="full-width">
                                <source src={extSearch} type="video/mp4" />
                            </video>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <div className="centered-item">
                                <div>
                                    <p>Integrated <b>external search</b> for google maps to automatically
                                        add a display pin on the map so that publishers don’t have to
                                        click on the map or waste time time in pin pointing the right
                                        location to do so.
                                        </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section>
                    <div className={classes.root}>
                        <h4>Image Editing Tools</h4>
                    </div>
                    <Grid container spacing={spacing}>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className={classes.root}>
                            <video muted autoPlay loop className="full-width">
                                <source src={imgTools} type="video/mp4" />
                            </video>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <div className="centered-item">
                                <div>
                                    <p>Integrated <b>image editing</b> tools such as crop, rotate
                                        &amp; zoom into the add site process so that users <b>don’t have
                                        to leave the platform</b> to do so or <b>entirely abandon</b> the process because
                                        they don’t have software to manipulate the site image.
                                        </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section>
                    <div className={classes.root}>
                        <h4>Pin Multiple Devices at once</h4>
                    </div>
                    <Grid container spacing={spacing}>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className={classes.root}>
                            <video muted autoPlay loop className="full-width">
                                <source src={multiDevice} type="video/mp4" />
                            </video>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <div className="centered-item">
                                <div>
                                    <p>A site comprised of three or more devices which needed to be pinned <b>one at a
                                        time</b> by the user. The process was modified such that a user can <b>
                                            pin multiple</b> devices in a single sitting.
                                        </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section>
                    <h3>Feature Design</h3>
                    <p>Apart from just being a platform to schedule ads campaigns, LiveReach Media also
                    provides data metrics such as number of views, gender ratio, dwell time, etc for
                        these out-of-home advertisements. Here are a few features that I’ve designed and developed.</p>
                    <div className={classes.root}>
                        <h4>REAL TIME DASHBOARD</h4>
                    </div>
                    <Grid container spacing={spacing}>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className={classes.root}>
                            <img src={analytics} className="full-width" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <div className="centered-item">
                                <div>
                                    <p>Live dashboard which updates values such as headcount and wait
                                    in real time (using websockets). This helps in monitoring
                                    the data and making adjustments in real time.
                                        </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section>
                    <div className={classes.root}>
                        <h4>HEATMAPS &amp; LIVE TRACKING</h4>
                    </div>
                    <Grid container spacing={spacing}>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className={classes.root}>
                            <img src={heatmap} className="full-width" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <div className="centered-item">
                                <div>
                                    <p>
                                        Live tracking of people in an area(site) to be able
                                        to determine trends and patterns in <b>
                                            movement,
                                            congregation points, flow, etc.
                                        </b>
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section>
                    <div className={classes.root}>
                        <h4>PATH FLOW &amp; VISUALIZATION</h4>
                    </div>
                    <Grid container spacing={spacing}>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className={classes.root}>
                            <img src={path} className="full-width" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <div className="centered-item">
                                <div>
                                    <p>Visualising the paths taken by people between sites to
                                    determine the most popular and populous paths for appropriate ad display placement.
                                        </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </section>
            </div>
        </div>
    );
}

export default LRM;
