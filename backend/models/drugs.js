'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drugs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.drug_category_master,{
        foreignKey:"drug_category_id",
        as:"drug_category_master"
      })
      this.belongsTo(models.drug_sessions_master,{
        foreignKey:"dose_session_id",
        as:"drug_sessions_master"
      })
      this.belongsTo(models.dose_timing_master,{
        foreignKey:"dose_timing_id",
        as:"dose_timing_master"
      })
      this.belongsTo(models.dose_frequency_master ,{
        foreignKey:"dose_frequency_id",
        as:"dose_frequency_master"
      })
    
      this.hasMany(models.rx_group_drugs,{
        foreignKey:"drug_id",
        as:"rx_group_drugs"
      })
    }
  }
  drugs.init({
   
    name: DataTypes.STRING,
    drug_category_id: DataTypes.INTEGER,
    dose_session_id: DataTypes.INTEGER,
    dose_timing_id: DataTypes.INTEGER,
    dose_frequency_id: DataTypes.INTEGER,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    deleted_by: DataTypes.UUID,
    deletedAt: DataTypes.DATE,
    is_active: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'drugs',
  });
  return drugs;
};