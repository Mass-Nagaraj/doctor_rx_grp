'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('drug_category_masters', [
        {
          name: 'Medicine',
          is_active:true,
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: 'Syrup',
          is_active:true,
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: 'Ointment',
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
