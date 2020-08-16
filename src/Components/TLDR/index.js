import React from 'react';
import './index.scss';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        padding: '2rem 0'
    },
    short: {
        textAlign: 'center',
        padding: '2rem 0'
    }
});

function TLDR(props) {
    const info = props.info;
    const classes = useStyles();
    return (
        <div className="tldr">
            <Grid container className={classes.root}>
                <Grid item xs={12} sm={12} lg={12} xl={12}>
                    <h3>Project Overview</h3>
                    <p>{info.overview}</p>
                </Grid>
            </Grid>
            <Grid container className={classes.short}>
                <Grid item xs={12} sm={12} lg={12} xl={12}>
                    {info.problem}
                </Grid>
            </Grid>
            <Grid container className={classes.short}>
                <Grid item xs={12} sm={4} lg={4} xl={4}>
                    <b>Role</b>
                    <p>{info.role}</p>
                </Grid>
                <Grid item xs={12} sm={4} lg={4} xl={4}>
                    <b>Tools</b>
                    <p>{info.tools}</p>
                </Grid>
                <Grid item xs={12} sm={4} lg={4} xl={4}>
                    <b>Duration</b>
                    <p>{info.duration}</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default TLDR;