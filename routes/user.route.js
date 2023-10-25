const express = require('express')
const router = express.Router()
const user = require('../controllers/user.controller')
const verifyToken = require('../middleware/verifyToken')

router.route('/signup').post(user.signup)
router.route('/login').post(user.login)
router.get('/me', verifyToken, user.getMe)
router.route('/').get(user.getUser)

module.exports = router

/**
 * token created
 * crypto.randomBytes(64).toString('hex')
 */
