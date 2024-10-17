'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rx_associations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rx_associations.init({
    name: DataTypes.STRING,
    rx_grp_id: DataTypes.UUID,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    deleted_by: DataTypes.UUID,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'rx_associations',
  });
  return rx_associations;
};