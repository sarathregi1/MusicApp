import { Mongo } from 'meteor/mongo';

const Blogs = new Mongo.Collection("blogs");

export default Blogs;