const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {

  const q = url.parse(req.url, true).query;
  let name = q.name || "";
  let message = name ? "Hello " + name + "!" : "";

  fs.readFile("index.html", "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading file");
    } else {
      const html = data.replace("{{MESSAGE}}", message);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    }
  });

}).listen(3000);

console.log("Server running at http://localhost:3000");
