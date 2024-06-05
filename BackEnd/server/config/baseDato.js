const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/productmanager_db')
.then(()=>{
    console.log("Conexión exítosa a la base de datos");
})
.catch((error)=>{
    console.log("Error al intentar conectar la base de datos");
})