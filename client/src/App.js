
import React, {useEffect,useState} from "react";
import {BrowserRouter as Router,Route,
  Redirect,Switch} from 'react-router-dom';
import axios from 'axios';
import './style.css';

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer"
import AppBar from "./components/AppBar"
import Button from '@material-ui/core/Button';
//import Pagination from './components/Pagination';




export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(false);


  useEffect(() => {
    async function fetchMyAPI(){
      let response = await axios.get('/products')
      console.log(response.data)
  
      setProducts(response.data)
      setCart(false)
      
    }
  
    if(cart === true){
      fetchMyAPI()
    }
    
  }, [cart])

  console.log(products)//aquí tengo todos los productos


  const handleAddToCart = (name, price, id) => {
    setCart([...products, { name, price, id }]);
  };

  const handleRemoveItem = (id) => {
    setCart(products.filter((product) => product.id !== id));
    console.log(id);
  };
  const handleClick = () => setCart(true);
  return (
    <Router>
      <div className= "AppBar">
        <AppBar></AppBar>
      </div>
      <div className="App">
      
        <Navbar cart={products} />       
        <Switch>
          <Route exact path="/">
            <Products products={products} addToCart={handleAddToCart} />
          </Route>         
          <Route exact path="/cart">
            <Cart cart={products} removeItem={handleRemoveItem} />  
          </Route>
        </Switch>
        <Button className="allProducts" onClick={handleClick} variant="contained" color="primary" disableElevation>
  Ver todos los productos
        </Button>

     
      </div>
      <div className="footer"><Footer></Footer></div>
      
    </Router>
  );
}
