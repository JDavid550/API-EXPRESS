const Joi = require('joi');

const product_ordered = Joi.number().integer();
const id = Joi.number().integer();
const cost = Joi.string();
const customerId = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer();

const getOrderScheme = Joi.object({
  id: id.required()
})

const createOrderScheme = Joi.object({
  product_ordered: product_ordered.required(),
  customerId: customerId.required(),
  cost:cost.required()

})

const updateOrderScheme = Joi.object({
  product_ordered: product_ordered.required(),
  customerId : customerId.required(),
  cost:cost.required()
})

const addItemScheme = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required()
})

module.exports = {createOrderScheme, updateOrderScheme, getOrderScheme, addItemScheme};
