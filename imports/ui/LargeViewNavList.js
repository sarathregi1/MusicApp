import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import ButtonBase from 'material-ui/ButtonBase';
import Lightbox from "react-image-lightbox";
import { render } from "react-dom";
import AccountFunc from './AccountFunc';

const Galimages = [
    "/2018-02-23.png",
    "/2018-02-23 (1).png",
    "/2018-02-27.png"
];

export default class NavItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
          photoIndex: 0,
          isOpen: false
        };
    }
    render () {
        const { photoIndex, isOpen } = this.state;
        return (
            <div>
                <Button href='/' style={{ fontFamily: 'Raleway', color: "#FFFFFF", height: 64 }}>Home</Button>
                <Button href='/Blog' style={{ fontFamily: 'Raleway', color: "#FFFFFF", height: 64 }}>Blog</Button>
                <Button type="button" onClick={() => this.setState({ isOpen: true })} style={{ fontFamily: 'Raleway', color: "#FFFFFF", height: 64 }}>Gallery</Button>
                <Button href='/Account' style={{ fontFamily: 'Raleway', color: "#FFFFFF", height: 64 }}>Account</Button>
                <AccountFunc/>
                {isOpen && (
                    <Lightbox
                        mainSrc={Galimages[photoIndex]}
                        nextSrc={Galimages[(photoIndex + 1) % Galimages.length]}
                        prevSrc={Galimages[(photoIndex + Galimages.length - 1) % Galimages.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + Galimages.length - 1) % Galimages.length
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % Galimages.length
                        })
                        }
                    />
                )}
            </div>
        )
    }
}

