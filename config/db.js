const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected sucessfully");
  } catch (erorr) {
    console.log("unable to connect with mongoDB");
  }
};

module.exports = connectDB;
