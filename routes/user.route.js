const router = require('express').Router()
const shortid = require('shortid')

const db = require('../db')

router.get('/', (_, res) => {
  const users = db.get('users').value()
  res.render('users/index', { users })
})

router.get('/search', (req, res) => {
  const { name } = req.query
  const users = db.get('users').value()
  const matchedUsers = users.filter((user) => user.name.indexOf(name) !== -1)
  res.render('users/index', { users: matchedUsers, searchValue: name })
})

router.get('/create', (_, res) => {
  res.render('users/create')
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const user = db.get('users').find({ id }).value()
  res.render('users/view', { user })
})

router.post('/create', (req, res) => {
  const { name, age } = req.body
  db.get('users').push({ id: shortid.generate(), name, age }).write()
  res.redirect('/users')
})

module.exports = router
