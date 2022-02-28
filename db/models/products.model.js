const {Model, DataTypes} = require('sequelize');

const { CATEGORIES_TABLE } = require('./categories.model')

const PRODUCT_TABLE = 'products';

const ProductScheme = {
  ID:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
  },

  product_name:{
    allowNull:false,
    type:DataTypes.STRING,
    unique: true
  },

  product_price:{
    allowNull:false,
    type:DataTypes.STRING,
  },

  categoryID:{
    field:'category_id',
    allowNull:false,
    type: DataTypes.INTEGER,
    references:{
      model:CATEGORIES_TABLE,
      key: 'ID'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
  }
}


class Product extends Model{
  static associate(models){
    this.belongsTo(models.Category, {
      as:'category'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName:'Product',
      timestamps:false
    }
  }
}

module.exports = {PRODUCT_TABLE, ProductScheme, Product}
