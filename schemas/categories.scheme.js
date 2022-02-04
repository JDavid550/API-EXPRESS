const Joi = require('joi');

const category_name = Joi.string();

const createCategoryScheme = Joi.object({
  category_name : category_name.required()

})

module.exports = createCategoryScheme;
