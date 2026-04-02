const express = require('express')
const app = express()
const port = 3000

// Middleware to read form data
app.use(express.urlencoded({ extended: true }))

// Show form
app.get('/', (req, res) => {
  res.send(`
    <h2>User Details</h2>
    <form action="/submit" method="POST">
      <label>Name:</label><br>
      <input type="text" name="name" placeholder="Enter your name" required><br><br>

      <label>Gmail:</label><br>
      <input type="email" name="email" placeholder="Enter your gmail" required><br><br>

      <button type="submit">Submit</button>
    </form>
  `)
})

// Handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name
  const email = req.body.email

  res.send(`
    <h2>Submitted Details</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
  `)
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
