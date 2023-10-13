const mongoose = require('mongoose')
// const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide a category name'],
      unique: true,
      lowercase: true
    },
    description: {
      type: String
    },
    image: {
      type: String
      // validator: [validator.isURL, 'Please provide valid image url']
    }
  },
  {
    timestamp: true
  }
)

const Category = mongoose.model('Category', categorySchema)
module.exports = Category
