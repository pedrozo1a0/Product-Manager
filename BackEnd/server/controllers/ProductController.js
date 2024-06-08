const Product = require("../models/ProductModel");

module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
 return Product.create({
    title,
    price,
    description,
  })
    .then((products) => {
      return res.status(201).json(products);
    })
    .catch((error) => {
      return res.status(500).json({ message: "Algo salio mal: " + error });
    });
};

module.exports.allProduct = ( req, res) =>{
  return Product.find({})
  .then((products)=>{
    return res.status(200).json(products);
  })
  .catch((error)=>{
    return res.status(500).json({ message: "Algo salio mal: " + error });
  });
}

module.exports.oneProduct = (req, res)=>{
  const producId = req.params.id

  return Product.findById(producId)
  .then((product)=>{
    return res.status(200).json(product);
  })
  .catch((error)=>{
    return res.status(500).json({ message: "Algo salio mal: " + error });
  });

}
