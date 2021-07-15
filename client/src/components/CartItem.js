const CartItem = ({ product, removeItemFromCart }) => {
    return (
      <div>
        <div className="card">
          <div className="media">
            <img src={product.url} alt={product.id} />
          </div>
          <div className="card-content">
            <div>
              <h3>{product.name}</h3>
              <p>{product.price}€</p>
              <button className="btn-borrar" onClick={() => removeItemFromCart(product.name)}>
                Borrar producto
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartItem;