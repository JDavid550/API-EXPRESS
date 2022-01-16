const express = require('express');


const productsRouter = require('./products.router');
const userRouter = require('./user.router');
const ordersRouter = require('./orders.router');
const categoriesRouter = require('./categories.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', userRouter);
  router.use('/orders', ordersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
