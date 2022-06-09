// to get all the exported functions from queries.js, I'll require the file and assign it to a variable here
const db = require('./queries')

// I'll require the express module, the built-in body-parser middleware, and I'll set our app and port variables
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4001

// body-parser middleware syntax
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// tell a route to look for a GET request on the root / URL and return some JSON
app.get('/', (req, res) => {
  res.json({info: 'Node.js, Express, and Postgres API'})
})

// for each endpoint, let's set the HTTP request method, the endpoint URL path, and the relevant function:
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.deleteUser)
app.delete('/users/:id', db.deleteUser)

// set the app to listen on the port I set:
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
