'use strict';

/** @type {import('sequelize-cli').Migration} */
const faker = require('faker');
const emps_infos = [...Array(100)].map((emps_infos) => (
  {
    currentAddress:  faker.address.streetAddress(),
    parmanentAddress:  faker.address.streetAddress(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Emp_Infos',emps_infos,{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
