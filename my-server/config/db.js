const mongoose = require('mongoose');
require('dotenv').config(); // Make sure .env variables are available

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT_STRING);
    console.log('Successfully connected to MongoDB Atlas!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;