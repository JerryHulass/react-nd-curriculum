const Router = require("express").Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/productController");

// Get Localhost:8080/api/products

Router.get("/", getAllProducts);

Router.get("/:id", getSingleProduct);

Router.post("", createProduct);

Router.put("/:id", updateProduct);
Router.delete("/:id", deleteProduct);
module.exports = Router;
