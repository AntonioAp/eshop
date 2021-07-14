const CartItem = ({ product, removeItemFromCart }) => {
    return (
      <div>
        <div className="card">
          <div className="media">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="card-content">
            <div>
              <h3>{product.title}</h3>
              <p>£{product.price}</p>
              <button onClick={() => removeItemFromCart(product.id)}>
                Remove item
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartItem;