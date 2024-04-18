const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect('mongodb+srv://arymangupta:aryman5689@cluste11.mtqjv3h.mongodb.net/', {});
};

module.exports = connectDB;