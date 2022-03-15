
const { OrderScheme, Order } = require('./order.model');
const { User, UserSchema } = require('./user.model');
const { Category, CategoryScheme } = require('./categories.model');
const { Product, ProductScheme } = require('./products.model');
const { Customer, CustomerScheme } = require('./customer.model');
const {OrderProduct, OrderProductScheme} = require('./order-product.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize)); //Esta misma linea sirve para hacer el setup de los demás modelos
  Order.init(OrderScheme,Order.config(sequelize));
  Category.init(CategoryScheme, Category.config(sequelize));
  Product.init(ProductScheme, Product.config(sequelize));

  Customer.init(CustomerScheme, Customer.config(sequelize));
  OrderProduct.init(OrderProductScheme, OrderProduct.config(sequelize));


  Customer.associate(sequelize.models);

  User.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports=setupModels;
