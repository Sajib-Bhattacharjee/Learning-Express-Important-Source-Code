const express = require("express");
const app = express();

const multer = require("multer");

//Upload File...
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "I'm home route",
  });
});
app.get("/register", (req, res) => {
  res.sendfile(__dirname + "/views/index.html");
  res.statusCode = 201;
});
app.post("/register", upload.single("image"), (req, res) => {
  res.status(203).json({
    message: "Successfully Uploaded",
  });
});

module.exports = app;
