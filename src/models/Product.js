const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  stock: Boolean,
});

productSchema.pre("save", function (next) {
  console.log("Pre-save hook called for product:", this.name);
  if (this.price < 0) {
    return next(new Error("Price cannot be negative"));
  }
  next();
});
