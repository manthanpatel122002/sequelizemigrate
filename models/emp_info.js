'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emp_Info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Emp_Info.init({
    empId: DataTypes.INTEGER,
    currentAddress: DataTypes.STRING,
    parmanentAddress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Emp_Info',
  });

    //one-to-many
    Emp_Info.associate = function (models) {
      Emp_Info.belongsTo(models.Emp);
    }
  return Emp_Info;
};