// ProductList.js
import { Link } from "react-router-dom";
import style from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>All Products</h2>
      {products.map((product, index) => (
        <div className={style.ProductList} key={index}>
          <h5>Product {index + 1}</h5>
          <Link to={`/products/${product._id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
