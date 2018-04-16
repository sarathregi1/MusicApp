import React, { Component } from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';
import ExpCard from './ExpCopyCard';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
import Header from './header';
import MediaQuery from 'react-responsive';
import HeaderMobile from './HeaderMobile';
import Flexbox from 'flexbox-react';
import Button from 'material-ui/Button';
import DownIcon from 'material-ui-icons/KeyboardArrowDown';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';


const image1 = "/2018-02-23.png";

const divStyle = {
    backgroundImage: 'url(' + image1 + ')',
    height: 100 + "%",
    width: 100 + "%"
  };

const row = {
    display: 'inline-block'
 };

  export default class HomeHeader extends Component {
    render () {
        return (
            <Flexbox flexDirection="column" height="100vh">
                <Flexbox flexGrow={1}>
                    <Parallax bgImage={image1} strength={500}>
                        <div style={{background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.88) 1%,rgba(0,0,0,0.18) 100%)", height: 100 + "vh", width: 100 + "vw"}}>
                            <MediaQuery query="(min-width: 1224px)">
                                <Header />
                            </MediaQuery>
                            <MediaQuery query="(max-width: 1223px)">
                                <HeaderMobile />
                            </MediaQuery>
                            <Flexbox flexDirection="column" height="90vh">
                                <Flexbox flexGrow={1}>
                                    <Grid spacing={24} container justify="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <MediaQuery query="(min-width: 611px)">
                                                <div style={{ paddingLeft: 5 + "%", paddingRight: 5 + "%" }}>
                                                    <Typography variant="display4" style={{ fontFamily: 'Raleway', color: "#FFFFFF", textAlign: "center" }}>
                                                        Rarities, B-sides, Deep Cuts, Indie…
                                                    </Typography>
                                                    <br/>
                                                    <Typography variant="headline" style={{ color: "#FFFFFF", fontFamily: 'Raleway', textAlign: "center" }}>
                                                        In an advertisement driven industry, it can be hard to find new music.
                                                    </Typography>
                                                    <br/>
                                                    <Typography variant="headline" style={{ color: "#FFFFFF", fontFamily: 'Raleway', textAlign: "center" }}>
                                                        Especially if you don’t have hours to dig through record shops looking for that hidden gem to play on your sonically sophisticated hi-fi.
                                                    </Typography>
                                                </div>
                                                
                                            </MediaQuery>
                                            <MediaQuery query="(max-width: 610px)">
                                                <div style={{ paddingLeft: 5 + "%", paddingRight: 5 + "%" }}>
                                                    <Typography variant="display3" style={{ fontFamily: 'Raleway', color: "#FFFFFF", textAlign: "center" }}>
                                                        Rarities, B-sides, Deep Cuts, Indie…
                                                    </Typography>
                                                    <br/>
                                                    <Typography variant="headline" style={{ color: "#FFFFFF", fontFamily: 'Raleway', textAlign: "center" }}>
                                                        In an advertisement driven industry, it can be hard to find new music.
                                                    </Typography>
                                                    <br/>
                                                    <Typography variant="headline" style={{ color: "#FFFFFF", fontFamily: 'Raleway', textAlign: "center" }}>
                                                        Especially if you don’t have hours to dig through record shops looking for that hidden gem to play on your sonically sophisticated hi-fi.
                                                    </Typography>
                                                </div>    
                                            </MediaQuery>
                                        </Grid>
                                    </Grid>
                                </Flexbox>
                                <Flexbox>
                                    <div style={{width: 100 + "%", textAlign: "center"}}>
                                        <Button href='#section1' variant="fab" style={{ backgroundColor: "rgba(103, 58, 183, 1)", color: "#FFFFFF" }}>
                                            <DownIcon/>
                                        </Button>
                                    </div>    
                                </Flexbox>
                            </Flexbox>
                        </div>
                    </Parallax>
                </Flexbox>
            </Flexbox>
        )
    }
}