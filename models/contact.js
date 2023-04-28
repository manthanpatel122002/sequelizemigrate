'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact.init({
    parmanentAddress: DataTypes.STRING,
    currentAddress: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    // {
    //   type:DataTypes.INTEGER,
    //   references:{
    //     model:'Users',
    //     key:'id'
    //   }
    // }
    
  }, {
    sequelize,
    modelName: 'Contact',
  });
  // one-to-one
  //   Contact.associate = function (models) {
  //     Contact.belongsTo(models.User);
  //   }

    //one-to-many
    Contact.associate = function (models) {
      Contact.belongsTo(models.User);
    }

    //many-to-many
    Contact.associate = function (models) {
    //   Contact.belongsToMany(models.User,{through : models.grant ,foreignKey : 'contactId'});
    Contact.belongsToMany(models.User,{through:"Grant",foreignKey : 'contactId'})
    }

  return Contact;
};

