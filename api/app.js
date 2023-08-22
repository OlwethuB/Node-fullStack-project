const cors = require("cors"); // Import cors

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const router = require("./router/routes"); // Import routes
require("dotenv").config();

const express = require("express");
// const routes =require('./router/routes.js')    // Import express
const app = express(); // Init express
const port = process.env.PORT || 5000; // Port...

const fs = require('fs');
const http = require('http');


app.use(express.json()); // Use express json

// Use cors
app.use(cors(), cookieParser());
// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

// Use router
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
