const config = require("../config/default");

const mongoose = require("mongoose");

const db_url = config.db.uri;

mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error", err);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose.js;
