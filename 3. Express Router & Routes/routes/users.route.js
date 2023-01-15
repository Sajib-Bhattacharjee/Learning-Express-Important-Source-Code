const express = require("express");
const router = express.Router();

router.get("/regester", (req, res) => {
  res.send("<h1> I'm Regester Page.</h1>");
  res.end();
});
router.get("/login", (req, res) => {
  res.send("<h1> I'm Login Page.</h1>");
  res.end();
});

module.exports = router;
