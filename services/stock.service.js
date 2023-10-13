const Stock = require('../models/Stock')

exports.createStockService = async (data) => {
  const result = await Stock.create(data)
  return result
}

exports.getStockService = async () => {
  const result = await Stock.find({})
  // .select('-product -suppliers')
  return result
}

exports.getStockServiceById = async (id) => {
  const result = await Stock.find({ _id: id })
  return result
}

exports.updateStockService = async (id, data) => {
  const result = await Stock.updateOne(
    { _id: id },
    data
    // , {
    // runValidators: true
    // }
  )
  return result
}
