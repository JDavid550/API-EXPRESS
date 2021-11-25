const express = require('express');
const routerApi = require('./routes/index');
const {logErrors, errorHandler, boomError} = require('./middlewares/error.handler')
const app = express();
const port = process.env.PORT || 3006;

//Middleware
app.use(express.json());

// Router function
routerApi(app);

app.use(logErrors);
app.use(errorHandler);


app.get('/',(req,res)=>{
  res.send('Hola Mundo');
});



/* app.get('/categories/:categoryId/products/:productsId', (req, res)=>{
  const {categoryId, productsId} = req.params;

  res.json({
    "categoryId": categoryId,
    "productId": productsId
  })
})

app.get('/users', (req, res)=>{
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      "limit":limit,
      "offset": offset
    })
  }else{
    res.send('No hay query')
  }
}) */

app.listen(port,()=>{
  console.log('Mi port' + port)
});
