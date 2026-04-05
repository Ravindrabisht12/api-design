const express = require("express");

const productRouter = express.Router();
const { createProduct, getProducts } = require("../controllers/ProductController");

productRouter.post("/", createProduct);
productRouter.get("/", getProducts);

module.exports = productRouter;
