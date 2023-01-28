const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.statusCode = 201;
  res.sendfile(__dirname + "/views/index.html");
});

module.exports = app;
