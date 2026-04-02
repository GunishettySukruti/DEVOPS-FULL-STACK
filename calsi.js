const http = require("http");

http.createServer((req, res) => {

  if (req.method === "POST" && req.url === "/calc") {

    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {

      const data = JSON.parse(body);

      let a = Number(data.a);
      let b = Number(data.b);
      let result = 0;

      if (data.op === "add") result = a + b;
      if (data.op === "sub") result = a - b;
      if (data.op === "mul") result = a * b;
      if (data.op === "div") result = a / b;

      const response = {
        number1: a,
        number2: b,
        operation: data.op,
        result: result
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(response));
    });
  }

}).listen(3000);

console.log("Server running at http://localhost:3000");