const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();

app.get("/convert", (req, res) => {

    const celsius = parseFloat(req.query.c);

    const fahrenheit = (celsius * 9/5) + 32;

    fs.readFile("result.html", "utf8", (err, data) => {

        if (err) {
            res.send("Error reading file");
        } else {

            let result = data.replace(
                '<p id="result"></p>',
                `<p>Temperature in Fahrenheit: ${fahrenheit}</p>`
            );

            res.send(result);
        }

    });

});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});