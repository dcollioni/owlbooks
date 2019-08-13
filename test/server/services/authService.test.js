const assert = require('assert')
const { describe, it, afterEach } = require('mocha')
const sinon = require('sinon')
const authService = require('./../../../server/services/authService')
const facebookService = require('./../../../server/services/facebookService')
const userRepository = require('./../../../server/repositories/userRepository')

describe('authService', () => {
  afterEach(() => {
    sinon.restore()
    delete process.env.JWT_PRIVATE_KEY
  })
  describe('signin', () => {
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
