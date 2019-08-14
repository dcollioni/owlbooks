const assert = require('assert')
const { describe, it, afterEach } = require('mocha')
const sinon = require('sinon')
const jwtService = require('./../../../server/services/jwtService')

describe('jwtService', () => {
  afterEach(() => {
    sinon.restore()
    delete process.env.JWT_PRIVATE_KEY
  })
  describe('generate', () => {
    it('should return encoded token', async () => {
      const object = {
        provider: 'google',
        name: 'John Smith',
        picture: 'picture.jpg'
      }

      process.env.JWT_PRIVATE_KEY = 'private_key'

      const token = jwtService.generate(object)

      assert.notStrictEqual(token, undefined)
      assert.notStrictEqual(token.length, 0)
    })
  })
  describe('verify', () => {
    it('should return decoded object', async () => {
      const object = {
        provider: 'google',
        name: 'John Smith',
        picture: 'picture.jpg'
      }

      process.env.JWT_PRIVATE_KEY = 'private_key'

      const token = jwtService.generate(object)
      const decodedObject = jwtService.verify(token)

      assert.strictEqual(decodedObject.provider, object.provider)
      assert.strictEqual(decodedObject.name, object.name)
      assert.strictEqual(decodedObject.picture, object.picture)
    })
  })
})
