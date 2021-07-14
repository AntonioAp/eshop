
import React, {useEffect,useState} from "react";
import axios from 'axios';
import './style.css';
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    async function fetchMyAPI(){
      let response = await axios('/products')
      console.log(response.data)
  
      setProducts(response.data)
      setCart(false)
    }
  
    if(cart === true){
      fetchMyAPI()
    }
    
  }, [cart])

  const handleAddToCart = (title, price, image, id) => {
    setCart([...cart, { title, price, image, id }]);
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    console.log(id);
  };
  const handleClick = () => setCart(true);
  return (
    <Router>
      <div className="App">
      <button onClick={handleClick}>PRODUCTOS</button>
        <Navbar cart={cart} />
        <Switch>
          <Route exact path="/">
            <Products products={products} addToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} removeItem={handleRemoveItem} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
/* function App() {


  const[loading1, setLoading1]= useState(false)
  
  const[products, setProducts]= useState([])


useEffect(() => {
  async function fetchMyAPI(){
    let response = await axios('/products')
    console.log(response.data)

    setProducts(response.data)
    setLoading1(false)
  }

  if(loading1 === true){
    fetchMyAPI()
  }
  
}, [loading1])


const handleClick = () => setLoading1(true);
  return (
    <div className="App">
      <button onClick={handleClick}>peticion1</button>
      
      {products.map((element) => {
        return (
          <div className="productContainer">
          <p>{element.name}</p>
          <p>{element.description}</p>
          <p> {element.price}</p>
          <p> {element.rating}</p>
          <p> {element.maker.name}</p>
          <img src={element.url} alt="foto" />
          </div>
        )
      })}
      
    </div>
  );
}

export default App;  
 */