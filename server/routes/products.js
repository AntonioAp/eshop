const router = require('express').Router();
const products = require('../controllers/products');

//http://localhost:5000/api/products?id=2  --> product id=2
router.get('/products', products.getProducts)
router.post('/products', products.addProduct)

router.get('/comida', products.getFood)

router.all("*", (req, res) =>
  res
    .status(404)
    .json({ message: "Esta página no existe", app: "Express-Routes" })
);


module.exports = router;