import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import MediaQuery from 'react-responsive';

const image3 = "/2018-02-23.png";



export default class Section3 extends Component {
    render () {
        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                        <div style={{ height: 100 + "%", width: 100 + "%" }}>
                           <img style={{ width: 100 + "%", height: 100 + "%"  }} src={image3}></img> 
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div style={{ margin: 16 + "px" }}>
                            <Typography variant="display1" style={{ fontFamily: 'Raleway', color: "#000000", textTransform: "uppercase" }}>Enjoy and Support Exceptional Music</Typography> 
                            <Divider />
                                <br/>
                            <Typography variant="subheading" style={{ fontFamily: 'Raleway',}}>
                                We love great music, and owe our support to the creators so they can keep doing what they do best. We provide free and effortless distribution for artists, giving them passive income based on your support of their music.
                            </Typography>
                        </div>                
                    </Grid>
                </Grid>
            </div>    
        )
    }
}