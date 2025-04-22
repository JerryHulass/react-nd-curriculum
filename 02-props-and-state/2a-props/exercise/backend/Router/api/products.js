const Router = require("express").Router();

// Get Localhost:8080/api/products

Router.get("/", (req, res) => {
  res.send("All Products");
});

Router.get("/:id", (req, res) => {
  res.send("Single Product");
});

Router.post("/:id", (req, res) => {
  res.send("Post Products");
});

Router.put("/:id", (req, res) => {
  res.send("Update Product");
});
Router.get("/:id", (req, res) => {
  res.send("Delete Product");
});
module.exports = Router;
