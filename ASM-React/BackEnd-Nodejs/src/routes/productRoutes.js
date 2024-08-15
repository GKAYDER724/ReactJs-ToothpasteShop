const express = require('express')
const multer = require('multer')
const router = express.Router()
const productController = require('../controllers/productController')
const upload = multer({ dest: 'uploads/' })

router.post('/product', upload.single('img'), productController.createProduct)
router.get('/product', productController.getAllProduct)
router.get('/product/:id', productController.getProductById)
router.put('/product/:id', productController.updateProduct)
router.delete('/product/:id', productController.deleteProduct)

module.exports = router
