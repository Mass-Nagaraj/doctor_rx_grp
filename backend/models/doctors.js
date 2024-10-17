'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.working_doctors,{
        foreignKey:"doctor_id",
        as:"working_doctors"
      })
      this.hasMany(models.speciality_doctors,{
        foreignKey:"doctor_id",
        as:"speciality_doctors"
      })
      this.hasOne(models.rx_group,{
        foreignKey:"doctor_id",
        as:"rx_group"
      })
      this.hasMany(models.doctors_languages,{
        foreignKey:"doctor_id",
        as:"doctors_languages"
      })
    }
  }
  doctors.init({
    name: DataTypes.STRING,
    mail_id: DataTypes.STRING,
    phone_no: DataTypes.STRING,
    qualification: DataTypes.STRING,
    serving_from: DataTypes.DATE,
    address: DataTypes.STRING,
    about: DataTypes.STRING,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    deleted_by: DataTypes.UUID,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'doctors',
  });
  return doctors;
};