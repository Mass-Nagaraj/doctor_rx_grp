'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class working_places_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.working_doctors,{
        foreignKey:"working_id",
        as:"working_doctors"
      })

    }
  }
  working_places_master.init({
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    
  }, {
    sequelize,
    modelName: 'working_places_master',
  });
  return working_places_master;
};