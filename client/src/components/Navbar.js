import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>Bienvenid@ a mi tienda</h1>
      </Link>
      <div>
        <Link to="/cart">
          <div className="cart">
            <ShoppingCart />
            <div className="badge">
              <span>{cart.length}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;