import React, { Component } from 'react';
import { render } from 'react-dom';
import MediaQuery from 'react-responsive';
import SimpleAppBar from '../NavigationBar';
import SimpleAppBarMobile from '../NavigationBarMobile';
import Flexbox from 'flexbox-react';
import Button from 'material-ui/Button';
import EditIcon from 'material-ui-icons/ModeEdit';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import BlogContent from '../BlogContent';
import BlogPostFunc from '../BlogPostFunc';


const styles = theme => ({
});

class BlogPage extends Component {
    render () {
        const { classes } = this.props;
        return (
            <div style={{ maxWidth: 100 + "vw"}} className={classes.root}>
                <Flexbox flexDirection="column" minHeight="100vh">
                    <Flexbox element="header" height="60px">
                        <MediaQuery query="(min-width: 1224px)">
                            <SimpleAppBar />
                        </MediaQuery>
                        <MediaQuery query="(max-width: 1223px)">
                            <SimpleAppBarMobile />
                        </MediaQuery>
                    </Flexbox>
                    <Flexbox display="flex" flexWrap="wrap" justifyContent="space-around" flexGrow={1}>
                        <BlogPostFunc/>
                        <BlogContent/>
                    </Flexbox>
                </Flexbox>
                <Button variant="fab" style={{ backgroundColor: "rgba(103, 58, 183, 1)", color: "#FFFFFF", position: "fixed", right: 30, bottom: 30 }}>
                    <EditIcon/>
                    <EditIcon/>
                </Button>
            </div>
        )
    }
}    


BlogPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogPage);