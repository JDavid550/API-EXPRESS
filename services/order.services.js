const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');
const pool = require('./../libs/pool')


class OrderServices {
  constructor(){
    this.pool= pool;
    this.pool.on('error', (err) => {
      console.error(err);
    })
  }


  async create(res,data){


  }


  async find(){
    const query = 'SELECT * FROM public.orders'
    const rta = await this.pool.query(query);
    return rta.rows;
  }


  async findOne(id){

  }

  async update(id, changes){

  }


  async delete(id){

  }

}

module.exports = OrderServices;
