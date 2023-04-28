'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      validate:{
        isAlpha:true,
        isLowercase: true,
      },
      get() {
      const rawValue = this.getDataValue('firstName');
      return rawValue ? rawValue.toUpperCase() : null;
    },
    },
    lastName: {
      type: DataTypes.STRING,
      set(value){
      this.setDataValue('lastName',value+',indian')
    }
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        throw new Error('Do not try to set the `fullName` value!');
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    
  });

  //one-to-one
  // User.associate = function (models) {
  //   User.hasOne(models.Contact,{ foreignKey: 'userId' });//f id name is not match then enter by default forigin key name {foreignKey: {name: 'myFooId'}}
  // }

  //one-to-many
  User.associate = function (models) {
    User.hasMany(models.Contact);//f id name is not match then enter by default forigin key name {foreignKey: {name: 'myFooId'}}
  }

  //many-to-many
  User.associate = function (models) {
    User.belongsToMany(models.Contact,{through : "Grant",foreignKey : "userId" });//f id name is not match then enter by default forigin key name {foreignKey: {name: 'myFooId'}}
  }

  return User;
};



 //one-to-one

