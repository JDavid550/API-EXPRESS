const Joi = require('joi');

const product_name = Joi.string().alphanum().min(3).max(15);
const product_price = Joi.number().integer();
const categoryID = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const min_price = Joi.number().integer();
const max_price = Joi.number().integer();

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

const queryProductScheme = Joi.object({
  limit,
  offset,
  product_price,
  min_price,
  //max_price
   max_price: max_price.when('min_price',{
    is:Joi.number().integer().required(),
    then: Joi.required()
  })
})

module.exports = {createProductSchema,updateProductSchema, queryProductScheme};
