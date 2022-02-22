'use strict';

const {CustomerSchema, CUSTOMER_TABLE} = require('./../models/customer.model')

//Acá pueden ir otras tablas que se quieran crear en esta migracion

module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);

  },

  async down (queryInterface) {

    await queryInterface.dropTable(CUSTOMER_TABLE);

  }
};

