const mongoose = require('mongoose')
// const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types

const brandSchema = mongoose.Schema(
  {
    products: [
      {
        type: ObjectId,
        ref: 'Product'
      }
    ],
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide a brand name'],
      unique: true
    },
    description: {
      type: String
    },
    email: {
      type: String,
      // validate: [validator.isEmail, 'Please provide a valid email'],
      lowercase: true
    },
    website: {
      // validate: [validator.isURL, 'Please provide a valid url'],
      type: String
    },
    location: String,
    // products: [
    //   {
    //     type: ObjectId,
    //     ref: 'Product'
    //   }
    // ],
    // suppliers: [
    //   {
    //     name: String,
    //     contactNumber: String,
    //     id: {
    //       type: ObjectId,
    //       ref: 'Supplier'
    //     }
    //   }
    // ],
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    }
  },
  {
    timestamp: true
  }
)

const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand
