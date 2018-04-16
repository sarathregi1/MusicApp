import React, {Component} from 'react';
import { render } from 'react-dom';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import LoginRegister from './LoginRegister';
import RegisterForm from './RegisterForm';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';


class AccountFunc extends Component {
    render() {
        const {client} = this.props
        return (
            
            this.props.user._id ? (
                <React.Fragment>
                    <MediaQuery query="(min-width: 1224px)">
                        <Button style={{ fontFamily: 'Raleway', color: "#FFFFFF", height: 64 }} onClick={() => {
                        Meteor.logout();
                        client.resetStore();
                        }}>
                        Logout
                        </Button>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 1223px)">
                        <Button disableRipple color="inherit" style={{ fontFamily: 'Raleway', width: 100 + "%" }} onClick={() => {
                        Meteor.logout();
                        client.resetStore();
                        }}>
                        Logout
                        </Button>
                    </MediaQuery>
                </React.Fragment>
                ) : (
                    <LoginRegister client={client}/>
                )
        )
    }
}

const UserQuery = gql `
    query Users {
        user {
            _id
        }
    }
`;

export default graphql(UserQuery, {
    props: ({data}) =>({ ... data })
  })(withApollo(AccountFunc));