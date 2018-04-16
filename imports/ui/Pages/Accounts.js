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
import AccountsUI from '../Accounts UI/AccountsUI';

export default class AccountPage extends Component {
    render () {
        return (
            <div style={{ maxWidth: 100 + "vw"}}>
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
                        <AccountsUI/>
                    </Flexbox>
                </Flexbox>
            </div>
        )
    }
}    
