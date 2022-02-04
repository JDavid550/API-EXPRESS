
const { OrderScheme, Order } = require('./order.model');
const { User, UserSchema } = require('./user.model');
const { Category, CategoryScheme } = require('./categories.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize)); //Esta misma linea sirve para hacer el setup de los demás modelos
  Order.init(OrderScheme,Order.config(sequelize));
  Category.init(CategoryScheme, Category.config(sequelize));
}

module.exports=setupModels;
