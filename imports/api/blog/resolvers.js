import Blogs from "./Blog";


export default {
    Query: {
        blog(obj, args, { userId }) {
            console.log(userId);
            return Blogs.find({
                userId
            }).fetch();
        }
    },
    
    Mutation: {
        createBlog(obj, { name }, { userId }) {
            const blogId = Blogs.insert({
                name,
                userId
            });
            return Blogs.findOne(blogId);
        }
    }
};