const express = require("express");
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: "Demo Book", author: "Admin", price: 100 }
];

// sanity check
app.get("/test", (req, res) => {
  res.send("Server is working");
});

// get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// get book by id
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});