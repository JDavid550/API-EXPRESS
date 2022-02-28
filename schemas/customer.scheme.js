const Joi = require('joi');

//const ID = Joi.number().integer();
const name = Joi.string();
const lastName =  Joi.string().min(4);
const phone = Joi.string().min(5);
const id = Joi.number().integer();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password =  Joi.string().min(4);

const getCustomerScheme = Joi.object({
  id:id.required()
})

const createCustomerScheme = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone : phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })

});

const updateCustomerScheme = Joi.object({
  name,
  lastName,
  phone,
  userId
})

module.exports = {createCustomerScheme,updateCustomerScheme,getCustomerScheme};
