const http = require("http");
const url = require("url");

http.createServer((req, res) => {

  if (req.url.startsWith("/calc")) {
    const q = url.parse(req.url, true).query;

    let a = Number(q.a);
    let b = Number(q.b);
    let result = 0;

    if (q.op === "add") result = a + b;
    if (q.op === "sub") result = a - b;
    if (q.op === "mul") result = a * b;
    if (q.op === "div") result = a / b;

    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
      <html>
      <head>
        <title>Calculator Result</title>
        <style>
          body {
            background-color: #f2f2f2;
            font-family: Arial;
          }
          .box {
            width: 300px;
            margin: 100px auto;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
            text-align: center;
          }
          h2 {
            color: #007bff;
          }
          p {
            font-size: 18px;
            color: #333;
          }
          .result {
            color: green;
            font-weight: bold;
            font-size: 22px;
          }
        </style>
      </head>

      <body>
        <div class="box">
          <h2>Calculation Result</h2>
          <p>Number 1: ${a}</p>
          <p>Number 2: ${b}</p>
          <p>Operation: ${q.op}</p>
          <p class="result">Result: ${result}</p>
        </div>
      </body>
      </html>
    `);
  }

}).listen(3000);

console.log("Server running at http://localhost:3000");
