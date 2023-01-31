// npm install chalk@^4.1.2

const express = require("express");
const app = express();
const chalk = require("chalk");

const morgan = require("morgan");

const PORT = 3001;

app.use(morgan("dev"));

const error = chalk.bold.red;
console.log(error("This is Error Message"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "I'm Home  Route",
  });
});

app.post("/register", (req, res) => {
  res.status(201).json({
    message: "I'm Register Route",
  });
});

app.listen(PORT, () => {
  console.log(
    chalk.blue(
      `This server is successfully running at http://localhost:${PORT}`
    )
  );
});
