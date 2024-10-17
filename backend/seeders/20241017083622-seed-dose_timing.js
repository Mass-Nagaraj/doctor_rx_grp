'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('People', [
        {
          name: 'Immediately',
        },
        {
          name: '5 mins',
        },
        {
          name: '10 mins',
        },
        {
          name: '15 mins',
        },
        {
          name: '20 mins',
        },
        {
          name: '30 mins',
        },
        {
          name: '40 mins',
        },
        {
          name: '1 hour',
        },
      ], {});
    
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
