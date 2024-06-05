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
