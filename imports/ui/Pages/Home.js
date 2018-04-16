import React, { Component } from 'react';
import SimpleAppBarHome from '../NavgationBarHome';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import ExpCard from '../ExpCopyCard';
import Footer from '../Footer';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
import Header from '../header';
import MediaQuery from 'react-responsive';
import HeaderMobile from '../HeaderMobile';
import SimpleAppBarHomeM from '../NavigationBarHomeM';
import HomeHeader from '../HomeHeader';
import { Sticky, StickyContainer } from 'react-sticky';


const styles = {
    fontFamily: 'Raleway',
};

configureAnchors({offset: -56, scrollDuration: 500})

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const Par1Image = "/aditya-chinchure-494048-unsplash.jpg";
const Par2Image = "/ryan-loughlin-328897-unsplash.jpg";
const image2 = "/mark-solarski-183866-unsplash.jpg";
const image3 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
 

export default class HomePage extends Component {
    render () {
        return (
            <div style={styles}>
                <HomeHeader/>
                <StickyContainer >
                    <div>
                        <MediaQuery query="(min-width: 1224px)">
                            <div>
                                <SimpleAppBarHome />
                            </div>
                        </MediaQuery>
                        <MediaQuery query="(max-width: 1223px)">
                            <SimpleAppBarHomeM />
                        </MediaQuery> 
                        <ScrollableAnchor id={'section1'}>
                            <div style={{ zIndex: 5}}>
                                <Section1 />
                            </div>
                        </ScrollableAnchor>
                        <div style={{ background: "rgba(0,0,0,0.5)", height: 100 + "%", width: 100 + "%" }}>    
                            <Parallax bgImage={Par1Image} bgStyle={{ zIndex: -100}} strength={100}>
                                <div style={{height: 200}}>
                                </div>
                            </Parallax>
                        </div>
                        <ScrollableAnchor id={'section2'}>
                            <div style={{ zIndex: 5}}>
                                <Section2 />
                            </div>
                        </ScrollableAnchor>
                        <div style={{ background: "rgba(0,0,0,0.5)", height: 100 + "%", width: 100 + "%" }}> 
                            <Parallax bgImage={Par2Image} bgStyle={{ zIndex: -100}} strength={100}>
                                <div style={{height: 200}}>
                                </div>
                            </Parallax>
                        </div>    
                        <ScrollableAnchor id={'section3'}>
                            <div style={{ zIndex: 5}}>
                                <Section3 />
                            </div>
                        </ScrollableAnchor>
                        <div style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%,rgba(0,0,0,0) 100%)", height: 100 + "%", width: 100 + "%" }}>
                            <Parallax bgImage={image2} bgStyle={{ zIndex: -100}} strength={100}>
                                <div style={{height: 200}}>
                                </div>
                            </Parallax> 
                        </div>    
                        <Footer />
                    </div>
                </StickyContainer>
            </div>
        )
    }
}