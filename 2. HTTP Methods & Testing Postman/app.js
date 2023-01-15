const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1> I'm get request form Home Route</h1>");
});
app.post("/", (req, res) => {
  res.send("<h1> I'm post request form Home Route</h1>");
});
app.put("/", (req, res) => {
  res.send("<h1> I'm put request form Home Route</h1>");
});
app.delete("/", (req, res) => {
  res.send("<h1> I'm delete request form Home Route</h1>");
});
module.exports = app;
