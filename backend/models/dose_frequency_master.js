'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dose_frequency_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.drugs,{
        foreignKey:"dose_frequency_id",
        as:"drugs"
      })
    }
  }
  dose_frequency_master.init({
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'dose_frequency_master',
  });
  return dose_frequency_master;
};