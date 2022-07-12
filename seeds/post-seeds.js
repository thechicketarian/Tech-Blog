const { Post } = require('../models');

const postData = [
    {
        postTitle = "Brand New Post",
        postContent = "The start of a new post",
        userId = 1
    },
    {
        postTitle = "Another Post",
        postContent = "The start of a another new post",
        userId = 2
    },
    {
        postTitle = "Not Another Post",
        postContent = "The start of yet another new post",
        userId = 3
    }

];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;