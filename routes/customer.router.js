const express = require('express');

const CustomerServices = require('../services/customer.services');

const validatorHandler = require('../middlewares/validator.handler');
const {createCustomerScheme, updateCustomerScheme, getCustomerScheme} = require('./../schemas/customer.scheme');


const customerServices = new CustomerServices();

const router = express.Router();

//Getters

router.get('/', async (req,res) => {
  try {
    const customers = await customerServices.find();
    res.json(customers);
  } catch (error) {
      res.send(error)
  }

});

router.get('/:id',
validatorHandler(getCustomerScheme),
async (req,res, next)=>{
  const {id} = req.params;
  try {
    if (id > 50) {
      res.status(404).json({
        message:"Not found"
      })
    }else{
      const customer = await customerServices.findOne(id);
      res.status(200).json({
        message:"Item found",
        customer: customer
      })
    }
  } catch (error) {
    next(error)
  }



})*

//Post route

router.post('/',
validatorHandler(createCustomerScheme, 'body') ///Revisar acá
,async (req, res, next)=>{
  try {
    const body = req.body;
    const data = body;
    const newCustomer = await customerServices.create(data);
    res.status(201).json({
    message:"new Customer",
    newCustomer,
    })
  } catch (error) {
    next(error);
  }

});

//Patch route

router.patch('/:id',
validatorHandler(updateCustomerScheme,'body')
, async (req, res)=>{
  const body = req.body;
  const {id} = req.params;

  const updatedCustomer = await customerServices.update(id, body);
  res.status(200).json({
    message:"updated",
    updatedCustomer
  })
});

//Delete route

router.delete('/:id', async (req, res)=>{
  const {id} = req.params;
  const deletedCustomer = await customerServices.delete(id);
  res.json({deletedCustomer});
})

module.exports = router;
