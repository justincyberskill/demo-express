const express = require("express");
const app = express();

// Setup to use Template engine -» Pug
app.set("view engine", "pug");
app.set("views", "./views");

// Handles HTTP Requests
app.get("/", (_, res) => {
  res.send("Nice to meet you, ExpressJS");
});
const todoItems = ["Eat", "Sleep", "Walk"];
app.get("/todos", (_, res) => {
  res.render("todo", { items: todoItems });
});
app.get("/todos/search", (req, res) => {
  const { t } = req.query;
  const matchedTodo = todoItems.filter((item) => {
    return item.indexOf(t) !== -1;
  });

  res.render("todo", { items: matchedTodo, searchValue: t });
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log("Server is running on", `http://localhost:${port}`)
);
