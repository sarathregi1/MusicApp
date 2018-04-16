import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';


export default class Footer extends Component {
    render () {
        return (
            <div>
                <Paper style={{backgroundColor: "#000000", height: 200 + "px",}} >
                    <div style={{  padding: 16 + "px"  }}>
                        <Typography variant="headline" style={{ fontFamily: 'Raleway', color: "#FFFFFF" }}>
                            The Footer
                        </Typography>
                        <Divider style={{ backgroundColor: "#FFFFFF" }}/>
                    </div>
                </Paper>
                
            </div>
        )
    }
}
