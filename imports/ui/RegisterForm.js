import React, { Component } from 'react';
import { Accounts } from "meteor/accounts-base";
import Button from 'material-ui/Button';


export default class RegistorForm extends Component {
    registerUser = e => {
        e.preventDefault();        
        Accounts.createUser({
            email: this.email.value,
            password: this.password.value
        },
        error => {
            if(!error) {
                this.props.client.resetStore();
            }
            console.log(error);
        });
    };
    render() {
        return (
            <form onSubmit={this.registerUser}>
                <input type="email" ref={input => (this.email = input)} />
                <input type="password" ref={input => (this.password = input)} />
                <Button variant="raised" color="primary" type="submit">
                    Register User
                </Button>
            </form>
        );
    }
}