const Supplier = require('../models/Supplier')

exports.createSupplierService = async (data) => {
  const result = await Supplier.create(data)
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
