'use strict';

/** @type {import('sequelize-cli').Migration} */
const faker = require('faker');
const emps = [...Array(100)].map((emps) => (
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    userName: faker.internet.userName(),
    password: faker.internet.password(8),
    jobTitle: faker.name.jobTitle(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
module.exports = {
  async up(queryInterface, Sequelize) {


    return queryInterface.bulkInsert('Emps', emps, {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
