const app = require('express')()
bodyParser = require('body-parser')

const userRoute = require('./routes/user.route')
const bookRoute = require('./routes/book.route')

// Template engine » Pug
app.set('view engine', 'pug')
app.set('views', './views')

// Body Parser » Configuation
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use('/users', userRoute)
app.use('/books', bookRoute)

// Start server
const port = process.env.PORT || 3000
app.listen(port, () =>
  console.log('Server is running on:', `http://localhost:${port}`)
)
