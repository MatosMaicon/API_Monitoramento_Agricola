'use strict';
module.exports = (sequelize, DataTypes) => {
  const Platform = sequelize.define('Platform', {
    customerId: {
      field: 'customer_id',
      type: DataTypes.INTEGER
    },
    hardwareKey: {
      field: 'hardware_key',
      type: DataTypes.STRING
    },
    latitude: {
      type: DataTypes.STRING
    },
    longitude: {
      type: DataTypes.STRING
    }
  }, {});

  Platform.associate = function (models) {
    Platform.belongsTo(models.Customer, {as: 'customer'})
    Platform.hasMany(models.PlatformAcquisition, {as: 'platformAcquisition'})
  };

  return Platform;
};