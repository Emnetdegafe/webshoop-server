'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    address: DataTypes.STRING,
    paymentId: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};