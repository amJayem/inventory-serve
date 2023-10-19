const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email address is required'],
      lowercase: true,
      unique: true,
      validate: [validator.isEmail, 'Provide a valid Email']
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 3,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 1
          }),
        message: 'Password {VALUE} is not strong enough.'
      }
    },
    confirmPassword: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        validator: function (value) {
          return value === this.password
        },
        message: "Password doesn't match!"
      }
    },
    role: {
      type: String,
      enum: ['buyer', 'store-manager', 'admin'],
      default: 'buyer'
    },
    name: {
      type: String,
      required: [true, 'Please provide name'],
      trim: true,
      minLength: [3, 'Name must be at least 3 characters'],
      maxLength: [50, 'Name is too long']
    },
    contactNumber: {
      type: String,
      validate: [validator.isMobilePhone, 'Provide a valid mobile phone number']
    },
    shippingAddress: String,
    imageURL: {
      type: String
      // validate: [validator.isURL, 'Please provide a valid url']
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'blocked'],
      default: 'active'
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
  },
  { timestamps: true }
)

userSchema.pre('save', function (next) {
  const password = this.password
  const hashedPass = bcrypt.hashSync(password)
  this.password = hashedPass
  this.confirmPassword = undefined
  next()
})

const User = mongoose.model('User', userSchema)
module.exports = User
