import Button from '@material-ui/core/Button';


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
              <p>{product.description} </p>
              <Button className="btn"
                onClick={() =>
                  addItemToCart(
                    product.name,
                    product.price,
                    product.id
                  )
                } variant="contained" color="primary">
               Añadir al carrito
              </Button>
              {/* <button className="btn"
                onClick={() =>
                  addItemToCart(
                    product.name,
                    product.price,
                    product.id
                  )
                }
                
              >
                Añadir al carrito
              </button> */}

            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;