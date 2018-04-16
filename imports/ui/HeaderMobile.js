import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ScrollableAnchor from 'react-scrollable-anchor';
// import Plx from "react-plx";
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import MobileDrawer from './MobileDrawer';

// const Header1 = [
//     {
//       start: 0,
//       end: 2,
//       properties: [
//         {
//           startValue: 2,
//           endValue: 0,
//           property: "opacity"
//         }
//       ]
//     },
//   ];


const styles = {
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    }
};
  
function SimpleAppBar1Mobile(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        {/* <Plx parallaxData={Header1}> */}
            <Paper elevation={0} style={{ backgroundColor: "rgba(0,0,0,0)", color: "#FFFFFF" }}>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex} style={{ fontFamily: 'Raleway' }}>
                        Music App
                    </Typography>
                    <MobileDrawer />
                </Toolbar>
            </Paper>
            <Divider style={{ height: 1 + "px", backgroundColor: '#FFFFFF' }} />
        {/* </Plx> */}
    </div>
  );
}
  
  SimpleAppBar1Mobile.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleAppBar1Mobile);