'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
    }
  }
  Contact.init(
    {
      parmanentAddress: DataTypes.STRING,
      currentAddress: DataTypes.STRING,
      userId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Contact",
    },
  );
  // one-to-one
    Contact.associate = function (models) {
      Contact.belongsTo(models.User, { onDelete: "CASCADE" });
    }

    // one-to-many
    Contact.associate = function (models) {
      Contact.belongsTo(models.User, { onDelete: "CASCADE" });
    }

    //many-to-many
    // Contact.associate = function (models) {
    // //   Contact.belongsToMany(models.User,{through : models.grant ,foreignKey : 'contactId'});
    // Contact.belongsToMany(models.User,{through:"Grant",foreignKey : 'contactId'})
    // }

  return Contact;
};

