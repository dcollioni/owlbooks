const assert = require('assert')
const { describe, it, afterEach } = require('mocha')
const sinon = require('sinon')
const authService = require('./../../../server/services/authService')
const facebookService = require('./../../../server/services/facebookService')
const googleService = require('./../../../server/services/googleService')
const userRepository = require('./../../../server/repositories/userRepository')

describe('authService', () => {
  afterEach(() => {
    sinon.restore()
    delete process.env.JWT_PRIVATE_KEY
  })
  describe('signin', () => {
    it('should return user from google correctly', async () => {
      const provider = 'google'
      const token = 'abc123'
      process.env.JWT_PRIVATE_KEY = 'privateKey'

      const googleUser = {
        sub: 'id123',
        name: 'John Smith',
        given_name: 'John',
        family_name: 'Smith',
        email: 'js@email.com',
        picture: 'picture.jpg',
        locale: 'en'
      }

      sinon.stub(googleService, 'fetchUser').resolves(googleUser)
      sinon.stub(userRepository, 'findByProvider').resolves(undefined)
      sinon.stub(userRepository, 'insert').resolvesArg(0)

      const user = await authService.signin(provider, token)

      assert.strictEqual(user.provider, provider)
      assert.strictEqual(user.name, googleUser.name)
      assert.strictEqual(user.picture, googleUser.picture)
    })
    it('should return user from facebook correctly', async () => {
      const provider = 'facebook'
      const token = 'abc123'
      process.env.JWT_PRIVATE_KEY = 'privateKey'

      const fbUser = {
        id: 'id123',
        name: 'John Smith',
        first_name: 'John',
        last_name: 'Smith',
        email: 'js@email.com',
        picture: { data: { url: 'newPicture.jpg' } },
        location: 'en'
      }

      sinon.stub(facebookService, 'fetchUser').resolves(fbUser)
      sinon.stub(userRepository, 'findByProvider').resolves(undefined)
      sinon.stub(userRepository, 'insert').resolvesArg(0)

      const user = await authService.signin(provider, token)

      assert.strictEqual(user.provider, provider)
      assert.strictEqual(user.name, fbUser.name)
      assert.strictEqual(user.picture, fbUser.picture.data.url)
    })
    it('should update user picture', async () => {
      const provider = 'facebook'
      const token = 'abc123'
      process.env.JWT_PRIVATE_KEY = 'privateKey'

      const oldUser = {
        _id: '123',
        provider: 'facebook',
        externalId: 'id123',
        picture: 'oldPicture.jpg',
        toObject: function () { return this }
      }

      const fbUser = {
        provider: 'facebook',
        externalId: 'id123',
        picture: { data: { url: 'newPicture.jpg' } }
      }

      sinon.stub(facebookService, 'fetchUser').resolves(fbUser)
      sinon.stub(userRepository, 'findByProvider').resolves(oldUser)
      sinon.stub(userRepository, 'update').resolvesArg(1)

      const user = await authService.signin(provider, token)

      assert.strictEqual(user.picture, fbUser.picture.data.url)
    })
  })
})
