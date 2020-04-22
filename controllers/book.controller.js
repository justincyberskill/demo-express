const shortid = require('shortid')

const db = require('../db')

exports.index = (_, res) => {
  const books = db.get('books').value()
  res.render('books/index', { books })
}

exports.search = (req, res) => {
  const { name } = req.query
  const books = db.get('books').value()
  const matchedBooks = books.filter((book) => book.name.indexOf(name) !== -1)
  res.render('books/index', { books: matchedBooks, searchValue: name })
}

exports.create = (_, res) => {
  res.render('books/create')
}

exports.get = (req, res) => {
  const { id } = req.params
  const book = db.get('books').find({ id }).value()
  res.render('books/view', { book })
}

exports.postCreate = (req, res) => {
  const { name, description } = req.body
  db.get('books').push({ id: shortid.generate(), name, description }).write()
  res.redirect('/books')
}
