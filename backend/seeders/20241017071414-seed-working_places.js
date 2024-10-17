'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('working_places_masters',[
        {
          name: 'hospitals',
          is_active:true,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"clinics",
          is_active:true,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'private practices',
          is_active:true,
          createdAt:new Date(),
          updatedAt:new Date()
          
        },
        {
          name:"other healthcare",
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
