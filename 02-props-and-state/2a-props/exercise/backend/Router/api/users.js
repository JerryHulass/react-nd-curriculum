const Router = require("express").Router();
const { Register, Login } = require("../../controllers/userController");

// localhost:8080/api/users
Router.get("/", (req, res) => {
  res.send("hello");
});
// localhost:8080/api/users/register
Router.post("/register", Register);
// localhost:8080/api/users/login
Router.post("/login", Login);

module.exports = Router;
