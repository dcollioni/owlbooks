const userRepository = require('./../repositories/userRepository')
const HttpStatus = require('./../enums/HttpStatus')
const bcrypt = require('bcrypt')

const signup = async (userData) => {
  try {
    const { password } = userData
    if (!password || password.length < 6) {
      throw { statusCode: HttpStatus.BAD_REQUEST, message: 'password must have at least 6 chars' }
    }

    userData.password = await bcrypt.hash(password, 12)

    return await userRepository.insert(userData)
  } catch (error) {
    if (error.statusCode && error.message) {
      throw error
    }

    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR
    let message = 'failed on sign up'

    if (error.errors) {
      statusCode = HttpStatus.BAD_REQUEST,
      message = error.message
    } else if (error.code === 11000) {
      statusCode = HttpStatus.CONFLICT
      message = 'e-mail already registered'
    }

    throw { statusCode, message }
  }
}

module.exports = {
  signup
}
