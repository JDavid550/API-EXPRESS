const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');
const pool = require('./../libs/pool')
const { models } = require('./../libs/sequelize');


class CategoriesService {
  constructor(){
    /* this.pool= pool;
    this.pool.on('error', (err) => {
      console.error(err);
    }) */
  }


  async create(data){
    const newCategory = await models.Category.create(data);
    return newCategory;
  }


  async find(){
    /* const query = 'SELECT * FROM public.categories'
    const rta = await this.pool.query(query);
    return rta.rows; */
    const categories = await models.Category.findAll();
    return categories;
  }


  async findOne(id){
    const category = await models.Category.findByPk(id);
    if (!category) {
      throw boom.notFound("Category not found");
    }
    return category;

  }

  async update(id, changes){
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }


  async delete(id){
    const category = await this.findOne(id);
    const rta = await category.destroy();
    return rta;
  }

}

module.exports = CategoriesService;
