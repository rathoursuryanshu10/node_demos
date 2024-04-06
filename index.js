// console.log("This index page");
require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Sabashhh.. pahla express ka code run ho gya.");
});
app.get("/twitter", (req, res) => {
  res.send("This is the twitter page...");
});
app.get("/login", (req, res) => {
  res.send("<h1>This is log in page.</h1>");
});

app.listen(process.env.port, () => {
  console.log(`This is listening on port ${port}`);
});
