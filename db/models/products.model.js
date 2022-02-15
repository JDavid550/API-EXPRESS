const {Model, DataTypes} = require('sequelize');

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
  }
}


class Product extends Model{
  static associate(){
    //models
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
