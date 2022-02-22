
const { OrderScheme, Order } = require('./order.model');
const { User, UserSchema } = require('./user.model');
const { Category, CategoryScheme } = require('./categories.model');
const { Product, ProductScheme } = require('./products.model');
const { Customer, CustomerScheme } = require('./customer.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize)); //Esta misma linea sirve para hacer el setup de los demás modelos
  Order.init(OrderScheme,Order.config(sequelize));
  Category.init(CategoryScheme, Category.config(sequelize));
  Product.init(ProductScheme, Product.config(sequelize));

  Customer.init(CustomerScheme, Customer.config(sequelize));
  Customer.associate(sequelize.models);
}

module.exports=setupModels;
