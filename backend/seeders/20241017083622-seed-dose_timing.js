'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('dose_timing_masters', [
        {
          name: 'Immediately',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: '5 mins',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: '10 mins',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: '15 mins',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: '20 mins',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: '30 mins',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: '40 mins',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: '1 hour',
          createdAt:new Date(),
          updatedAt:new Date()   
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
