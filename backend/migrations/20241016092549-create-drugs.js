'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('drugs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      drug_category_id: {
        type: Sequelize.INTEGER
      },
      dose_id: {
        type: Sequelize.INTEGER
      },
      dose_timing_id: {
        type: Sequelize.INTEGER
      },
      dose_frequency_id: {
        type: Sequelize.INTEGER
      },
      is_active: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('drugs');
  }
};