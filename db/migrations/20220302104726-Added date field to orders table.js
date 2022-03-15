'use strict';

const { ORDERS_TABLE, OrderScheme } = require('./../models/order.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(ORDERS_TABLE, 'created_at', OrderScheme.createdAt)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(ORDERS_TABLE, 'created_at')
  }
};
