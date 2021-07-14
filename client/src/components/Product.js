


const Product = ({ product, addItemToCart }) => {
    return (
      <div>
        <div className="card">
          <div className="media">
            <img src={product.url} alt={product.name} />
          </div>
          <div className="card-content">
            <div>
              <h3>{product.name}</h3>
              <p>{product.price} €</p>
              <p>{product.description} €</p>
            </div>
            <div>
              <button className="btn"
                onClick={() =>
                  addItemToCart(
                    product.name,
                    product.price,
                    product.id
                  )
                }
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;