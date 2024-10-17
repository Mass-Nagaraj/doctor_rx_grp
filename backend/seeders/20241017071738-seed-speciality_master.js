'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('speciality_masters', [
      {
        name: 'Cardiology',
        is_active:true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Gynecologist",
        is_active:true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'Obstetrician',
        is_active:true,
        createdAt:new Date(),
        updatedAt:new Date()
        
      },
      {
        name:"Dermatologist",
        is_active:true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Psychiatrist",
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
