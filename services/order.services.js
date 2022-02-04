const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');
const pool = require('./../libs/pool');
const { models } = require('./../libs/sequelize');


class OrderServices {
  constructor(){
    /* this.pool= pool;
    this.pool.on('error', (err) => {
      console.error(err);
    }) */
  }


  async create(data){
    const newOrder = await models.Order.create(data);
    return newOrder;
  }


  async find(){
   /*  const query = 'SELECT * FROM public.orders'
    const rta = await this.pool.query(query);
    return rta.rows; */
    const rta = await models.Order.findAll();
    return rta;
  }


  async findOne(id){
    const order = await models.Order.findByPk(id);
    if (!order) {
      throw boom.notFound("Order not found");
    }
    return order
  }

  async update(id, changes){
    const order = await this.findOne(id);
    const rta = await order.update(changes);
    return rta;
  }


  async delete(id){
    const order = await this.findOne(id);
    await order.destroy();
    return {id};

  }

}

module.exports = OrderServices;
