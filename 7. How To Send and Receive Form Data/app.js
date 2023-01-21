const express = require("express");
const app = express();
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/register", (req, res) => {
  const name = req.body.name;
  const mobile = req.body.mobile;
  res.send(`I'm Mr.${name} and My phone number is : ${mobile}`);
});
module.exports = app;
