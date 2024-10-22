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
      this.belongsTo(models.speciality_master,{
        foreignKey:"speciality_id",
        as:"speciality_master"
      })
      this.belongsTo(models.doctors,{
        foreignKey:"doctor_id",
        as:"doctors"
      })
    }
  }
  speciality_doctors.init({
    doctor_id: DataTypes.UUID,
    speciality_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    deleted_by: DataTypes.UUID,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'speciality_doctors',
  });
  return speciality_doctors;
};