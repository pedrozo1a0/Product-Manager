
import "./App.css";
import CosaList from "../CosaList/CosaList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import CosaDetail from "../CosaDetail/CosaDetail";
import FormCosa from "../FormCosa/FormCosa";
import UpdateCosa from "../UpdateCosa/UpdateCosa";

const App = () => {
  const [Cosas, setCosas] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(true);
  const rutaActual = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/Cosas")
      .then((response) => {
        setCosas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const enLaRutaDetalle = rutaActual.pathname.startsWith("/Cosas/") || rutaActual.pathname.startsWith("/Cosas/:id/edit");
    setMostrarForm(!enLaRutaDetalle);
  }, [rutaActual.pathname]);

  const addCosa = (newCosa) => {
    axios.post('http://localhost:8080/api/newCosa', newCosa,{
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then((response) => {
     setCosas([...Cosas, response.data]);
  })
  .catch((error) => {
      alert(error.response.data.message);
  });
  };

  const removeFromList = (CosaId) => {
    const indiceCosa = Cosas.findIndex((Cosa) => Cosa._id === CosaId);
    const CosaActualizado = [...Cosas];
    CosaActualizado.splice(indiceCosa, 1);
    setCosas(CosaActualizado);
  };

  
  return (
    <div className="App">
      {mostrarForm ? (
        < >
          <div className="containerForm">
          <FormCosa onSubmitProp={addCosa}
                      initialTitle=""
                      initialPrice= ""
                      initialDescription=""/>
          </div>
          <hr />
            <Routes>
              <Route path="/" element={<CosaList Cosas={Cosas} removeFromList={removeFromList} />} />
            </Routes>
    
        </>
      ) : (
        <Routes>
          <Route path="/Cosas/:id" element={<CosaDetail removeFromList={removeFromList} />} />
          <Route path="/Cosas/:id/edit" element={<UpdateCosa Cosas={Cosas} />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
