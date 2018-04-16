import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Button from 'material-ui/Button';


const createBlog = gql`
    mutation createBlog($title: String!) {
        createBlog(title: $title) {
            _id
        }
    }
`;

class BlogForm extends Component {
    
    submitForm = () => {
        console.log(this.title.value);
        this.props
            .createBlog({
                variables:{
                    title: this.title.value
                }
            })
            .catch((error => {
                console.log(error);
            }));
       
    };
    
    render() {
        return (
            <div>
                <form >
                    <input type="text" ref={(input) => this.title = input} />
                    <Button variant="raised" color="primary" onClick={this.submitForm}>
                        Hello World
                    </Button>
                </form>
            </div>
        )
    }
}

export default graphql(createBlog, {
    name: "createBlog",
    options: {
        refetchQueries: [
            'Blogs'
        ]
    }
})(BlogForm);