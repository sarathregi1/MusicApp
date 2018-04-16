import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import MediaQuery from 'react-responsive';
import Lightbox from "react-image-lightbox";
import Button from 'material-ui/Button';
import { render } from "react-dom";

const images = "/2018-02-23 (1).png";





export default class Section1 extends Component {
    render () {
        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                        <div style={{ height: 100 + "%", width: 100 + "%" }}>
                            <img style={{ width: 100 + "%", height: 100 + "%"  }} src={images}></img> 
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div style={{ margin: 16 + "px" }}>
                            <Typography variant="headline" style={{ fontFamily: 'Raleway', color: "rgba(0,0,0,.5)", textTransform: "uppercase" }}>The Excitement of Discovering</Typography> 
                            <Typography variant="display1" style={{ fontFamily: 'Raleway', color: "#000000", textTransform: "uppercase" }}>an Amazing Band, On Demand</Typography> 
                            <Divider />
                            <br/>
                            <Typography variant="subheading" style={{ fontFamily: 'Raleway' }}>
                                Turn on your stereo and instantly be welcomed by a fresh playlist of hard to find music that’s been perfectly curated to match your musical tastes, regardless of how eclectic.
                            </Typography>
                        </div>                
                    </Grid>
                </Grid>
            </div>    
        )
    }
}