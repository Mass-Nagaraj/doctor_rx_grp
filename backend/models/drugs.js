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
      // define association here
    }
  }
  drugs.init({
    
    name: DataTypes.STRING,
    drug_category_id: DataTypes.INTEGER,
    dose_id: DataTypes.INTEGER,
    dose_timing_id: DataTypes.INTEGER,
    dose_frequency_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    deleted_by: DataTypes.UUID,
    deletedAt: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'drugs',
  });
  return drugs;
};