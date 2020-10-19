'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    totalPrice: DataTypes.FLOAT,
    totalQuality: DataTypes.INTEGER
  }, {});
  cart.associate = function(models) {
cart.belongsTo(models.user)  };
  return cart;
};