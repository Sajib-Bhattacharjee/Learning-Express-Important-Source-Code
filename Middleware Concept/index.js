require("dotenv").config();
const app = require("./app");
const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`This server is successfully runing at http://localhost:${Port}`);
});
