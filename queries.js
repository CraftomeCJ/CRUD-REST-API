const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'api',
  password: '12345',
  port: 4001,
})

// GET all users
const getUsers = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (err) {
      throw error
    }
    res.stauts(200).json(results.rows)
  })
}

// GET a single user by ID
const getUserById = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (err) {
      throw error
    }
    res.status(200).json(results.rows)
  })

}
