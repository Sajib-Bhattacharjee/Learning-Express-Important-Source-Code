const express = require("express");
const app = express();
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/user", (req, res) => {
  const { name, age } = req.body;
  res.send(`I'm ${age} now,My Name is Mr.${name}`);
});
module.exports = app;
