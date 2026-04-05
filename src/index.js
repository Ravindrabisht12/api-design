const express = require("express");

// Load environment variables
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// Import routes and DB connection
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Product API");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
    process.exit(1);
  });
