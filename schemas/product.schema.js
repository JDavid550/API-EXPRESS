const Joi = require('joi');

const product_name = Joi.string().alphanum().min(3).max(15);
const product_price = Joi.string();
const categoryID = Joi.number().integer();

const createProductSchema = Joi.object({
  product_name:product_name.required(),
  product_price:product_price.required(),
  categoryID: categoryID.required()
});

const updateProductSchema = Joi.object({
  product_name:product_name,
  product_price:product_price,
  categoryID:categoryID.required()
});

module.exports = {createProductSchema,updateProductSchema};
