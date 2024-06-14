const mongoose = require("mongoose");

const CosaSchema = mongoose.Schema({
  title: {
    type: String,
    required:[true, "El nombre es demandado"],
    unique:[true, "El nombre debe ser único"]
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const CosaModel = mongoose.model('Cosas', CosaSchema);
module.exports = CosaModel;
