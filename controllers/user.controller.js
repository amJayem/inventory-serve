const { signupService, getUserService } = require('../services/user.service')

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
