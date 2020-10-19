'use strict';
module.exports = (sequelize, DataTypes) => {
  const productCart = sequelize.define('productCart', {
    totalPrice: DataTypes.FLOAT,
    totalQty: DataTypes.FLOAT
  }, {});
  productCart.associate = function(models) {
productCart.belongsTo(models.cart, {as:'cart'});
productCart.belongsTo(models.product,{as:'product'})  };
  return productCart;
};