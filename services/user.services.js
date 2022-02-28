const faker = require('faker');
const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');
const {models}= require('./../libs/sequelize');

class UserServices {
  constructor(){

  }


  async create(data){
    const newUser = await models.User.create(data);
    return newUser;

  }

  async find(){
    const rta = await models.User.findAll({
      include:['customer'] //Esto permite que haya asociatividad con entre entidades al momento de hacer los llamados a los endpoints
    });
    return rta;
  }


/*   async find(){
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM public.users');
    console.log(rta.rows)
    return rta.rows;
  } */


  async findOne(id){
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    return user;
  }

  async update(id, changes){
    const user  = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }


  async delete(id){
    const user = await this.findOne(id);
    await user.destroy();
    return {id};
  }

}

module.exports = UserServices;
