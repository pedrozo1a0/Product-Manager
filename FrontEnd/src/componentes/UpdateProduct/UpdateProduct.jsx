import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./UpdateProduct.module.css"; 
import FormProduct from "../FormProduct/FormProduct";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const actualizarProducto = (product) => {
    axios.put(`http://localhost:8080/api/productsupdate/${id}`, product, {
          headers: {
            "Content-Type": "application/json",
          }
        })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.ContainerUpdateProduct}>
      <h1>Actualizar producto</h1>
      <FormProduct 
        onSubmitProp={actualizarProducto}
        initialTitle={product.title}
        initialPrice={product.price}
        initialDescription={product.description}
      />
    </div>
  );
};

export default UpdateProduct;
