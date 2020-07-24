import React from 'react';
import './index.scss';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
    Link
} from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
    root: {
        padding: 0,
        backgroundColor: '#f8f8f8'
    },
    gridRight: {
        display: 'flex',
        alignItems: 'center'
    }
});
function Project(props) {
    var info = props.info;
    const classes = useStyles();
    return (
        <div className="project-container">
            <CardActionArea>
                <Link to={info.link}>
                    <Grid spacing={0} container className={classes.root}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <img src={info.img} className="project-img" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.gridRight}>
                            <div className="project-info">
                                <div>
                                    <img src={info.logo} className="project-logo" />
                                    <p className="title">
                                        {info.title}
                                    </p>
                                    <p className="tags">
                                        {info.tags}
                                    </p>
                                    <p className="description">
                                        {info.desc}
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Link>
            </CardActionArea>
            </div>
    );
}

export default Project;
