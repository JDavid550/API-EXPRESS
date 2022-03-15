const { extend } = require('@hapi/boom');

const { Model, DataTypes, Sequelize } = require('sequelize');

const ORDERS_TABLE = 'orders';
const { CUSTOMER_TABLE } = require('./customer.model');

const OrderScheme = {
  ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  product_ordered: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  customerId: {
    field: 'ordered_by',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  cost: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
};

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, {
      as: 'customer',
    });
    this.belongsToMany(models.Product,{
      as:'items',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey:'productId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDERS_TABLE,
      modelName: 'Order',
      timestamps: false,
    };
  }
}

module.exports = { ORDERS_TABLE, OrderScheme, Order };
