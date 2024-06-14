import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./UpdateCosa.module.css"; 
import FormCosa from "../FormCosa/FormCosa";

const UpdateCosa = () => {
  const { id } = useParams();
  const [Cosa, setCosa] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/Cosas/${id}`)
      .then((response) => {
        setCosa(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const actualizarCosao = (Cosa) => {
    axios.put(`http://localhost:8080/api/Cosasupdate/${id}`, Cosa, {
          headers: {
            "Content-Type": "application/json",
          },
        })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!Cosa) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.ContainerUpdateCosa}>
      <h1>Actualizar Cosao</h1>
      <FormCosa 
        onSubmitProp={actualizarCosao}
        initialTitle={Cosa.title}
        initialPrice={Cosa.price}
        initialDescription={Cosa.description}
      />
    </div>
  );
};

export default UpdateCosa;
