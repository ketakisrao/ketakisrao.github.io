import React from 'react';
import './index.scss';
import {
    Link
} from "react-router-dom";
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: '2rem 0',
    }
});

function Sides(props) {
    const info = props.info;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card>
                <CardActionArea href={info.link} target="_blank">
                    <CardMedia
                        component="img"
                        alt={info.title}
                        width="100%"
                        image={info.img}
                        title={info.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {info.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {info.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <Button size="small" color="primary">
                        <img src={github} />
                    </Button>
                </CardActions> */}
            </Card>
        </Grid>
    );
}

export default Sides;