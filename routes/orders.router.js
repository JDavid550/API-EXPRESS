const express = require('express');

const OrderServices = require('./../services/order.services');

const validatorHandler = require('./../middlewares/validator.handler');
const { createOrderScheme,updateOrderScheme } = require('./../schemas/orders.scheme');


const orderServices = new OrderServices();

const router = express.Router();

//Getters

router.get('/', async (req,res) => {
  try {
    const orders = await orderServices.find();
    res.json(orders);
  } catch (error) {
      res.send(error)
  }

});

router.get('/:id', async (req,res, next)=>{
  const {id} = req.params;
  try {
    const order = await orderServices.findOne(id);
    res.status(200).json({
      message: "Order Found",
      order:order
    })

  } catch (error) {
    next(error)
  }



})


router.post('/',
validatorHandler(createOrderScheme, 'body')
,async (req, res, next)=>{
  try {
    const body = req.body;
    const data = body;
    const newOrder = await orderServices.create(data);
    res.status(201).json({
    message:"new Order",
    newOrder,
    })
  } catch (error) {
    next(error);
  }

});

//Patch route

router.put('/:id',
validatorHandler(updateOrderScheme,'body')
, (req, res)=>{
  const body = req.body;
  const {id} = req.params;

  const updatedOrder = orderServices.update(id, body);
  res.status(200).json({
    message:"updated",
    updatedOrder:updatedOrder
  })
})

//Delete route

router.delete('/:id', (req, res)=>{
  const {id} = req.params;
  const deletedOrder = orderServices.delete(id);
  res.json({deleted:deletedOrder});
})

module.exports = router;
