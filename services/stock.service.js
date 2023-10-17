const mongoose = require('mongoose')
const Stock = require('../models/Stock')
const ObjectId = mongoose.Types.ObjectId

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
  console.log(id.red.bold)
  // const result = await Stock.find({ _id: id })
  //   .populate('store.id')
  //   .populate('suppliedBy.id')
  //   .populate('brand.id')
  // const result = await Stock.aggregate([
  //   { $match: { _id: new ObjectId(id) } },
  //   {
  //     $project: {
  //       name: 1,
  //       category: 1,
  //       quantity: 1,
  //       'brand.name': { $toLower: '$brand.name' }
  //     }
  //   }, //'brand.name': 1
  //   {
  //     $lookup: {
  //       from: 'brands',
  //       localField: 'brand.name',
  //       foreignField: 'name',
  //       as: 'brand details'
  //     }
  //   }
  // ])

  /***
   * To get the keyword count you'd need to group the documents by the keyword field, then use the accumulator operator $sum to get the documents count. As for the other field values, since you are grouping all the documents by the keyword value, the best you can do to get the other fields is use the $first operator which returns a value from the first document for each group. Otherwise you may have to use the $push operator to return an array of the field values for each group
   * ref: https://stackoverflow.com/questions/35176641/mongo-group-with-project
   */

  const result = await Stock.aggregate([
    { $match: {} },
    {
      // what data i want to see
      $project: {
        store: 1,
        price: { $convert: { input: '$price', to: 'int' } },
        quantity: 1,
        'brand.name': { $toLower: '$brand.name' }
      }
    },
    {
      $group: {
        _id: '$store.name',
        totalQuantity: { $sum: '$quantity' },
        totalProductPrice: { $sum: { $multiply: ['$price', '$quantity'] } }
      }
    },
    {
      $project: {
        pricePerProducts: {
          $divide: ['$totalProductPrice', '$totalQuantity']
        }
      }
    },
    {
      $project: {
        pricePerProducts: { $avg: '$pricePerProducts' }
        // avgTime: { $divide: ['$avgTime', 60000] }
      }
    }
  ])
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
