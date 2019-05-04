const { UNAUTHORIZED } = require('./../enums/HttpStatus')
const jwt = require('jsonwebtoken')

const authenticator = (req, res, next) => {
  const auth = req.header('authorization')
  if (!auth) {
    return res.sendStatus(UNAUTHORIZED)
  }

  const token = auth.split(' ')[1]
  if (!token) {
    return res.sendStatus(UNAUTHORIZED)
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_PRIVATE_KEY)
    req.userId = req.user._id
  } catch (e) {
    console.error(`authenticator error ${e}`)
    return res.sendStatus(UNAUTHORIZED)
  }

  next()
}

module.exports = authenticator
