const { extend } = require('@hapi/boom');

const { Model, DataTypes, Sequelize } = require('sequelize');

const ORDERS_PRODUCT_TABLE = 'orders/products';
const { ORDERS_TABLE } = require('./order.model');
const { PRODUCT_TABLE } = require('./products.model');

const OrderProductScheme = {
  ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDERS_TABLE,
      key: 'ID',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'ID',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  amount:{
    allowNull:false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
};

class OrderProduct extends Model {
  static associate(models) {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDERS_PRODUCT_TABLE,
      modelName: 'OrderProduct',
      timestamps: false,
    };
  }
}

module.exports = { ORDERS_PRODUCT_TABLE, OrderProductScheme, OrderProduct };
