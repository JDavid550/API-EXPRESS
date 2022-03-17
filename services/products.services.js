const { Op } = require('sequelize');
const boom = require('@hapi/boom');
const sequelize = require('./../libs/sequelize')

const { models } = require('./../libs/sequelize')

class ProductServices {
  constructor(){
    //this.products=[];
  /*   this.pool = pool;
    this.pool.on('error', (err) => {
      console.error(err);
    }) */
  }

/*   async generate(req,res,size){
    const limit  = size || 5;
    for (let i = 0; i < limit; i++) {
    this.products.push({
      id: i,
      name : faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
    return this.products;
  } */


  async create(data){
    const newProduct = await models.Product.create(data);
    return newProduct;

    /* const newProduct = {
      id: this.products.length + 1,
      ...data
    }
    this.products.push(newProduct);
    return newProduct; */

  }


  async find(query){
    const options = {
      include:['category'],
      where:{}
    }

    const {limit, offset} = query;
    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }
//This is to filter the products as of price in the query
    const { product_price } = query;
    if (product_price) {
      options.where.product_price = product_price;
    }

    const { min_price, max_price } = query;
    if (min_price && max_price) {
      options.where.product_price = {
        [Op.gte]:min_price,
        [Op.lte]: max_price,
      };
    }

    const products = await models.Product.findAll(options);
    return products;
    /* const query = 'SELECT * FROM public.products'
    const [data,metadata] = await sequelize.query(query);
    return {data, metadata}; */
     /* return this.generate(req,res,size); Así estaba antes cuando generaba registros que quedaban en caché antes de conectar a BD*/
  }


  async findOne(id){
    const productsListLength = await (await this.find()).length + 1
    if (id  > productsListLength || id < 0) {
      throw boom.notFound('Product not found')
    }else{
      const product = await models.Product.findByPk(id)
      return product
    }

    /* const name = this.products.getTota();  Ejemplo para manejar el middleware del error*/
    /* return this.products.find(item => item.id == id); */
  }

  async update(id, changes){
    const productsListLength = await (await this.find()).length + 1
    if (id  > productsListLength || id < 0) {
      throw boom.notFound('Product not found')
    }else{
      const product = await this.findOne(id)
      const updatedProduct = await product.update(changes)
      return updatedProduct
    }

    /* const product = this.products.findIndex(item => item.id == id);
    const {name,price, image} = changes;
    if (product === -1) {
      //throw new Error('Product not found');
      throw boom.notFound('Producto no encontrado'); //Uso de boom para manejo de errores
    } else {
      this.products[product] = {
        id:id,
        name,
        price,
        image
      }
    }
    return this.products[product]; */
  }


  async delete(id){
    const product = await this.findOne(id)
    await product.destroy(id)
    return {id}
    /* const product = this.products.findIndex(item => item.id == id)

    if (product === -1) {
      throw new Error('Item not found');
    }

    this.products.splice(product,1);

    return id */
  }

}

module.exports = ProductServices;
