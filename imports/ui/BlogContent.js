import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

// const styles = {
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 200,
//   },
// };

const SimpleMediaCard = ({loading, blog}) => {
  if (loading) return null;
  return (
    <div>
      {blog.map(blog => (
        <div style={{padding: 20}} key={blog._id}>
            <Card>
              <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {blog._id}
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
        </div>
      ))}
    </div>
  );
}

// function SimpleMediaCard(props) {
//   blog
//   const { classes } = props;
//   return (
    
    
//   );
// }

const blogsQuery = gql `
  query Blog {
    blog {
      _id
    }
  }  
`;


// SimpleMediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// const SimpleMediaCardStyled = withStyles(styles)(SimpleMediaCard);
 
export default graphql(blogsQuery, {
   props: ({data}) =>({ ... data })
 })(withApollo(SimpleMediaCard));