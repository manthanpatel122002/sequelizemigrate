'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    title: DataTypes.STRING,
    commentableId: DataTypes.INTEGER,
    commentableType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  Comment.associate = function (models) {
    Comment.belongsTo(Image, {
      foreignKey: 'commentableId',
      constraints: false,
    })
  }

  Comment.associate = function (models) {
    Comment.belongsTo(models.Video, {
      foreignKey: 'commentableId',
      constraints: false,
    })
  }

  return Comment;
};



