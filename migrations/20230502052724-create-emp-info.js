'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Emp_Infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empId: {
        type: Sequelize.INTEGER
      },
      currentAddress: {
        type: Sequelize.STRING
      },
      parmanentAddress: {
        type: Sequelize.STRING
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
    await queryInterface.addConstraint('Emp_Infos' , {
      references : {
        field : 'id',
        table : 'Emps'
      },
      type : 'foreign key',
      fields : ['empId']
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Emp_Infos');
  }
};