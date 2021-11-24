const faker = require('faker');
const boom = require('@hapi/boom');

class ProductServices {
  constructor(){
    this.products=[];
  }

  generate(req,res,size){
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
  }


  create(res,data){
    const newProduct = {
      id: this.products.length + 1,
      ...data
    }
    this.products.push(newProduct);
    return newProduct;

  }


  find(req,res,size){
    return this.generate(req,res,size);
  }


  findOne(id){
    /* const name = this.products.getTota();  Ejemplo para manejar el middleware del error*/
    return this.products.find(item => item.id == id);
  }

  update(id, changes){
    const product = this.products.findIndex(item => item.id == id);
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

    return this.products[product];
  }


  delete(id){
    const product = this.products.findIndex(item => item.id == id)

    if (product === -1) {
      throw new Error('Item not found');
    }

    this.products.splice(product,1);

    return id
  }

}

module.exports = ProductServices;
