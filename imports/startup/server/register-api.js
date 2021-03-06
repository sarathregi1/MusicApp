import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from 'lodash/merge';

import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';
import BlogSchema from '../../api/blog/Blog.graphql';
import BlogResolvers from '../../api/blog/resolvers';
// hmn

const typeDefs = [
    BlogSchema,
    UsersSchema
    
];

const resolvers = merge( 
    BlogResolvers,
    UsersResolvers
    
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });