'use strict';

const { ORDERS_PRODUCT_TABLE, OrderProductScheme } = require('./../models/order-product.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDERS_PRODUCT_TABLE, OrderProductScheme);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable(ORDERS_PRODUCT_TABLE);

  }
};
