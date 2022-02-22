'use strict';

const {CUSTOMER_TABLE} = require('./../models/customer.model')

const {DataTypes} = require('sequelize');
//Acá pueden ir otras tablas que se quieran crear en esta migracion

module.exports = {
  async up (queryInterface) {

    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id',{
      field:'user_id',
      unique:true,
      allowNull:false,
      type: DataTypes.INTEGER
    });

  },

  async down (queryInterface) {

    //

  }

};

