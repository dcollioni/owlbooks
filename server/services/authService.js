const userRepository = require('./../repositories/userRepository')
const HttpStatus = require('./../enums/HttpStatus')

const signup = async (userData) => {
  try {
    return await userRepository.insert(userData)
  } catch (error) {
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
