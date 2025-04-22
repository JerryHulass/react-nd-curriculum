const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log(Object.keys(process.env));
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
