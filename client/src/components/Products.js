import Product from "./Product";

const Products = ({ products, addToCart }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} addItemToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;