import React from 'react';
import './index.scss';
import { Grid, Button } from "@material-ui/core";

/* Assets */
import aboutImg from "../assets/images/OverviewAssets/Ketaki-about.png"

function About() {
    return (
        <div className="content-container about">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    {/* <div className=" centered-item"> */}
                        <img src={aboutImg} />
                    {/* </div> */}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className=" centered-item">
                        <div>
                            <h2>Hi there!</h2>
                            <p>
                                I am <b>Ketaki Rao</b> and I am a problem solver!<br></br>
                                <br></br>
                                As a UX Engineer and I am extremely passionate about using the latest front-end technology to
                                build usable &amp; useful interfaces. I have almost 5 years of experience working with
                                designers, developers and the business and know how to effectively communicate with all three.
                                Being at such an interesting intersection in the Tech industry has taught me how to maintain the
                                perfect balance between user’s needs, business requirements and current constraints imposed by
                                today's technology.
                        </p>
                            <p>Currently at <b>School of Computer Science, Carnegie Mellon.</b> Open to full-time opportunities from
                                <b>Aug, 2020.</b>
                            </p>

                            <Button variant="contained" target="_blank"
                                href="mailto:ketakisrao@outlook.com?subject=Let's connect">
                                Contact
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
