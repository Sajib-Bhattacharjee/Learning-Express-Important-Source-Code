const express = require("express");
const app = express();

const UserRouter = require("./routes/users.route");

app.use("/api/user", UserRouter);

app.get("/", (req, res) => {
  res.statusCode = 201;
  res.sendfile("./views/index.html");
});

app.use((req, res) => {
  res.statusCode = 404;
  res.sendfile("./views/error.html");
});
module.exports = app;
