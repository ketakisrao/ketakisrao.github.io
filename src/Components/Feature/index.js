import React from 'react';
import './index.scss';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: '4rem 0',
        height: '30rem',
    }
});

function getInfo(info) {
    return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <div className="feature">
            <div>
                <h4>{info.title}</h4>
                <img src={info.img} />
                <p>{info.desc}</p>
            </div>
        </div>
    </Grid>
    );
}

function getImg(info) {
    return (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="feature-img">
                <img src={info.featureImg} />
            </div>
        </Grid>
    );
}
export default function Feature(props) {
    const info = props.info;
    const classes = useStyles();
    const feature = (props.index%2)? [getInfo(info), getImg(info)] : [getImg(info), getInfo(info)];
    return (
        <Grid container spacing={4} className={classes.root}>
            {feature}
        </Grid>
    );
}