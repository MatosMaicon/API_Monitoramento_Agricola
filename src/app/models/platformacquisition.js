'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlatformAcquisition = sequelize.define('PlatformAcquisition', {
    platformId: { 
      field: 'platform_id',
      type: DataTypes.INTEGER 
    },
    startedAcquisitionTime: {
      field: 'started_acquisition_time',
      type: DataTypes.DATE
    },
    finishedAcquisitionTime: {
      field: 'finished_acquisition_time',
      type: DataTypes.DATE
    },
    sensorNumber: {
      field: 'sensor_number',
      type: DataTypes.INTEGER
    },
    rain: {
      type: DataTypes.INTEGER
    },
    atmosphericPressure: {
      field: 'atmospheric_pressure',
      type: DataTypes.INTEGER
    },
    temperature: {
      type: DataTypes.INTEGER
    }
  }, {});

  PlatformAcquisition.associate = function (models) {
    PlatformAcquisition.belongsTo(models.Platform, { as: 'platform' })
  };

  return PlatformAcquisition;
};
