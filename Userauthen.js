const express = require("express");
const app = express();
const PORT = 3000;

// Parse JSON bodies
app.use(express.json());

// In-memory users
let users = [];

// ---------------- Root Route ----------------
app.get("/", (req, res) => {
  res.send("Authentication Server is running");
});

// ---------------- Fake Password Hash ----------------
function hashPassword(password) {
  return "hashed_" + password;
}

// ---------------- Auth Middleware ----------------
function authMiddleware(req, res, next) {
  const username = req.headers.username;

  if (!username) {
    return res.status(401).json({ message: "Unauthorized. No username provided." });
  }

  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(401).json({ message: "Unauthorized. Please login." });
  }

  next();
}

// ---------------- Register ----------------
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required"
    });
  }

  const exists = users.find(u => u.username === username);
  if (exists) {
    return res.status(409).json({ message: "User already exists" });
  }

  users.push({
    username,
    password: hashPassword(password)
  });

  res.status(201).json({ message: "User registered successfully" });
});

// ---------------- Login ----------------
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === hashPassword(password)
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid username or password"
    });
  }

  res.status(200).json({
    message: "Login successful",
    note: "Send username in headers to access /dashboard"
  });
});

// ---------------- Protected Dashboard ----------------
app.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Welcome to the dashboard! You are authenticated."
  });
});

// ---------------- Start Server ----------------
app.listen(PORT, () => {
  console.log(`Authentication server running at http://localhost:${PORT}`);
});