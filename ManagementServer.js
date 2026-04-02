const express = require('express');
const app = express();
const PORT = 3000;

/* ---------------- Middleware (Bonus) ---------------- */
// Logs request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/* ---------------- Sample Student Data ---------------- */
const students = [
  { id: 1, name: "Aarav", course: "Computer Science", year: 2 },
  { id: 2, name: "Meera", course: "Information Technology", year: 3 },
  { id: 3, name: "Rohan", course: "Electronics", year: 1 }
];

/* ---------------- Routes ---------------- */

// Home route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Student Information Management Server"
  });
});

// Get all students
app.get('/students', (req, res) => {
  res.json(students);
});

// Get student by ID
app.get('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);

  const student = students.find(s => s.id === studentId);

  if (!student) {
    return res.status(404).json({
      error: "Student not found"
    });
  }

  res.json(student);
});

/* ---------------- Server Start ---------------- */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});