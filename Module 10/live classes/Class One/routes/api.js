const express = require("express");
const { CreateProduct, ReadProduct, DeleteProduct, UpdateProduct } = require("../controllers/productController");
const router = express.Router();

router.post('/create', CreateProduct)
router.get('/read/:id', ReadProduct)
router.delete('/delete/:id', DeleteProduct)
router.post('/update/:id', UpdateProduct)

module.exports=router;