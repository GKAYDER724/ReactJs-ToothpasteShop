const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD routes for products
router.post('/product', productController.createProduct);
router.get('/product', productController.getAllProduct);
router.get('/product/:id', productController.getProductById);
router.put('/product/:id', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;
