const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  const { userName, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ userName, email, password: hashed });
    res.status(201).json({
      message: "user registration is sucessful",
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "unable to register",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "password is not matched" });
    }
    const token = jwt.sign(
      { userId: user._id, name: user.userName, email: user.email },
      process.env.JWT_SECRET
    );
    res.status(201).json({ message: "login is sucessfull", token });
  } catch (error) {
    res.status(400).json({
      message: "invalid credentials",
      error: error.message,
    });
  }
};
