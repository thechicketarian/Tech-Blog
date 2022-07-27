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
      autoIncrement: true,
    },
      postTitle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postContent: {
        type: DataTypes.TEXT,
        allowNull: false
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


// comments: [{ //array because it can hold multiple
//   type: DataTypes.INTEGER,
//   references: {
//       model: 'comment',
//       keys: 'id',
//   },
//   allowNull: true,
// }],