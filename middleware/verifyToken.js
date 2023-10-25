const { promisify } = require('util')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

/**
 * check if token exists
 * if not token send res
 * decode token
 * if valid next
 */

module.exports = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(' ')[1]
    // console.log(token)
    if (!token) {
      return res.status(401).json({
        status: 'false',
        error: 'Your are not logged in.'
      })
    }
    const decoded = await promisify(jwt.verify)(token, process.env.TOKEN)

    // const user = await User.findOne({email: decoded?.email})

    req.user = decoded

    next()
  } catch (error) {
    console.log(error)
    res.status(403).json({
      status: 'false',
      error: 'Invalid token'
    })
  }
}
