const express = require('express')

const Supplier = require('../controllers/supplier.controller')

const router = express.Router()

router.route('/').get(Supplier.getSupplier).post(Supplier.createSupplier)

router
  .route('/:id')
  .get(Supplier.getSupplierById)
  .patch(Supplier.updateSupplier)

module.exports = router
