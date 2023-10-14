const Brand = require('../models/Brand')
const Supplier = require('../models/Supplier')

exports.createSupplierService = async (data) => {
  const result = await Supplier.create(data)

  // after creating a new product , brand id is updated. will be helpful to populate
  await Brand.updateOne(
    { _id: result.brand.id },
    { $push: { suppliers: result._id } }
  )
  return result
}

exports.getSupplierService = async () => {
  const result = await Supplier.find({})
  // .select('-product -suppliers')
  return result
}

exports.getSupplierServiceById = async (id) => {
  const result = await Supplier.find({ _id: id })
  return result
}

exports.updateSupplierService = async (id, data) => {
  const result = await Supplier.updateOne(
    { _id: id },
    data
    // , {
    // runValidators: true
    // }
  )
  return result
}
