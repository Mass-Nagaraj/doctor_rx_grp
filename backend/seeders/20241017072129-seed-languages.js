'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('language_masters',[
        {
          name: 'Tamil',
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name:"English", 
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name: 'Hindi',  
          createdAt:new Date(),
          updatedAt:new Date()     
        },
        {
          name:"Telugu",  
          createdAt:new Date(),
          updatedAt:new Date()   
        },
        {
          name:"Malayalam",
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
