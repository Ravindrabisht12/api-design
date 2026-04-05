const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbUrl = process.env.DATA_BASE_URL;

const connectDB = async () => {
  await mongoose.connect(dbUrl);
  console.log("MongoDB connected");
};

module.exports = connectDB;
