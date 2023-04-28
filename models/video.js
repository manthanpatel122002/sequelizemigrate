'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Video.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Video',
  });

//   Video.associate = function (models) {
//     Video.hasMany(models.Comment,{foreignKey: 'commentableId',
//     constraints: false,
//     scope: {
//       commentableType: 'Video'
//     }
//   });
// };


Video.associate = function (models) {
  Video.belongsToMany(models.Tag, {
    through: {
      model: 'Tag_Taggable',
      unique: false,
      scope: {
        taggableType: 'video'
      }
    },
    foreignKey: 'taggableId',
    constraints: false
  });;
};

  return Video;
};



