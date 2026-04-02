const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

let students = []

app.get('/', (req, res) => {
  let studentList = ''

  students.forEach((s, index) => {
    studentList += `
      <tr>
        <td>${index + 1}</td>
        <td>${s.name}</td>
        <td>${s.year}</td>
        <td>${s.branch}</td>
        <td>${s.academicYear}</td>
      </tr>
    `
  })

  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>Student Management</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f6f8;
      margin: 0;
      padding: 0;
    }

    header {
      background: #2c3e50;
      color: white;
      padding: 15px;
      text-align: center;
      font-size: 24px;
    }

    .container {
      width: 80%;
      margin: 30px auto;
      background: white;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    h2 {
      color: #333;
    }

    label {
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      margin-bottom: 15px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    button {
      background: #3498db;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background: #2980b9;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    table, th, td {
      border: 1px solid #ddd;
    }

    th {
      background: #3498db;
      color: white;
      padding: 10px;
    }

    td {
      padding: 8px;
      text-align: center;
    }

    tr:nth-child(even) {
      background: #f2f2f2;
    }

    footer {
      text-align: center;
      padding: 10px;
      background: #2c3e50;
      color: white;
      margin-top: 30px;
    }
  </style>
</head>

<body>

  <header>
    Student Management System
  </header>

  <div class="container">
    <h2>Add Student</h2>
    <form action="/submit" method="POST">

      <label>Name</label>
      <input type="text" name="name" placeholder="Enter student name" required>

      <label>Year</label>
      <input type="number" name="year" placeholder="Enter year" required>

      <label>Branch</label>
      <input type="text" name="branch" placeholder="Enter branch" required>

      <label>Academic Year</label>
      <input type="text" name="academicYear" placeholder="2023-2027" required>

      <button type="submit">Add Student</button>
    </form>

    <h2>Student List</h2>
    <table>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Year</th>
        <th>Branch</th>
        <th>Academic Year</th>
      </tr>
      ${studentList || '<tr><td colspan="5">No students added yet</td></tr>'}
    </table>
  </div>

  <footer>
    © 2026 Student Management System
  </footer>

</body>
</html>
  `)
})

app.post('/submit', (req, res) => {
  const { name, year, branch, academicYear } = req.body
  students.push({ name, year, branch, academicYear })
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
