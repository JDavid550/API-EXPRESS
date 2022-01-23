const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize)); //Esta misma linea sirve para hacer el setup de los demás modelos
}

module.exports=setupModels;
