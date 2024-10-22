'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('prantials_masters', [
        {
          name: 'Before food',
          is_active:true,
          createdAt:new Date(),
          updatedAt:new Date()  
        },
        {
          name: 'After food',
          is_active:true,
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
