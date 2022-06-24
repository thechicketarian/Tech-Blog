const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      AutoIncrement: true,
    },
      commentContent: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateCreated: {
        type: DataTypes.dateCreated,
        allowNull: false,
        defaultValue: DataTyes.NOW,
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
