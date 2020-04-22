const shortid = require('shortid')

const db = require('../db')

exports.index = (_, res) => {
  const users = db.get('users').value()
  res.render('users/index', { users })
}

exports.search = (req, res) => {
  const { name } = req.query
  const users = db.get('users').value()
  const matchedUsers = users.filter((user) => user.name.indexOf(name) !== -1)
  res.render('users/index', { users: matchedUsers, searchValue: name })
}

exports.create = (_, res) => {
  res.render('users/create')
}

exports.get = (req, res) => {
  const { id } = req.params
  const user = db.get('users').find({ id }).value()
  res.render('users/view', { user })
}

exports.postCreate = (req, res) => {
  const { name, age } = req.body
  db.get('users').push({ id: shortid.generate(), name, age }).write()
  res.redirect('/users')
}
