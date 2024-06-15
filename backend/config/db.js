require('dotenv').config(); // Load environment variables
const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
          console.log("Mongoose Connected");
      });
}

  module.exports = connectDB;