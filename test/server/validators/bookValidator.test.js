const assert = require('assert')
const { describe, it } = require('mocha')
const bookValidator = require('./../../../server/validators/bookValidator')

describe('bookValidator', () => {
  describe('beforeInsert', () => {
    it('should return error when book is null', async () => {
      const book = null
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'book cannot be null')
    })
    it('should return error when userId is null', async () => {
      const book = {}
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'userId cannot be null')
    })
    it('should return error when title is null', async () => {
      const book = { userId: 'abc123' }
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'title cannot be null')
    })
    it('should return error when author is null', async () => {
      const book = { userId: 'abc123', title: 'abc123' }
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'author cannot be null')
    })
    it('should return error when subject is null', async () => {
      const book = { userId: 'abc123', title: 'abc123', author: 'abc123' }
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'subject cannot be null')
    })
    it('should return error when title length is greater than 100', async () => {
      const book = {
        userId: 'abc123',
        title: 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
        author: 'abc123'
      }
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'title max length is 100')
    })
    it('should return error when author length is greater than 100', async () => {
      const book = {
        userId: 'abc123',
        title: 'abc123',
        author: 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
      }
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'author max length is 100')
    })
    it('should return error when subject length is greater than 100', async () => {
      const book = {
        userId: 'abc123',
        title: 'abc123',
        author: 'abc123',
        subject: 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
      }
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'subject max length is 100')
    })
    it('should return error when length is less than 0', async () => {
      const book = {
        userId: 'abc123',
        title: 'abc123',
        author: 'abc123',
        subject: 'abc123',
        length: -1
      }
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'length min value is 0')
    })
    it('should return error when publicationYear is greater than 9999', async () => {
      const book = {
        userId: 'abc123',
        title: 'abc123',
        author: 'abc123',
        subject: 'abc123',
        length: 0,
        publicationYear: 10000
      }
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'publicationYear max value is 9999')
    })
    it('should return error when publisher length is greater than 100', async () => {
      const book = {
        userId: 'abc123',
        title: 'abc123',
        author: 'abc123',
        subject: 'abc123',
        length: 0,
        publicationYear: 9999,
        publisher: 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
      }
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'publisher max length is 100')
    })
    it('should return error when isbn length is greater than 100', async () => {
      const book = {
        userId: 'abc123',
        title: 'abc123',
        author: 'abc123',
        subject: 'abc123',
        length: 0,
        publicationYear: 9999,
        publisher: 'abc123',
        isbn: 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
      }
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, false)
      assert.strictEqual(message, 'isbn max length is 100')
    })
    it('should return success when book is valid', async () => {
      const book = {
        userId: 'abc123',
        title: 'abc123',
        author: 'abc123',
        subject: 'abc123',
        length: 0,
        publicationYear: 9999,
        publisher: 'abc123',
        isbn: 'abc123'
      }
      const { isValid, message } = await bookValidator.beforeInsert(book)

      assert.strictEqual(isValid, true)
      assert.strictEqual(message, undefined)
    })
  })
})
