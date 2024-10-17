'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctors', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      mail_id: {
        type: Sequelize.STRING
      },
      phone_no: {
        type: Sequelize.STRING
      },
      qualification: {
        type: Sequelize.STRING
      },
      working_at_id: {
        type: Sequelize.INTEGER
      },
      speciality_master_id: {
        type: Sequelize.INTEGER
      },
      serving_from: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      language_known_id: {
        type: Sequelize.INTEGER
      },
      about: {
        type: Sequelize.STRING
      },
      created_by:{
        type:Sequelize.UUID()
      },
      updated_by:{
        type:Sequelize.UUID()
      },
      deleted_by:{
        type:Sequelize.UUID()
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctors');
  }
};