const ProductController = require('../controllers/ProductController');

module.exports = (app) =>{
    app.post('/api/newProduct', ProductController.createProduct);
}