const {extend} = require('@hapi/boom');

const {Model, DataTypes,Sequelize} = require('sequelize');

const CATEGORIES_TABLE = 'categories';

const CategoryScheme = {
  ID:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  category_name:{
    allowNull:false,
    type:DataTypes.STRING
 }
}

class Category extends Model{
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName:CATEGORIES_TABLE,
      modelName: 'Category',
      timestamps:false
    }
  }
}

module.exports = {CATEGORIES_TABLE, CategoryScheme, Category }
