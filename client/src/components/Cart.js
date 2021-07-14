import CartItem from "./CartItem";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Cart = ({ cart, removeItem }) => {
  return cart.length ? (
    // return (
    <div className="link-container">
      {cart.map((product) => (
        <CartItem key={product} product={product} removeItemFromCart={removeItem}
        />
      ))}
          
    </div>
      
    
  ) : (
    <div>
      <p>No hay artículos en tu carrito</p>
      <Link to="/">
        <Button className="allProducts"  variant="contained" color="primary" disableElevation>
        Volver a Inicio
        </Button>
      </Link>
    </div>
  );
};

export default Cart;