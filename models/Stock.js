const mongoose = require('mongoose')
// const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types

const stockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      required: true,
      ref: 'Product'
    },

    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide a Stock name'],
      unique: true
    },

    description: {
      type: String
    },

    price: {
      type: Number,
      required: true,
      min: [0, 'Product price cant be negative']
    },

    quantity: {
      type: Number,
      required: true,
      min: [0, 'Product quantity cant be negative']
    },

    brand: {
      name: {
        type: String,
        required: true
      },
      id: {
        type: ObjectId,
        ref: 'Brand',
        required: true
      }
    },

    status: {
      type: String,
      required: true,
      enum: {
        values: ['in-stock', 'out-of-stock'],
        message: "status can't be {VALUE}"
      },
      default: 'in-stock'
    },

    store: {
      name: {
        type: String,
        trim: true,
        required: [true, 'Please provide a Store name'],
        unique: true,
        lowercase: true
      },
      id: {
        type: ObjectId,
        required: true,
        ref: 'Store'
      }
    },

    suppliedBy: {
      name: {
        type: String,
        trim: true,
        required: [true, 'Please provide a supplier name']
      },
      id: {
        type: ObjectId,
        ref: 'Store'
      }
    }
  },
  {
    timestamp: true
  }
)

const Stock = mongoose.model('Stock', stockSchema)
module.exports = Stock
