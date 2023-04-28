'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Image.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });

//   Image.associate = function (models) {
//     Image.hasMany(models.Comment,{foreignKey: 'commentableId',
//     constraints: false,//beacause of one filed can contani two forigin key and because of that constrains is false.
//     scope: {//like where condition 
//       commentableType: 'image'
//     }
//   });
// };

  Image.associate = function (models) {
    Image.belongsToMany(models.Tag,{
      through: {
        model:'Tag_Taggable',
        unique: false,
        scope: {
          taggableType: 'image'
        }
      },
      foreignKey: 'taggableId',
      constraints: false
    });
};
  return Image;
};



