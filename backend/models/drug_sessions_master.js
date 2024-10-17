'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drug_sessions_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.drugs,{
        foreignKey:"dose_session_id",
        as:"drugs"
      })
      this.hasMany(models.rx_group,{
        foreignKey:"drug_id",
        as:"rx_group"
      })
    }
  }
  drug_sessions_master.init({
    name: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'drug_sessions_master',
  });
  return drug_sessions_master;
};