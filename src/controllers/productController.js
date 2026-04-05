const Product = require("../models/Product");

// Create product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;
    const product = new Product({ name, price, description, category, stock });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
