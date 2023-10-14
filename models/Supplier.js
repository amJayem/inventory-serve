const mongoose = require('mongoose')
// const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types

const stockSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a Suppliers name'],
      trim: true,
      lowercase: true
    },
    email: {
      type: String,
      required: [true, 'Please provide a Suppliers email'],
      trim: true,
      lowercase: true
    },
    brand: {
      name: {
        type: String,
        trim: true,
        required: true
      },
      id: {
        type: ObjectId,
        // required: true,
        ref: 'Brand'
      }
    },
    contactNumber: [
      {
        type: String,
        required: [true, 'Please provide a contact number']
        // validate: {
        //   validator: (value) => {
        //     return validator.isMobilePhone(value)
        //   },
        //   message: 'Please provide a valid phone number'
        // }
      }
    ],
    emergencyContactNumber: {
      type: String,
      required: [true, 'Please provide a emergency contact number']
      // validate: {
      //   validator: (value) => {
      //     return validator.isMobilePhone(value)
      //   },
      //   message: 'Please provide a valid phone number'
      // }
    },
    tradeLicenseNumber: {
      type: Number,
      required: [true, 'Please provide your trade license number']
    },
    presentAddress: {
      type: String,
      required: [true, 'Please provide your present address']
    },
    permanentAddress: {
      type: String,
      required: [true, 'Please provide your permanent address']
    },
    location: {
      type: String,
      // trim:true,
      required: true,
      lowercase: true,
      enum: {
        values: ['dhaka', 'rajshahi', 'khulna'],

        message: '{VALUE} is not a correct division'
      }
    },
    imageURL: {
      type: String
    },
    nationalIdImageURL: {
      type: String,
      required: true
      // validate
    },
    status: {
      type: String,
      // required: true,
      enum: ['active', 'inactive'],
      default: 'active'
    }
  },
  {
    timestamp: true
  }
)

const Supplier = mongoose.model('Suppliers', stockSchema)
module.exports = Supplier

// {
//   "name":"jayem",
// "email":"jayem@gmail.com",
// "brand":{"name":"jayem","id":""},
// "contactNumber":["01759375796"],
// "emergencyContactNumber":["01759375796"],
// "tradeLicenceNumber":11111111115,
// "presentAddress":"24/1 F Block, Bijli Moholla",
// "permanentAddress":"24/1 F Block, Bijli Moholla",
// "location":"Dhaka",
// "imageURL":"img",
// "nationalIdImageURL":"img",
//   "status":"active",
// }
