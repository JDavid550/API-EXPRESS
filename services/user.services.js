const faker = require('faker');
const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');


class UserServices {
  constructor(){

  }


  async create(res,data){


  }


  async find(){
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM public.users');
    console.log(rta.rows)
    return rta.rows;
  }


  async findOne(id){

  }

  async update(id, changes){

  }


  async delete(id){

  }

}

module.exports = UserServices;
