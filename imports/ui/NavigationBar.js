import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ScrollableAnchor from 'react-scrollable-anchor';
import Paper from 'material-ui/Paper';
import NavItems from './LargeViewNavList';

// test

const styles = {
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    }
};


function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar style={{zIndex: 10, position: "fixed", backgroundColor: "rgba(103, 58, 183, 1)" }}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex} style={{ fontFamily: 'Raleway' }}>
              Music App
            </Typography>
            <NavItems />
          </Toolbar>
      </AppBar>
    </div>
  );
}
  
  SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleAppBar);