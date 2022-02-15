const express = require('express');
const { fake } = require('faker');
const faker = require('faker');
const ProductServices = require('./../services/products.services');

const validatorHandler = require('./../middlewares/validator.handler');
const {createProductSchema,updateProductSchema} = require('./../schemas/product.schema');


const productServices = new ProductServices();

const router = express.Router();

//Getters

router.get('/',async (req,res)=>{
  try{
    const products = await productServices.find()
    res.json(products)
  }catch(error){
    res.json(error)
  }
 /*  const {size} = req.query;

  const products = await productServices.find();

  res.status(200).json(products); */

});

router.get('/:id', async (req,res, next)=>{
  const {id} = req.params
  try{
    const product = await productServices.findOne(id)
    res.status(200).json(product)


  }catch(error){
    next(error)
  }

/*   const {id} = req.params;
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
  } */



})

//Post route

router.post('/',
validatorHandler(createProductSchema, 'body'), ///Revisar acá
async (req, res, next)=>{
  try {
    const body = req.body;
    const data = body;
    const newProduct = await productServices.create(data);
    res.status(201).json({
    message:"new Product",
    newProduct,
    })
  } catch (error) {
    console.log(error)
    next(error);
  }

});

//Patch route

router.patch('/:id',
validatorHandler(updateProductSchema,'body')
, async (req, res)=>{
  const body = req.body;
  const {id} = req.params;

  const updatedProduct = await productServices.update(id, body);
  res.status(200).json({
    message:"updated",
    updatedProduct
  })
})

//Delete route

router.delete('/:id',async (req, res)=>{
  const {id} = req.params;
  const deletedProduct = await productServices.delete(id);
  res.json({deletedProduct});
})

module.exports = router;
