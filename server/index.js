require('dotenv').config();
const express = require('express');
const bodyParser =require ('body-parser');
const mongoose =require('mongoose');
const routes = require('./routes/index.js');
const cors = require('cors');
const router = express.Router();
const uri = process.env.ATLAS_URI;
const path = require('path');
const Products = require('./models/Products');



// crear el servidor
const app = express();

// Habilitar Cors
app.use(cors());

app.use(router);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Conectar con Mongo

mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', error => console.log(error)); 
db.once('open', () => {
  console.log('Conexion a BBDD establecida');
      const products =  Products.find({}); 
      console.log(products)
      

}); 




app.use('/', routes())
app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto 4000')
})