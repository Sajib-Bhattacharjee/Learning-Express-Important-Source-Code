const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.send("<h1> Hello I'm home page.</h1>");
  // const id = req.query.id;
  // const name = req.query.name;
  const { id, name } = req.query;
  res.send(`My Id:${id},My Name:${name}`);
});
module.exports = app;
