const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = "localhost";
// const db = require("./models/index")

app.get("/", (req, res) => {
res.send("Hello World!");
});

app.listen(port, host, () => {
  console.log(`Слушает на http://${host}:${port}`);
});