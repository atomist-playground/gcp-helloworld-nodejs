const express = require("express");

const app = express();
const password = "123456";

app.get("/", (req, res) => {
  const target = process.env.TARGET || "Accenture";
  res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port);
