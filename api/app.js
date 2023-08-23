const cors = require("cors"); // Import cors
const cookieParser = require("cookie-parser");
const router = require("./router/routes"); // Import routes

const express = require("express");
const app = express(); // Init express
const port = +process.env.PORT || 5000; // Port...
const path = require("path");


// Use cors
app.use(
  express.urlencoded({ extended: false }),
  express.static("./Static"),
  express.json(),
  cors(), 
  cookieParser(),
  router
);


app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./Static/html/index.html"));
});
// Use router
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
