const mongoose = require("mongoose");

const CollectionsProduct = mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model('products', CollectionsProduct);
module.exports = Product;
