import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ScrollableAnchor from 'react-scrollable-anchor';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import NavItems from './LargeViewNavList';


const styles = {
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    }
};
  
function SimpleAppBar1(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper elevation={0} style={{ backgroundColor: "rgba(0,0,0,0)", color: "#FFFFFF" }}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex} style={{ fontFamily: 'Raleway' }}>
                Music App
            </Typography>
            <NavItems />
          </Toolbar>
      </Paper>
      <Divider style={{ height: 1 + "px", backgroundColor: '#FFFFFF' }} />
    </div>
  );
}
  
  SimpleAppBar1.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleAppBar1);