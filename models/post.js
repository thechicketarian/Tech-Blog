const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      AutoIncrement: true,
    },
      postTitle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postComment: {
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

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
