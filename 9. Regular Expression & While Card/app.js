const express = require("express");
const app = express();

//Regular Expression.
app.get("/products/:title([a-zA-Z0-9]+)", (req, res) => {
  res.send(`The ultimate value is: ${req.params.title}`);
});

//While Card.
app.get("*", (req, res) => {
  res.status(404).json({
    message: "404!!! Not a valid route",
  });
});

module.exports = app;
