import CartItem from "./CartItem";

const Cart = ({ cart, removeItem }) => {
  return cart.length ? (
    // return (
    <div>
      {cart.map((product) => (
        <CartItem
          key={product}
          product={product}
          removeItemFromCart={removeItem}
        />
      ))}
    </div>
  ) : (
    <div>There are no items in your cart</div>
  );
};

export default Cart;