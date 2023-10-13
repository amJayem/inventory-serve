const mongoose = require('mongoose')
// const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide a Store name'],
      unique: true,
      lowercase: true
    },
    description: {
      type: String
    },
    image: {
      type: String
      // validator: [validator.isURL, 'Please provide valid image url']
    },
    manager: {
      name: String,
      id: {
        type: ObjectId,
        ref: 'User'
      }
    }
  },
  {
    timestamp: true
  }
)

const Store = mongoose.model('Store', storeSchema)
module.exports = Store
