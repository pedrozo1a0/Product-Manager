import "./App.css";
import ProductList from "../ProductList/ProductList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import FormProduct from "../FormProduct/FormProduct";

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

    /*
    startsWith("/products/") es un método de cadena que devuelve true si la cadena comienza con la subcadena especificada, 
    en este caso, "/products/". Entonces, enLaRutaDetalle será true si la ruta actual comienza con "/products/", 
    lo que significa que estamos en la página de detalles de un producto.
    */
    const enLaRutaDetalle = rutaActual.pathname.startsWith("/products/");
    setMostrarForm(!enLaRutaDetalle);
  }, [rutaActual.pathname]); // Ejecutar efecto cuando cambie la ubicación

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="App">
      {mostrarForm ? (
        <>
          <FormProduct addProduct={addProduct} />
          <hr />
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
