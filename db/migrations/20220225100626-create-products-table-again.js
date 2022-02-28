'use strict';

const {ProductScheme, PRODUCT_TABLE} = require('./../models/products.model')

//Acá pueden ir otras tablas que se quieran crear en esta migracion

module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(PRODUCT_TABLE, ProductScheme);

  },

  async down (queryInterface) {

    await queryInterface.dropTable(PRODUCT_TABLE);

  }
};

