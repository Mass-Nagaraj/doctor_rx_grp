'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prescriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  prescriptions.init({
    drug_id: DataTypes.UUID,
    rx_group_id: DataTypes.UUID,
    rx_association_id: DataTypes.UUID,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'prescriptions',
  });
  return prescriptions;
};