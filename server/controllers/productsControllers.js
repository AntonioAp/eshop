
const Products = require('../models/Products');



exports.obtenerProductos = async (req, res, next) => {
  try {
      const products = await Products.find({});
      console.log(Products)
      res.json(products);
      console.log(products)
  } catch (error) {
    res.status(500).json(error)
      console.log(error);
      next();
  }
}

exports.obtenerDetallesProducto = async (req, res, next) => {
  try {
      const product = await productsSchema.findById({
        "name": req.params.name,
        "description": req.params.description,
        "price": req.params.price,
        "rating": rq.params.rating,
        "maker": {
          "name":req.params.maker.name,
          "cif": req.params.maker.cif,
          "adress": req.params.maker.adress
        }
      });
      res.json(product);
      console.log(product)
  } catch (error) {
      console.log(error);
      next();
  }
}


exports.obtenerProducto = async (req, res, next) => {
  const id = req.params.id;
  try {
      const product = await Products(id);
      res.json(product);
  } catch (error) {
    res.status(500).json(error)
      console.log(error);
      next();
  }
}
//Añadir un producto
 exports.addProducto = function (req, res) {
  console.log("POST");
  console.log(`este es el producto a añadir: ${[req.body]}`);
  const product = {
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
  }; 
  const newProduct = new Product({product});

  newProduct.save()
    .then(() => res.json('Producto añadido!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
}

//DELETE - Borra un producto por id
exports.deleteProduct = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    product.remove(function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).send();
    });
  });
};

 
 






