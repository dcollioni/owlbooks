const userRepository = require('./../repositories/userRepository')
const { OAuth2Client } = require('google-auth-library')
const FB = require('fb')
const jwt = require('jsonwebtoken')

const signin = async (provider, token) => {
  try {
    let userData

    switch (provider) {
      case 'google':
        userData = await fetchGoogleUser(token)
        break;

      case 'facebook':
        userData = await fetchFacebookUser(token)
        break;
    }

    const user = await findOrCreateUser(userData)
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

const fetchGoogleUser = async (token) => {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const client = new OAuth2Client(clientId)

  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientId,
  })

  const payload = ticket.getPayload()

  return {
    provider: 'google',
    externalId: payload.sub,
    name: payload.name,
    firstName: payload.given_name,
    lastName: payload.family_name,
    email: payload.email,
    picture: payload.picture,
    locale: payload.locale
  }
}

const fetchFacebookUser = async (token) => {
  return new Promise(resolve => {
    const fb = new FB.Facebook({
      appId: process.env.FACEBOOK_APP_ID,
      appSecret: process.env.FACEBOOK_APP_SECRET,
      version: 'v3.3'
    })

    fb.setAccessToken(token)

    fb.api('/me?fields=id,name,email,picture,first_name,last_name,location', (response) => {
      resolve({
        provider: 'facebook',
        externalId: response.id,
        name: response.name,
        firstName: response.first_name,
        lastName: response.last_name,
        email: response.email,
        picture: response.picture && response.picture.data && response.picture.data.url,
        locale: response.location
      })
    })
  })
}

const generateJwt = (user) => {
  const privateKey = process.env.JWT_PRIVATE_KEY
  return jwt.sign(user.toObject(), privateKey, { expiresIn: '90d' })
}

const findOrCreateUser = async (userData) => {
  const { provider, externalId } = userData
  let user = await userRepository.findByProvider(provider, externalId)

  if (!user) {
    user = await userRepository.insert(userData)
  }

  return user
}

module.exports = {
  signin
}
