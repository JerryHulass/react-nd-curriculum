const Mongoose = require("mongoose");

const productSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
    },
    // maybe stock [ how much we have in our warehouse]
    // maybe adding am image to represent that item.
    img: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = Mongoose.model("Products", productSchema);
