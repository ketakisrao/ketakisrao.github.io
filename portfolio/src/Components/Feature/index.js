import React from 'react';
import './index.scss';
import { Grid } from '@material-ui/core';


export default function Feature(props) {
    const info = props.info;
    return (
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className="feature">
                <h4>{info.title}</h4>
                <img src={info.img} />
                <p>{info.desc}</p>
            </div>
        </Grid>
    );
}