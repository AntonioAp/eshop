
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
  const [currentPage,setCurrentPage] = useState(1);
  const [productsPerPage,setProductsPerPage] = useState(10);

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



  /*************PAGINACIÓN QUE NO SALEEEEEEEEEEEEEEEEEE */
//para obtener los productos actuales por página
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);

   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);


   

  

  
  

  

  //console.log(`**************${products}`)

  const handleAddToCart = (name, price, id) => {
    setCart([...products, { name, price, id }]);
  };

  const handleRemoveItem = (id) => {
    setCart(products.filter((item) => item.id !== id));
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
     
        
       
        

        {/* <button onClick={handleClick}>Entrar a la tienda</button> */}
        {/* NO SALE LA PAGINACIÓN */}
   {/*      <Pagination
        postsPerPage={productsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      /> */}
      </div>
      <div className="footer"><Footer></Footer></div>
      
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