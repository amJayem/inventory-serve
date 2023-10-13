const Category = require('../models/Category')

exports.createCategoryService = async (data) => {
  const result = await Category.create(data)
  return result
}

exports.getCategoryService = async () => {
  const result = await Category.find({})
  // .select('-product -suppliers')
  return result
}

exports.getCategoryServiceById = async (id) => {
  const result = await Category.find({ _id: id })
  return result
}

exports.updateCategoryService = async (id, data) => {
  const result = await Category.updateOne(
    { _id: id },
    data
    // , {
    // runValidators: true
    // }
  )
  return result
}
