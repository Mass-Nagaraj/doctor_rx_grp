'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dose_timing_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.drugs,{
        foreignKey:"dose_timing_id",
        as:"drugs"
      })
    }
  }
  dose_timing_master.init({
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    deleted_by: DataTypes.UUID,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'dose_timing_master',
  });
  return dose_timing_master;
};