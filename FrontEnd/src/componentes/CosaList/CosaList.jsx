import { Link } from "react-router-dom";
import style from "./CosaList.module.css";
import axios from "axios";

const CosaList = ({ Cosas, removeFromList }) => {
  const deleteCosa = (id) => {
    axios
      .delete(`http://localhost:8080/api/Cosasdelete/${id}`)
      .then(() => {
        removeFromList(id);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={style.ContainerCosaList}>
      <h2>All Cosas</h2>
      {Cosas.map((Cosa, index) => (
        <div className={style.CosaList} key={index}>
          <h5>Cosa {index + 1}</h5>
          <Link to={`/Cosas/${Cosa._id}`}>{Cosa.title}</Link>

          <button onClick={() => deleteCosa(Cosa._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CosaList;
