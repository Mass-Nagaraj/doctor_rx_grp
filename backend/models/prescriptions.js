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
      this.belongsTo(models.drugs,{
        foreignKey:"drug_id",
        as:"drugs"
      })
      this.belongsTo(models.rx_group,{
        foreignKey:"rx_group_id",
        as:"rx_group"
      })
      this.belongsTo(models.rx_associations,{
        foreignKey:"rx_association_id",
        as:"rx_associations"
      })
    }
  }
  prescriptions.init({
    drug_id: DataTypes.UUID,
    rx_group_id: DataTypes.UUID,
    rx_association_id: DataTypes.UUID,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    deleted_by: DataTypes.UUID,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'prescriptions',
  });
  return prescriptions;
};