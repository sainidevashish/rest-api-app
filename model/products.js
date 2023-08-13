const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Products = new mongoose.model("products", productSchema);

module.exports = Products;
