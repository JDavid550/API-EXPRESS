const {extend} = require('@hapi/boom');

const {Model, DataTypes,Sequelize} = require('sequelize');

const ORDERS_TABLE = 'orders';

const OrderScheme = {
  ID:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  product_ordered:{
    allowNull:false,
    type:DataTypes.STRING
  },
  ordered_by:{
    allowNull:false,
    type:DataTypes.STRING
  },
  cost:{
    allowNull:false,
    type:DataTypes.STRING
  }
}

class Order extends Model{
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName:ORDERS_TABLE,
      modelName: 'Order',
      timestamps:false
    }
  }
}

module.exports = {ORDERS_TABLE,OrderScheme, Order  }
