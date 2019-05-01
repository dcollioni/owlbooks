const User = require('./../models/User')

const findByProvider = (provider, externalId) => {
  return User.findOne({ provider, externalId })
}

const insert = (userData) => {
  const user = new User({...userData})
  return user.save()
}

module.exports = {
  findByProvider,
  insert
}
