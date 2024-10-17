'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class speciality_doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  speciality_doctors.init({
    doctor_id: DataTypes.UUID,
    speciality_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'speciality_doctors',
  });
  return speciality_doctors;
};