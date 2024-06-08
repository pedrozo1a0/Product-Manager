const Product = ({ product }) => {
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h5> Detail Product</h5>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default Product;
