const ProductController = require("../controllers/ProductController");

module.exports = (app) => {
  app.post("/api/newProduct", ProductController.createProduct);
  app.get("/api/products", ProductController.allProduct);
  app.get("/api/products/:id", ProductController.oneProduct);
  app.put("/api/productsupdate/:id", ProductController.updateProduct);
  app.delete("/api/productsdelete/:id", ProductController.deleteProduct);
};
