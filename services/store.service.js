const Store = require('../models/Store')

exports.createStoreService = async (data) => {
  const result = await Store.create(data)
  return result
}

exports.getStoreService = async () => {
  const result = await Store.find({})
  // .select('-product -suppliers')
  return result
}

exports.getStoreServiceById = async (id) => {
  const result = await Store.find({ _id: id })
  return result
}

exports.updateStoreService = async (id, data) => {
  const result = await Store.updateOne(
    { _id: id },
    data
    // , {
    // runValidators: true
    // }
  )
  return result
}
