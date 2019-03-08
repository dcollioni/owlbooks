const { mongoose } = require('./../database/connection')
const UserStatus = require('./../enums/UserStatus')

const User = mongoose.model('User', {
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true,
    lowercase: true,
    index: true,
    unique: true,
    validate: {
      validator: (value) => {
        const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
        return emailRegex.test(value)
      },
      message: 'e-mail is not valid'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    index: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  status: {
    type: Number,
    required: true,
    enum: [UserStatus.CREATED, UserStatus.ACTIVATED],
    default: UserStatus.CREATED,
    index: true
  },
  activatedAt: {
    type: Date
  }
})

module.exports = User
