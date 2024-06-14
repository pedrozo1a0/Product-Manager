const Cosa = require("../models/CosaModel");

module.exports.createCosa = (req, res) => {
  //si quiere controlar que no haya más de tres cosas con el mismo precio
  //traemos todas las cosas
  //recorremos todas las cosas buscando la que tenga el precio que viene en el req
  // si son menos de 3 la creamos o sino devolvemos error


  const { title, price, description } = req.body;
  const cosaRepetida = Cosa.find({title:title});
  if(cosaRepetida){
    return res.status(500).json({ message: "Ya existe una cosa con este titulo" });
  }
  else{
  return Cosa.create({
    title,
    price,
    description,
  })
    .then((Cosas) => {
      return res.status(201).json(Cosas);
    })
    .catch((error) => {
      return res.status(500).json({ message: "Algo salio mal: " + error });
    });
};
}

module.exports.getAllCosas = ( req, res) =>{
  return Cosa.find({})
  .then((Cosas)=>{  
    return res.status(200).json(Cosas);
  })
  .catch((error)=>{
    return res.status(500).json({ message: "Algo salio mal: " + error });
  });
}

module.exports.getOneCosa = (req, res)=>{
  const producId = req.params.id

  return Cosa.findById(producId)
  .then((Cosa)=>{
    return res.status(200).json(Cosa);
  })
  .catch((error)=>{
    return res.status(500).json({ message: "Algo salio mal: " + error });
  });

}

module.exports.updateCosa = (req, res)=>{
  const { id } = req.params;
  const { title, price, description } = req.body;
  return Cosa.findByIdAndUpdate(id, { title, price, description },  {new:true})  
  .then((Cosa)=>{
    return res.status(200).json(Cosa);
  })
  .catch((error)=>{
    return res.status(500).json({ message: "Algo salio mal: " + error });
  });
}

module.exports.deleteCosa = (req, res)=>{
  const { id } = req.params;
  return Cosa.findByIdAndDelete(id)
  .then((Cosa)=>{
    return res.status(200).json(Cosa);
  })
  .catch((error)=>{
    return res.status(500).json({ message: "Algo salio mal: " + error });
  });
}
