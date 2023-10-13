const express = require('express')

const Stock = require('../controllers/stock.controller')

const router = express.Router()

router.route('/').get(Stock.getStock).post(Stock.createStock)

router.route('/:id').get(Stock.getStockById).patch(Stock.updateStock)

module.exports = router
