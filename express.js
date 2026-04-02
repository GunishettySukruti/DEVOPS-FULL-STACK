const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    name: "Sukruti Gunishetty",
    email: "sukruti@example.com",
    message: "Hello World!"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
