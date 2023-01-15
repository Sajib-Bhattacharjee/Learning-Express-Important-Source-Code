const express = require("express");
const app = express();

const UserRouter = require("./routes/users.route");

app.use("/api/user", UserRouter);

app.get("/", (req, res) => {
  res.send("<h1> I'm Home Route.</h1>");
});

app.use((req, res) => {
  res.send("<h1> 404 !!! Not a valid url....</h1>");
  res.end();
});
module.exports = app;
