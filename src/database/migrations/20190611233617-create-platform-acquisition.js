'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('platform_acquisitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      platform_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'platforms',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      started_acquisition_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      finished_acquisition_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      sensor_number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      rain: {
        type: Sequelize.INTEGER
      },
      atmospheric_pressure: {
        type: Sequelize.INTEGER
      },
      temperature: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PlatformAcquisitions');
  }
};