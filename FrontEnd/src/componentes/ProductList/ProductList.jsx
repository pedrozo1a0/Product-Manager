import { Link } from "react-router-dom";
import style from "./ProductList.module.css";
import axios from "axios";

const ProductList = ({ products, removeFromList }) => {
  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8080/api/productsdelete/${id}`)
      .then(() => {
        removeFromList(id);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={style.ContainerProductList}>
      <h2>All Products</h2>
      {products.map((product, index) => (
        <div className={style.ProductList} key={index}>
          <h5>Product {index + 1}</h5>
          <Link to={`/products/${product._id}`}>{product.title}</Link>

          <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
