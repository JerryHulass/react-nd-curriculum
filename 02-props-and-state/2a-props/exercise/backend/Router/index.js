const Router = require("express").Router();

// localhost:8080/api
Router.get("/", (req, res) => {
  res.send("Test passed ");
});

Router.use("/products", require("./api/products"));

module.exports = Router;
