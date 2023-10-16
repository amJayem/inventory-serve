const mongoose = require('mongoose')
// const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types
// const validator = require("validator")

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
      unique: true,
      lowercase: true
    },

    description: {
      type: String
    },
    unit: {
      type: String,
      // required:true,
      enum: {
        values: ['kg', 'litre', 'pcs'],
        message: "unit can't be {VALUE}, must be kg/litre/pcs"
      }
    },
    imgURLs: {
      type: String
      // required: true,
      // validate: [validator.isURL,  'Please provide valid urls']
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

    category: {
      type: String
      // required: true,
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
        lowercase: true,
        enum: {
          values: ['dhaka', 'rajshahi', 'khulna'],
          message: '{VALUE} is not valid store name'
        }
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
    },
    sellCount: {
      type: Number,
      default: 0,
      min: 0
    }
  },
  {
    timestamp: true
  }
)

const Stock = mongoose.model('Stock', stockSchema)
module.exports = Stock
