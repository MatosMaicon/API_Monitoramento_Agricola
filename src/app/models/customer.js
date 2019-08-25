'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING
  }, {});

  Customer.associate = function (models) {
    Customer.hasMany(models.Platform, { as: 'platforms' })
  };

  return Customer;
};
