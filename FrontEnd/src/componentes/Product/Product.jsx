import styles from './Product.module.css'; // Importar los estilos

const Product = ({ product }) => {
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.ContainerProduct}>
      <h5>Detail Product</h5>
      <p><span>Title:</span> {product.title}</p>
      <p><span>Price:</span> {product.price}</p>
      <p><span>Description:</span> {product.description}</p>
    </div>
  );
};

export default Product;

