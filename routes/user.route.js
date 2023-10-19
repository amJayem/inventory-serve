const express = require('express')
const router = express.Router()
const user = require('../controllers/user.controller')

router.route('/signup').post(user.signup).get(user.getUser)
router.route('/').get(user.getUser)

module.exports = router
