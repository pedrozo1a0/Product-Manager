const express = require("express");
const cors = require("cors");
const RoutesCosa = require('./server/routes/RoutesCosa')
const app = express();

//requerimos la base de datos
require('./server/config/baseDato');



//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//le pasamos la app a nuestra ruta
RoutesCosa(app);



app.listen(8080, () => {
  console.log("Activo en el puerto 8080");
});
