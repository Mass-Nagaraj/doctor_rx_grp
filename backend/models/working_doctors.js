'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class working_doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.working_places_master,{
        foreignKey:"working_id",
        as:"working_places_master"
      })
      this.belongsTo(models.doctors,{
        foreignKey:"doctor_id",
        as:"doctors"
      })
    }
  }
  working_doctors.init({
    doctor_id: DataTypes.UUID,
    working_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'working_doctors',
  });
  return working_doctors;
};