const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files

// Import into DB
const importData = async () => {};

// Delete data
const deleteData = async () => {};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
