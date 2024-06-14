import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cosa from "../Cosa/Cosa";
import styles from "./CosaDetail.module.css";

const CosaDetail = ({ removeFromList }) => {
  const { id } = useParams();
  const [detalleCosa, setDetalleCosa] = useState(null);
  const navigate = useNavigate();

  const deleteCosa = () => {
    axios
      .delete(`http://localhost:8080/api/Cosasdelete/${id}`)
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
      .get(`http://localhost:8080/api/Cosas/${id}`)
      .then((response) => {
        setDetalleCosa(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {detalleCosa ? (
        <div className={styles.ContainerCosaDetail}>
          <Cosa Cosa={detalleCosa} />
          <div className={styles.actions}>
            <Link to={`/Cosas/${detalleCosa._id}/edit`}>Edit</Link>
            <button onClick={deleteCosa}>Delete</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CosaDetail;
