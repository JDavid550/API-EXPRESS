const express = require('express');

const CategoriesService = require('./../services/categories.services');

const validatorHandler = require('./../middlewares/validator.handler');
const createCategoryScheme  = require('./../schemas/categories.scheme');


const categoriesServices = new CategoriesService();

const router = express.Router();

//Getters

router.get('/', async (req,res) => {
  try {
    const orders = await categoriesServices.find();
    res.json(orders);
  } catch (error) {
      res.send(error)
  }

});

router.get('/:id', async (req,res, next)=>{
  const {id} = req.params;
  try {
      const product = await categoriesServices.findOne(id);
      res.status(200).json({
        message:"Item found",
        product
      })
  } catch (error) {
    next(error)
  }
})

//Post route

router.post('/',
validatorHandler(createCategoryScheme, 'body') ///Revisar acá
,async (req, res, next)=>{
  try {
    const body = req.body;
    const data = body;
    const newCategory = await categoriesServices.create(data);
    res.status(201).json({
    message:"new Category",
    newCategory,
    })
  } catch (error) {
    next(error);
  }

});




//Delete route

router.delete('/:id', async (req, res)=>{
  const {id} = req.params;
  const deletedCategory = await categoriesServices.delete(id);
  res.json({deletedCategory});
})

module.exports = router;
