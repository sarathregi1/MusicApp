import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import HomePage from './Pages/Home';
import BlogPage from './Pages/Blog';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';
import AccountPage from '../ui/Pages/Accounts';

const App = ({ loading, user, client }) => {
    if (loading) return null;
    return (
        <div>
            <Router>
                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/Blog" component={BlogPage}/>
                    <Route exact path="/Account" component={AccountPage}/>
                </div>
            </Router>
        </div>
    );
};

const UserQuery = gql `
    query Users {
        user {
            _id
        }
    }
`;

export default graphql(UserQuery, {
    props: ({data}) =>({ ... data })
  })(withApollo(App));