const {
  signupService,
  getUserService,
  findUserByEmailService
} = require('../services/user.service')
const { generateToken } = require('../utils/token')

exports.signup = async (req, res) => {
  try {
    const user = await signupService(req.body)
    res.status(200).json({
      status: 'success',
      message: 'Successfully signed up',
      user
    })
  } catch (error) {
    res.status(500).json({
      status: 'Signup Failed',
      error
    })
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await getUserService()

    res.status(200).json({
      status: 'success',
      message: 'Successfully loaded user data',
      user
    })
  } catch (error) {}
}

/**
 * check if email and password is give
 * find user with email
 * if not user send res
 * compare password
 * if password is not matched send res
 * check user is active or send res
 * generate token
 * send user and token
 */

exports.login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(401).json({
      status: 'failed',
      error: 'Please provide your credentials properly'
      // email,
      // password
    })
  }

  const user = await findUserByEmailService(email)

  if (!user) {
    return res.status(401).json({
      status: 'failed',
      error: 'No user found, please create an account'
    })
  }

  const isPasswordValid = user.comparePassword(password, user.password)
  if (!isPasswordValid) {
    return res.status(401).json({
      status: 'failed',
      error: 'Your email or password is incorrect'
    })
  }

  if (user.status != 'active') {
    return res.status(401).json({
      status: 'failed',
      error: 'your account is not active yet'
    })
  }

  const token = generateToken(user)
  const { password: abc, ...others } = user.toObject()

  res.status(200).json({
    status: 'success',
    message: 'Login successful',
    user: others,
    token
  })
}

exports.getMe = async (req, res) => {
  const user = await findUserByEmailService(req.user.email)
  // const user = req.user // get user decoded info

  res.status(200).json({
    status: 'success',
    data: user
  })
}
