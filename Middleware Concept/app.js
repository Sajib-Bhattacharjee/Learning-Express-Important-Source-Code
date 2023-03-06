const express = require("express");
const app = express();

// Middleware
const myMiddleware = (req, res, next) => {
  console.log("I'm middlewqre");
  next();
};

//Default/Home route...
app.get("/", (req, res) => {
  res.status(200).json({
    message: "I'm home routes",
  });
});

app.get("/users", myMiddleware, (req, res) => {
  res.status(200).json({
    message: "Get all users",
  });
});

//Route Error
app.use((req, res, next) => {
  res.status(404).json({
    message: "404! Route not Found...",
  });
});
//Server Error
app.use((err, req, res, next) => {
  res.status(500).send({
    message: "Something Broke",
    message: err.message,
  });
});

module.exports = app;
