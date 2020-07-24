import React from 'react';
import './index.scss';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* Components */
import Hero from '../Components/Hero';
import TLDR from '../Components/TLDR';

/* Assets */
import HeroImg from '../assets/images/EDU/Hero.png';
import insGaze from '../assets/images/EDU/Gaze.png';
import stuGaze from '../assets/images/EDU/StudentGaze.png';
import movementGood from '../assets/images/EDU/GoodMovement.png';
import movementBad from '../assets/images/EDU/BadMovement.png';
import handraise from "../assets/images/EDU/HandRaiseNotif.mov";

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

const useStyles = makeStyles({
    root: {
        padding: '2rem 0',
    }
});


function EDU() {
    const classes = useStyles();
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
                <section>
                    <h3>Features</h3>
                    <div className={classes.root}>
                        <h4>Gaze Detection</h4>
                    </div>
                    <Grid container spacing={2} className={classes.root}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.root}>
                            <img src={stuGaze} className="design-dec-img" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="centered-item">
                                <div>
                                    <p><b>Student gaze</b> is where they’re looking at a given time, whether it is at the
                                        instructor or at the projector/board or at something else(distraction).
                                        This data can be indicative student engagement and is extremely valuable to the
                                        instructors.</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.root}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.root}>
                            <img src={insGaze} className="design-dec-img" />
                            <figcaption>Left side of the class receives more attention than the right side.</figcaption>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="centered-item">
                                <div>
                                    <p><b>Instructor gaze</b> is also very interesting and valuable to the instructors.
                                        A plot of the instructors gaze data will help the instructor see whether or not
                                        the their attention is equally distributed thorughout the class or not.</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section>
                    <h4>Instructor Movement</h4>
                    <p>Movement of an instructor is directly associated with the students attentions and
                    engagement in class. Teachers standing/spending time behind the podium are perceived as
                    not welcoming by the students whereas teachers that walk in and around class or come in
                        close proximity to students are perceived as waremer and friendly.</p>
                    <Grid container spacing={6} className={classes.root}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.root}>
                            <img src={movementGood} className="full-width" />
                            <p className="center-text">
                                Better movement around the whole classroom
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <img src={movementBad} className="full-width" />
                            <p className="center-text">
                                Restricted movement around the class
                            </p>
                        </Grid>
                    </Grid>

                </section>
                <section>
                    <h4>Hand Raises</h4>
                    <Grid container spacing={6} className={classes.root}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.root}>
                            <video muted autoPlay loop className="watch" >
                                <source src={handraise} type="video/mp4" />
                            </video>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <p>
                                According to the learning sciences, after a teacher asks a question,
                                they should wait at least 3 - 5 seconds after the first that student raises
                                their hand so as to allow enough time for other students to remember the
                                information and articulate a good answer. Therefore, EduSense sends a timely
                                notification after the first hand goes up, reminding the instructor to wait for 3s.
                            </p>
                        </Grid>
                    </Grid>
                </section>
                <section>
                    <h4>Student Engagement</h4>
                    <Grid container spacing={6} className={classes.root}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.root}>
                            {/* <img src={movementBad} className="full-width" /> */}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <p>
                                Encouraging students to ask more questions and making a class more interactive
                                is indicative of student engagement as well as the mark of a good teacher.
                                Through Edusense we can detect the number of different voices in a class.
                                If there is more than one loud voice detected in the classroom to 10% of the
                                class occupancy then the class, then there is good student engagement.
                            </p>
                        </Grid>
                    </Grid>
                </section>
                <section className="center-text">
                    <b>I am glad you’re interested in learning more about my research work at CMU. As a responsible researcher,
                    it is my
                    duty to protect the data of the participants & users of this system and therefore I cannot upload any
                    more
                    pictures of my actual work here. Please email me at ketakisrao@outlook.com to learn more
                about this project.</b>
                </section>
            </div>
        </div>
    );
}

export default EDU;
