'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('working_places_masters',[
        {
          name: 'hospitals',
          is_active:true,
          createdAt:Date(),
          updatedAt:Date()
        },
        {
          name:"clinics",
          is_active:true,
          createdAt:Date(),
          updatedAt:Date()
        },
        {
          name: 'private practices',
          is_active:true,
          createdAt:Date(),
          updatedAt:Date()
          
        },
        {
          name:"other healthcare",
          is_active:true,
          createdAt:Date(),
          updatedAt:Date()
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
