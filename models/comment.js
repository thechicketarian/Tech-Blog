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
      autoIncrement: true,
    },
      commentContent: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'user',
              keys: 'id',
          }
      },
      post_id: {
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
