const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
  {
    // define columns
    id: { // created a relationship in post.js to link comments
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      AutoIncrement: true,
    },
      commentContent: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
          type: DataTypes.INTEGER,
          references: {
              model: 'user',
              keys: 'id',
          }
      },
      postId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            keys: 'id',
        }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
