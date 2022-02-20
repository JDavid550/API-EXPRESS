const Joi = require('joi');

//const ID = Joi.number().integer();
const email = Joi.string();
const password =  Joi.string().min(4);
const role = Joi.string().min(5);

const createUserScheme = Joi.object({
  email: email.required(),
  password: password.required(),
  role : role.required()
});

const updateUserScheme = Joi.object({
  email:email,
  password:password,
  role:role
})

module.exports = {createUserScheme,updateUserScheme};

//Revisar Scheme de base de datos de user para la fecha y ver el reto del middleware de validacion
