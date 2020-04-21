const express = require("express");
const app = express();

// Setup to use Template engine -» Pug
app.set("view engine", "pug");
app.set("views", "./views");

// Handles HTTP Requests
app.get("/", (_, res) => {
  res.send("Nice to meet you, ExpressJS");
});
app.get("/todos", (_, res) => {
  res.render("todo");
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log("Server is running on", `http://localhost:${port}`)
);
