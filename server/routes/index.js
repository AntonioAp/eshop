const express = require('express');
const router = express.Router();
const productsController= require('../controllers/productsControllers');


module.exports =function(){ 
//Obtiene todos los productos de la BBDD

    router.get('/products',
        productsController.obtenerProductos
    )
//Añade un producto
    router.post('/products',
    productsController.addProducto
    ) 

//Obtiene el name de producto de la BBDD
    router.get('/products/:name',
    productsController.obtenerProducto
    )

//Obtiene el producto con todoa los detalles
    router.get('products/:product',
    productsController.obtenerDetallesProducto)

// Obtiene el ID de producto de la BBDD
    
     router.get('/products/:price',
    productsController.obtenerProducto
    )

//borra un producto
     router.delete('/products',
     productsController.deleteProduct)



//si no existe la ruta  
     router.all("*", (req, res) =>
     res.status(404).json({ message: "Esta ruta no existe" })
   );


    return router;
}