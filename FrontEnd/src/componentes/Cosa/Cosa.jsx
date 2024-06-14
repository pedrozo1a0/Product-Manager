import styles from './Cosa.module.css'; // Importar los estilos

const Cosa = ({ Cosa }) => {
  if (!Cosa) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.ContainerCosa}>
      <h5>Detail Cosa</h5>
      <p><span>Title:</span> {Cosa.title}</p>
      <p><span>Price:</span> {Cosa.price}</p>
      <p><span>Description:</span> {Cosa.description}</p>
    </div>
  );
};

export default Cosa;

