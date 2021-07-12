import React, {useEffect,useState} from "react";
import axios from 'axios';
import './App.css';

function App() {
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
