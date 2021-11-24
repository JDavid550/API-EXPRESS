const express = require('express');
const { fake } = require('faker');
const faker = require('faker');
const ProductServices = require('../services/products.services');

const validatorHandler = require('./../middlewares/validator.handler');
const {createProductSchema,updateProductSchema} = require('./../schemas/product.schema');


const productServices = new ProductServices();

const router = express.Router();

//Getters

router.get('/products',(req,res)=>{
  const {size} = req.query;

  const products = productServices.find(req,res,size);

  res.status(200).json(products);

});

router.get('/products/:id', (req,res, next)=>{
  const {id} = req.params;
  try {
    if (id > 50) {
      res.status(404).json({
        message:"Not found"
      })
    }else{
      const product = productServices.findOne(id);
      res.status(200).json({
        message:"Item found",
        product
      })
    }
  } catch (error) {
    next(error)
  }



})

//Post route

router.post('/products',
validatorHandler(createProductSchema, 'body') ///Revisar acá
,async (req, res, next)=>{
  try {
    const body = req.body;
    const data = body;
    const newProduct = await productServices.create(res, data);
    res.status(201).json({
    message:"new Product",
    newProduct,
    })
  } catch (error) {
    next(error);
  }

});

//Patch route

router.patch('/products/:id',
validatorHandler(updateProductSchema,'body')
, (req, res)=>{
  const body = req.body;
  const {id} = req.params;

  const updatedProduct = productServices.update(id, body);
  res.status(200).json({
    message:"updated",
    updatedProduct
  })
})

//Delete route

router.delete('/products/:id', (req, res)=>{
  const {id} = req.params;
  const deletedProduct = productServices.delete(id);
  res.json({deletedProduct});
})

module.exports = router;
