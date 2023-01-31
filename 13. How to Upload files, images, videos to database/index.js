const express = require("express");
const app = express();
const PORT = 3000;

const multer = require("multer");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connect to DB.
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/userTestDB");
    console.log("DB Connection Successfull.");
  } catch (error) {
    console.log("DB is not Connected.");
    console.log(error);
    process.exit(1);
  }
};

//Create Schema ...
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User Name required"],
  },
  image: {
    type: String,
    required: [true, "User Images is requires"],
  },
});

// Model...
const User = mongoose.model("Users", userSchema);

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
app.post("/register", upload.single("image"), async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      image: req.file.filename,
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, async () => {
  console.log(`The app is successfully ruing at http://localhost:${PORT}`);
  await connectDB();
});
