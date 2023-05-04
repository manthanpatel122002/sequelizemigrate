'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parmanentAddress: {
        type: Sequelize.STRING
      },
      
      currentAddress: {
        type: Sequelize.STRING
      },
      userId:{
        allowNull:false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
    });
    await queryInterface.addConstraint('Contacts' , {
      references : {
        field : 'id',
        table : 'Users'
      },
      type : 'foreign key',
      fields : ['userId']
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contacts');
  }
};