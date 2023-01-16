const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.statusCode = 202;
  res.sendfile("./views/register.html");
});
router.get("/login", (req, res) => {
  res.status(203);
  res.sendfile("./views/login.html");
  
  
   // Generate Cookie && Headers && Clear Cookie.
   //res.cookie("name", "Sajib Bhattacharjee");
   //res.cookie("age", "23");
   //res.clearCookie("name");
   //res.append("id", "70");
   //res.end();
});

router.get("/other", (req, res) => {
  res.statusCode = 204;
  res.json({
    name: "Sajib Bhattacharjee",
    age: 23,
    profession: "Student",
  });
});
router.get("/redirect", (req, res) => {
  res.status(205);
  res.redirect("/");
});
module.exports = router;
