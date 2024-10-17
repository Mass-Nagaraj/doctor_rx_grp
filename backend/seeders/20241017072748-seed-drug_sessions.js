'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('drug_sessions_masters', [
        {
        name: 'Morning',
        createdAt:new Date(),
        updatedAt:new Date()   
        
       },
        {
        name: 'Afternoon',
        createdAt:new Date(),
        updatedAt:new Date()   
        
       },
        {
        name:'Night',
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
