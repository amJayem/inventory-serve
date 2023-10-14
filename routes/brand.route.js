const express = require('express')
const brandController = require('../controllers/brand.controller')

const router = express.Router()

router
  .route('/')
  .post(brandController.createBrand)
  .get(brandController.getBrand)

router.route('/populate').get(brandController.getBrandPopulateData)

router
  .route('/:id')
  .get(brandController.getBrandById)
  .patch(brandController.updateBrand)

module.exports = router
