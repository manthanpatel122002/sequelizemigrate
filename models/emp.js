'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Emp.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    jobTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Emp',
  });

    //one-to-many
    Emp.associate = function (models) {
      Emp.hasMany(models.Emp_Info);//f id name is not match then enter by default forigin key name {foreignKey: {name: 'myFooId'}}
    }
  return Emp;
};