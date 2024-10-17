'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rx_group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rx_group.init({
    name: DataTypes.STRING,
    doctor_id: DataTypes.UUID,
    drug_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    deleted_by: DataTypes.UUID,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'rx_group',
  });
  return rx_group;
};