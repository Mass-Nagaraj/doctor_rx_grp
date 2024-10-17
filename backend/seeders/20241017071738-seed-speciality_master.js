'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('speciality_masters', [
      {
        name: 'Cardiology',
        is_active:true
      },
      {
        name:"Gynecologist",
        is_active:true
      },
      {
        name: 'Obstetrician',
        is_active:true
        
      },
      {
        name:"Dermatologist",
        is_active:true
      },
      {
        name:"Psychiatrist",
        is_active:true
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
