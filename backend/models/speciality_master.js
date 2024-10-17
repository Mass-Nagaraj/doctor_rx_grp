'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class speciality_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  speciality_master.init({
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    
  }, {
    sequelize,
    modelName: 'speciality_master',
  });
  return speciality_master;
};