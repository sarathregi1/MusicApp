import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import MediaQuery from 'react-responsive';

const image3 = "/2018-02-27.png";



export default class Section2 extends Component {
    render () {
        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                        <div style={{ margin: 16 + "px" }}>
                                <Typography variant="headline" style={{ fontFamily: 'Raleway', color: "rgba(0,0,0,.5)", textTransform: "uppercase" }}>We Welcome the </Typography> 
                                <Typography variant="display1" style={{ fontFamily: 'Raleway', color: "#000000", textTransform: "uppercase" }}>Underappreciated Music</Typography> 
                                <Divider />
                                <br/>
                                <Typography variant="subheading" style={{ fontFamily: 'Raleway',}}>
                                    In the past years, the internet has made it easier for bands to share their music, yet fewer actually hear any of it. The top 1% of artists account for 77% of all recorded music profit, leaving smaller bands to rely on live shows and local support to continue their craft.
                                </Typography>
                                <br/>
                                <Typography variant="subheading" style={{ fontFamily: 'Raleway',    }}>
                                    The majority of great music slips under the radar of the popular. Existing in the background of hip college town coffee shops and occasional late night radio. We bring this music into the daylight, turning underappreciated into accessible.
                                </Typography>
                        </div>                
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div style={{ height: 100 + "%", width: 100 + "%" }}>
                           <img style={{ width: 100 + "%", height: 100 + "%"  }} src={image3}></img> 
                        </div>
                    </Grid>
                </Grid>
            </div>    
        )
    }
}