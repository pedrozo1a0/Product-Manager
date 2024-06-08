import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { id } = useParams();
  const [detalleProduct, setDetalleProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((response) => {
        setDetalleProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {detalleProduct ? (
        <Product product={detalleProduct} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetail;
