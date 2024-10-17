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
      this.belongsTo(models.doctors ,{
        foreignKey:"doctor_id",
        as:"doctors"
      })
      this.hasMany(models.rx_associations,{
        foreignKey:"rx_grp_id",
        as:"rx_associations"
      })
      this.hasMany(models.prescriptions,{
        foreignKey:"rx_group_id",
        as:"prescriptions"
      })
      this.hasMany(models.rx_group_drugs,{
        foreignKey:"rx_group_id",
        as:"rx_group_drugs"
      })
    }
  }
  rx_group.init({

      name: DataTypes.STRING,
      doctor_id: DataTypes.UUID,
      created_by: DataTypes.UUID,
      updated_by: DataTypes.UUID,
      deleted_by: DataTypes.UUID,
      deletedAt: DataTypes.DATE,
      is_active: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'rx_group',
  });
  return rx_group;
};