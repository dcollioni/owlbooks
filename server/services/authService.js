const userRepository = require('./../repositories/userRepository')
const { OAuth2Client } = require('google-auth-library')
const jwt = require('jsonwebtoken')

const signin = async (provider, tokenId) => {
  try {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const client = new OAuth2Client(clientId)

    const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: clientId,
    })

    const payload = ticket.getPayload()
    const user = await findOrCreateUser(provider, payload)
    const jwt = generateJwt(user)

    return {
      token: jwt,
      name: user.name,
      picture: user.picture,
      provider: user.provider
    }
  } catch (e) {
    console.error(e)
  }
}

const generateJwt = (user) => {
  const privateKey = process.env.JWT_PRIVATE_KEY
  return jwt.sign(user.toObject(), privateKey, { expiresIn: '90d' })
}

const findOrCreateUser = async (provider, payload) => {
  const externalId = payload.sub
  let user = await userRepository.findByProvider(provider, externalId)

  if (!user) {
    user = {
      provider,
      externalId,
      name: payload.name,
      firstName: payload.given_name,
      lastName: payload.family_name,
      email: payload.email,
      picture: payload.picture,
      locale: payload.locale
    }

    user = await userRepository.insert(user)
  }

  return user
}

module.exports = {
  signin
}
