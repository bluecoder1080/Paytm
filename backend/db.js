const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = async () => {
  mongoose.connect(process.env.MONGODB_URI);
  console.log("Database Connected !!!");
};
