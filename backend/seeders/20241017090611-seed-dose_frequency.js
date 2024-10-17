'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('dose_frequency_masters', [
        {
          name: 'Daily',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: 'Alternate day',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: 'Weekly ',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: 'Weekly twice',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: 'Weekly thrice ',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: 'Monthly',
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
     * await queryInterface.bulkDelete('dose_frequency_masters', null, {});
     */
  }
};
