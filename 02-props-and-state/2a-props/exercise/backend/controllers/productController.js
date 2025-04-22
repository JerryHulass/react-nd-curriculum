const Products = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    //console.log("HELLO");
    const products = await Products.find({});
    //console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    if (!product) return res.status(404).json({ message: "Item not found" });
    res.json(product);
  } catch (error) {
    console.error(error);
  }
};

const createProduct = async (req, res) => {
  try {
    await Products.create(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    console.error(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, img } = req.body;
    console.log(req.body, req.params);
    const verify = await Products.findById(id);
    if (!verify) return res.status(404).json({ message: "Product not Found" });

    const product = {
      name: name,
      price: price,
      description: description,
      img: img,
    };

    const updatedProduct = await Products.findByIdAndUpdate(id, product);

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    console.log(req.params);
    const product = await Products.findByIdAndDelete(req.params.id);

    if (!product) return res.status(404).send({ message: "Product not found" });

    res.status(200).send({ message: " Item was deleted " });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
