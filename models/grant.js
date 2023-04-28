'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grant.init({
    
    userId: DataTypes.INTEGER,
    contactId: DataTypes.INTEGER,
    selfGranted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Grant',
  });
  return Grant;
};