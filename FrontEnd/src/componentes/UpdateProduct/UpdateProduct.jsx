import {  useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./UpdateProduct.module.css"; // Importar los estilos

const UpdateProduct = ({updateProduct, products}) => {
  const { id } = useParams();
  const productAEditar = products.find((product) => product._id === id);
  
  const [title, setTitle] = useState(productAEditar.title);
  const [price, setPrice] = useState(productAEditar.price);
  const [description, setDescription] = useState(productAEditar.description);
  const navigate = useNavigate();

  

  const actualizarProducto = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8080/api/productsupdate/${id}`,
        {
          title,
          price,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({title,price,description, id})
        }
      )
      .then((response) => {
        console.log(response);
        updateProduct(response.data);
        setTitle("");
        setPrice(0);
        setDescription("");
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.ContainerUpdateProduct}>
      <h1>Actualizar producto</h1>
      <form onSubmit={actualizarProducto}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button>Actualizar</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
