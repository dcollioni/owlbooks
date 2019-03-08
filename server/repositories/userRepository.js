const User = require('./../models/User')

const findById = (id) => {
  return Book.findById(id)
}

const insert = (userData) => {
  const user = new User({...userData})
  return user.save()
}

module.exports = {
  findById,
  insert
}
