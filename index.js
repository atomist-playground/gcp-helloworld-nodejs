const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const target = process.env.TARGET || 'Accenture';
  res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port);
