const express = require("express");
const app = express();

app.get("/summoner", (req, res) => {
  res.send("Hello Cameron");
});

app.get("/jr", (req, res) => {
  res.send("Hello jr");
});

app.listen(3000, () => {
  console.log("Server started on port 2000");
});