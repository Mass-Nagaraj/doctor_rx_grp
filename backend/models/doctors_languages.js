'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctors_languages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(models.language_master,{
          foreignKey:"language_id",
          as:"language_master"
        })
        this.belongsTo(models.doctors,{
          foreignKey:"doctor_id",
          as:"doctors"
        })
    }
  }
  doctors_languages.init({
    doctor_id: DataTypes.UUID,
    language_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    deleted_by: DataTypes.UUID,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'doctors_languages',
  });
  return doctors_languages;
};