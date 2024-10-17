'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rx_group_drugs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.drugs,{
        foreignKey:"drug_id",
        as:"drugs"
      })
      this.belongsTo(models.rx_group,{
        foreignKey:"rx_group_id",
        as:"rx_group"
      })
    }
  }
  rx_group_drugs.init({
    rx_group_id: DataTypes.UUID,
    drug_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'rx_group_drugs',
  });
  return rx_group_drugs;
};