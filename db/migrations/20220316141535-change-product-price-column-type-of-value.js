'use strict';
const { PRODUCT_TABLE } = require('./../models/products.model');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn( PRODUCT_TABLE, 'product_price',{
      allowNull:false,
      type:'INTEGER USING CAST("product_price" as INTEGER)'
    })
  }
};
