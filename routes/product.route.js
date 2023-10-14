const express = require('express')
// const uploader = multer({dest: 'images/'})
const Product = require('../controllers/product.controller')
const uploader = require('../middleware/uploader')

const router = express.Router()

router.post('/file-upload',uploader.single('image'),Product.fileUpload)

router.route('/').get(Product.getProduct).post(Product.createProduct)

router.route('/:id').get(Product.getProductById).patch(Product.updateProduct)

module.exports = router
