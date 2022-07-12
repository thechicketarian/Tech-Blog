const { Comment } = require('../models');

const commentData = [
    {
        commentContent = "Extremely helpful omg!",
        userId = 1,
        postId = 1
    },
    {
        commentContent = "Where did you find this?",
        userId = 2,
        postId = 2
    },
    {
        commentContent = "Yasssss, first comment!",
        userId = 3,
        postId = 3
    }

];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;