const Router = require("express").Router();
const { Register } = require("../../controllers/userController");

// localhost:8080/api/users
Router.get("/", (req, res) => {
  res.send("hello");
});
Router.post("/", Register);

module.exports = Router;
