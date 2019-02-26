const env = process.env.REACT_APP_ENV || process.env.NODE_ENV || 'dev'

let config

switch (env) {
  case 'production':
  case 'staging':
  case 'dev':
    config = require(`./${env}`)
    break

  case 'development':
    config = require(`./dev`)
    break

  default:
    throw new Error(`Invalid NODE_ENV value: ${env}`)
}

const c = Object.assign({}, config)

export default c
