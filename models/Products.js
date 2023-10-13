const mongoose = require('mongoose')
// const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide a Product name'],
      unique: true,
      lowercase: true
    },
    description: {
      type: String
    },
    image: {
      type: String
      // validate: {
      //   validator: (value) => {
      //     if (!Array.isArray(value)) {
      //       return false
      //     }
      //     let isValid = true
      //     value.forEach((url) => {
      //       if (!validator.isURL(url)) {
      //         isValid = false
      //       }
      //     })
      //     return isValid
      //   },
      //   message: 'Please provide valid image url'
      // }
    },
    units: {
      type: String,
      enum: {
        values: ['kg', 'pcs'],
        message: "unit can't br {VALUE},  must be  kg/pcs"
      },
      required: true
    },
    category: {
      type: String,
      required: true
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
    }
    // quantity: {
    //   type: Number,
    //   required: true,
    //   required: true,
    //   min: [0, "quantity can't be negative"],
    //   validate: {
    //     validator: (value) => {
    //       const isInteger = Number.isInteger(value)
    //       if (isInteger) {
    //         return true
    //       } else {
    //         return false
    //       }
    //     }
    //   },
    //   message: 'quantity must be an integer'
    // },
    // status: {
    //   type: String,
    //   enum: ['in-stock', 'out-of-stock'],
    //   message: "status can't be {VALUE}"
    // }
  },
  {
    timestamp: true
  }
)

// ProductSchema.pre('save', function (next) {
//   console.log('before save')
//   if (this.quantity == 0) {
//     this.status = 'out-of-stock'
//   }
//   next()
// })

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
