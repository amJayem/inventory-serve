const express = require('express')
// const uploader = multer({dest: 'images/'})
const ProductController = require('../controllers/product.controller')
const uploader = require('../middleware/uploader')
const authorization = require('../middleware/authorization')
const verifyToken = require('../middleware/verifyToken')

const router = express.Router()

router.post(
  '/file-upload',
  uploader.single('image'),
  ProductController.fileUpload
)

router
  .route('/')
  .get(ProductController.getProduct)
  .post(verifyToken, authorization('admin'), ProductController.createProduct)

router
  .route('/:id')
  .get(ProductController.getProductById)
  .patch(ProductController.updateProduct)

module.exports = router
