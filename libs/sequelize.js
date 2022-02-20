const { Sequelize } = require('sequelize');
const { config }= require('./../config/config');
const  setupModels  =  require('./../db/models')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = 'postgres://'+USER+':'+PASSWORD+'@'+config.dbHost+':'+config.dbPort+'/'+config.dbName;

const sequelize = new Sequelize(URI, {
  dialect:'postgres', //Cambiao de base de datos, antes postgres, y puerto 5432 en .nv 3306 sql
  logging:true
});

setupModels(sequelize);

//sequelize.sync(); Esta instrucción no se recomienda ejecutar en el productivo porque sobre escribe las tablas y lo que se quiere con las migraciones es poder llevar registro en la base de datos

module.exports = sequelize;
