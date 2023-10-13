const Brand = require('../models/Brand')
const Product = require('../models/Products')

exports.createProductService = async (data) => {
  const result = await Product.create(data)

  // after creating a new product , brand id is updated. will be helpful to populate
  await Brand.updateOne(
    { _id: result.brand.id },
    { $push: { products: result._id } }
  )
  return result
}

exports.getProductService = async () => {
  const result = await Product.find({})
  // .select('-product -suppliers')
  return result
}

exports.getProductServiceById = async (id) => {
  const result = await Product.find({ _id: id })
  return result
}

exports.updateProductService = async (id, data) => {
  const result = await Product.updateOne(
    { _id: id },
    data
    // , {
    // runValidators: true
    // }
  )
  return result
}
