'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('language_masters',[
        {
          name: 'Tamil', 
        },
        {
          name:"English", 
        },
        {
          name: 'Hindi',    
        },
        {
          name:"Telugu",  
        },
        {
          name:"Malayalam",
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
