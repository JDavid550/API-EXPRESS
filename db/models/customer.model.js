const { USER_TABLE } =  require('./user.model')


const {Model, DataTypes, Sequelize} = require('sequelize');

const CUSTOMER_TABLE = 'customers';

const CustomerScheme = {
  id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull:false,
    type:DataTypes.STRING,
  },
  lastName:{
    allowNull:false,
    type:DataTypes.STRING,
    field:"last_name",

  },
  phone:{
    allowNull:true,
    type: DataTypes.STRING,
  },
  createdAt:{
    field:'created_at',
    allowNull:false,
    type:DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  userId:{
    field:'user_id',
    unique:true,
    allowNull:false,
    type: DataTypes.INTEGER,
    references:{
      model:USER_TABLE,
      key: 'id'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
  }
}


class Customer extends Model{
  static associate(models){
    this.belongsTo(models.User, {as:'user'});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName:CUSTOMER_TABLE,
      modelName:'Customer',
      timestamps:false
    }
  }
}


module.exports = {CUSTOMER_TABLE,CustomerScheme, Customer}
