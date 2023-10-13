const express = require('express')

const Category = require('../controllers/category.controller')

const router = express.Router()

router.route('/').get(Category.getCategory).post(Category.createCategory)

router
  .route('/:id')
  .get(Category.getCategoryById)
  .patch(Category.updateCategory)

module.exports = router
