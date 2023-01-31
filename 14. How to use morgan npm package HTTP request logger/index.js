const express = require("express");
const app = express();

const morgan = require("morgan");

const PORT = 3001;

app.use(morgan("dev"));

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
    `This server is successfully running at http://localhost:${PORT}`
  );
});
