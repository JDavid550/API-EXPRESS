'use strict';

const {UserSchema, USER_TABLE} = require('./../models/user.model')

//Acá pueden ir otras tablas que se quieran crear en esta migracion

module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(USER_TABLE, UserSchema);

  },

  async down (queryInterface) {

    await queryInterface.dropTable(USER_TABLE);

  }
};
