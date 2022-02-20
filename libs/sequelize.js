const { Sequelize } = require('sequelize');
const { config }= require('./../config/config');
const  setupModels  =  require('./../db/models')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = 'mysql://'+USER+':'+PASSWORD+'@'+config.dbHost+':'+config.dbPort+'/'+config.dbName;

const sequelize = new Sequelize(URI, {
  dialect:'mysql', //Cambiao de base de datos, antes postgres, y puerto 5432 en .nv
  logging:true
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
