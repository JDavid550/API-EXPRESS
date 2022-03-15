'use strict';
const { ORDERS_TABLE } = require('./../models/order.model');
const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(ORDERS_TABLE, 'ordered_by',{
      allowNull:false,
      type:'INTEGER USING CAST("ordered_by" as INTEGER)'
    })

    await queryInterface.changeColumn(ORDERS_TABLE, 'product_ordered',{
      allowNull:false,
      type:'INTEGER USING CAST("product_ordered" as INTEGER)'
    })

  },

  async down (queryInterface, Sequelize) {
    //
  }
};
