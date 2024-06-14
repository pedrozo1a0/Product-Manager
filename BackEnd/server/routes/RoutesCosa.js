const CosaController = require("../controllers/CosaController");

module.exports = (app) => {
  app.post("/api/newCosa", CosaController.createCosa);
  app.get("/api/Cosas", CosaController.getAllCosas);
  app.get("/api/Cosas/:id", CosaController.getOneCosa);
  app.put("/api/Cosasupdate/:id", CosaController.updateCosa);
  app.delete("/api/Cosasdelete/:id", CosaController.deleteCosa);
};
