const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(201).send({
    message: "I'm Home Routes.",
  });
});

module.exports = app;
