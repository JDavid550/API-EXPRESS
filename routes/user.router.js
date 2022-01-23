const express = require('express');

const UserServices = require('./../services/user.services');

const validatorHandler = require('./../middlewares/validator.handler');
const {createUserScheme, updateUserScheme} = require('./../schemas/user.schema');


const userServices = new UserServices();

const router = express.Router();

//Getters

router.get('/', async (req,res) => {
  try {
    const users = await userServices.find();
    res.json(users);
  } catch (error) {
      res.send(error)
  }

});

router.get('/:id', async (req,res, next)=>{
  const {id} = req.params;
  try {
    if (id > 50) {
      res.status(404).json({
        message:"Not found"
      })
    }else{
      const user = await userServices.findOne(id);
      res.status(200).json({
        message:"Item found",
        user: user
      })
    }
  } catch (error) {
    next(error)
  }



})*

//Post route

router.post('/',
validatorHandler(createUserScheme, 'body') ///Revisar acá
,async (req, res, next)=>{
  try {
    const body = req.body;
    const data = body;
    const newUser = await userServices.create(data);
    res.status(201).json({
    message:"new User",
    newUser,
    })
  } catch (error) {
    next(error);
  }

});

//Patch route

router.patch('/:id',
validatorHandler(updateUserScheme,'body')
, async (req, res)=>{
  const body = req.body;
  const {id} = req.params;

  const updatedUser = await userServices.update(id, body);
  res.status(200).json({
    message:"updated",
    updatedUser
  })
});

//Delete route

router.delete('/:id', async (req, res)=>{
  const {id} = req.params;
  const deletedProduct = await userServices.delete(id);
  res.json({deletedProduct});
})

module.exports = router;
