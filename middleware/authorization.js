module.exports = (...role) => {
  return (req, res, next) => {
    const userRole = req.user.role
    // console.log(req.user)
    if (!role.includes(userRole)) {
      return res.status(403).json({
        status: 'false',
        error: 'Your are not authorized'
      })
    }

    next()
  }
}
