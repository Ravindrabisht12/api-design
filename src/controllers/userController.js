const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const user = new User({ name, email, password, confirmPassword });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUsers };
