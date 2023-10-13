const express = require('express')

const Store = require('../controllers/store.controller')

const router = express.Router()

router.route('/').get(Store.getStore).post(Store.createStore)

router.route('/:id').get(Store.getStoreById).patch(Store.updateStore)

module.exports = router
