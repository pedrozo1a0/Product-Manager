import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product/Product";

const ProductDetail = ({ removeFromList }) => {
  const { id } = useParams();
  const [detalleProduct, setDetalleProduct] = useState(null);
  const navigate = useNavigate();

  const deleteProduct = () => {
    axios
      .delete(`http://localhost:8080/api/productsdelete/${id}`)
      .then(() => {
        removeFromList(id);
        navigate('/'); // Redirigir a la página principal después de la eliminación
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <div>
          <Product product={detalleProduct} />
          <Link to={`/products/${detalleProduct._id}/edit`}>
            Edit
          </Link>
          <button onClick={deleteProduct}>Delete</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetail;
