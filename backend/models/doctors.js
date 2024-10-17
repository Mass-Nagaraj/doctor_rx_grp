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
      // define association here
    }
  }
  doctors.init({
    name: DataTypes.STRING,
    mail_id: DataTypes.STRING,
    phone_no: DataTypes.STRING,
    qualification: DataTypes.STRING,
    working_at_id: DataTypes.INTEGER,
    speciality_master_id: DataTypes.INTEGER,
    serving_from: DataTypes.STRING,
    address: DataTypes.STRING,
    language_known_id: DataTypes.INTEGER,
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