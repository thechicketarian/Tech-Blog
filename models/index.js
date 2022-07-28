const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(Post,{
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id', 
    onDelete: 'Cascade'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'Cascade'
});

module.exports = {User, Post, Comment};