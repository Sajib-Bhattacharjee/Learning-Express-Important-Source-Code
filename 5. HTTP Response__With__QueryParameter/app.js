const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.send("<h1> Hello I'm home page.</h1>");
  // const id = req.query.id;
  // const name = req.query.name;
  const { id, name } = req.query; 
  res.send(`My Id:${id},My Name:${name}`);
  
   //userId/:id/userName/:name
  //const id = req.params.id;
  //const name = req.params.name;

  //const id = req.header("id");
  //const name = req.header("name");
   res.send(`My Id:${id},My Name:${name}`);
  
});
module.exports = app;
