'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Grants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      contactId: {
        type: Sequelize.INTEGER
      },
      selfGranted: {
        type:Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Grants', {
      references: {
        field: 'id',
        table: 'Users'
      },
      type: 'foreign key',
      fields: ['userId']
    })

    await queryInterface.addConstraint('Grants', {
      references: {
        field: 'id',
        table: 'Contacts'
      },
      type: 'foreign key',
      fields: ['ContactId']
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Grants');
  }
};