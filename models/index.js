const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(Post,{
    foreignKey: 'userId',
    onDelete: 'Cascade'
});

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'Cascade'
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'Cascade'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'Cascade'
})

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'Cascade'
});

Comment.belongsTo(Post, {
    foreignKey: 'postId',
    onDelete: 'Cascade'
});

module.exports = {User, Post, Comment};