const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

// Create Product
router.post('/create-product', productController.createProduct);

// Read Product
router.get('/read-product/:id', productController.singleProduct);

// All  Product
router.get('/all-product', productController.allProduct);

// All  Product
router.delete('/delete-product/:id', productController.deleteProduct);

// All  Product
router.post('/update-product/:id', productController.updateProduct);

module.exports = router;
