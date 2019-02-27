const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/owlbooks'

const connect = () => {
  return mongoose.connect(connectionString, { useNewUrlParser: true })
}

module.exports = { connect, mongoose }
