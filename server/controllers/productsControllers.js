
const Products = require('../models/Products');



exports.obtenerProductos = async (req, res, next) => {
  try {
      const products = await Products.find({});
      console.log(Products)
      res.json(products);
  } catch (error) {
      console.log(error);
      next();
  }
}


exports.obtenerProducto = async (req, res, next) => {
  try {
      const product = await productsSchema.findById(req.params.id);
      res.json(product);
  } catch (error) {
      console.log(error);
      next();
  }
}
/* //Añadir un producto
 exports.addProducto = function (req, res) {
  console.log("POST");
  console.log(`este es el producto a añadir: ${req.body}`);
  const product = new Product({
    name: req.body.name,
    url: req.body.url,
    description: req.body.description,
    price: req.body.price,
    rating: req.body.rating,
    maker:{
        name:req.body.maker.name,
        cif:req.body.maker.cif,
        adress:req.body.maker.adress
    } 
  }); 
}  */

  
/* //para salvar los productos 
  product.save(function (err, product) {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(product);
  }); */


//DELETE - Borra un producto por id
exports.deleteProduct = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    product.remove(function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).send();
    });
  });
};

 
 






