import "./App.css";
import ProductList from "../ProductList/ProductList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import FormProduct from "../FormProduct/FormProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

const App = () => {
  const [products, setProducts] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(true);
  const rutaActual = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const enLaRutaDetalle = rutaActual.pathname.startsWith("/products/") || rutaActual.pathname.startsWith("/products/:id/edit");
    setMostrarForm(!enLaRutaDetalle);
  }, [rutaActual.pathname]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const removeFromList = (productId) => {
    setProducts(products.filter(product => product._id !== productId));
  };

  return (
    <div className="App">
      {mostrarForm ? (
        <>
          <FormProduct addProduct={addProduct} />
          <hr />
          <Routes>
            <Route path="/" element={<ProductList products={products} removeFromList={removeFromList} />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/products/:id" element={<ProductDetail removeFromList={removeFromList} />} />
          <Route path="/products/:id/edit" element={<UpdateProduct />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
