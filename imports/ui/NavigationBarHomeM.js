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
import { Sticky, StickyContainer } from 'react-sticky';
import HomeHeader from './HomeHeader';
import MobileDrawer from './MobileDrawer';

const styles = {
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    }
};

function SimpleAppBarHome(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Sticky>
          {
            ({ style }) => {
                return (
                  <header style={style}>
                        <div style={{backgroundColor: 'rgba(103, 58, 183, 1)', height: 100 + "%", width: 100 + "%"  }}>
                            <Toolbar>
                                <Typography variant="title" className={classes.flex} style={{ fontFamily: 'Raleway', color: "#FFFFFF" }}>
                                    Music App
                                </Typography>
                                <MobileDrawer/>
                            </Toolbar>
                        </div>
                  </header>
                )
              }
            }
        </Sticky>
    </div>
  );
}
  
  SimpleAppBarHome.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleAppBarHome);