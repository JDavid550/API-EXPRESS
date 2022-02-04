const Joi = require('joi');

const product_ordered = Joi.string();
const ordered_by = Joi.string();
const cost = Joi.string();

const createOrderScheme = Joi.object({
  product_ordered: product_ordered.required(),
  ordered_by: ordered_by.required(),
  cost: cost.required()
})

const updateOrderScheme = Joi.object({
  product_ordered: product_ordered.required(),
  ordered_by: ordered_by.required(),
  cost: cost.required()
})

module.exports = {createOrderScheme, updateOrderScheme};
