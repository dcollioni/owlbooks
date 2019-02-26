const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api', (_req, res) => {
  res.send('hello from api')
})

const books = [{
  id: '1',
  title: 'A Guerra dos Tronos',
  author: 'RR Martin',
  subject: 'Ficção',
  length: '584',
  publisher: '',
  isbn: '',
  publicationYear: ''
}, {
  id: '2',
  title: 'Harry Potter e a Pedra Filosofal',
  author: 'JK Rowling',
  subject: 'Ficção',
  length: '320',
  publisher: '',
  isbn: '',
  publicationYear: ''
}, {
  id: '3',
  title: 'O Código Da Vinci',
  author: 'Dan Brown',
  subject: 'Ficção',
  length: '691',
  publisher: '',
  isbn: '',
  publicationYear: ''
}, {
  id: '4',
  title: 'O Livro dos Títulos',
  author: 'Pedro Cardoso',
  subject: 'Romance',
  length: '367',
  publisher: '',
  isbn: '',
  publicationYear: ''
}]

app.get('/api/books', (_req, res) => {
  res.json(books)
})

app.get('/api/books/:id', (req, res) => {
  const { params: { id } } = req
  const book = books.find(book => book.id === id)

  if (book) {
    res.json(book)
  } else {
    res.sendStatus(404)
  }
})

// if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})
// }

app.listen(port, () => console.log(`Listening on port ${port}`))
